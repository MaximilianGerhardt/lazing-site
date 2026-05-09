import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Bucket = {
  count: number;
  resetAt: number;
};

type RateLimitRule = {
  key: string;
  limit: number;
  windowMs: number;
};

type RateLimitResult = {
  ok: boolean;
  retryAfter: number;
};

const buckets = new Map<string, Bucket>();
const encoder = new TextEncoder();

function now() {
  return Date.now();
}

function pruneExpiredBuckets(currentTime: number) {
  if (buckets.size < 500) return;

  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= currentTime) {
      buckets.delete(key);
    }
  }
}

function hashKey(value: string) {
  let hash = 5381;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }

  return (hash >>> 0).toString(36);
}

export async function readJsonWithLimit<T>(request: Request, maxBytes: number) {
  const contentLength = request.headers.get("content-length");

  if (contentLength && Number(contentLength) > maxBytes) {
    return {
      ok: false as const,
      response: NextResponse.json({ message: "Request is too large." }, { status: 413 }),
    };
  }

  const text = await request.text();

  if (encoder.encode(text).byteLength > maxBytes) {
    return {
      ok: false as const,
      response: NextResponse.json({ message: "Request is too large." }, { status: 413 }),
    };
  }

  try {
    return { ok: true as const, data: JSON.parse(text) as T };
  } catch {
    return {
      ok: false as const,
      response: NextResponse.json({ message: "Invalid request." }, { status: 400 }),
    };
  }
}

export function assertTrustedOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) return null;

  const allowedOrigins = new Set([
    site.url,
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
  ]);

  if (allowedOrigins.has(origin)) return null;

  return NextResponse.json({ message: "Request origin is not allowed." }, { status: 403 });
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-real-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]
    ?? "unknown";

  return forwarded.trim() || "unknown";
}

export function checkRateLimits(rules: RateLimitRule[]): RateLimitResult {
  const currentTime = now();
  pruneExpiredBuckets(currentTime);

  let retryAfter = 0;

  for (const rule of rules) {
    const bucket = buckets.get(rule.key);

    if (bucket && bucket.resetAt > currentTime && bucket.count >= rule.limit) {
      retryAfter = Math.max(retryAfter, Math.ceil((bucket.resetAt - currentTime) / 1000));
    }
  }

  if (retryAfter > 0) {
    return { ok: false, retryAfter };
  }

  for (const rule of rules) {
    const existing = buckets.get(rule.key);

    if (!existing || existing.resetAt <= currentTime) {
      buckets.set(rule.key, { count: 1, resetAt: currentTime + rule.windowMs });
    } else {
      existing.count += 1;
    }
  }

  return { ok: true, retryAfter: 0 };
}

export function submissionRateLimit({
  request,
  namespace,
  email,
  ipLimit,
  emailLimit,
  windowMs,
  emailWindowMs,
}: {
  request: Request;
  namespace: string;
  email: string;
  ipLimit: number;
  emailLimit: number;
  windowMs: number;
  emailWindowMs: number;
}) {
  const ip = getClientIp(request);
  const normalizedEmail = email.toLowerCase();
  const result = checkRateLimits([
    {
      key: `${namespace}:ip:${hashKey(ip)}`,
      limit: ipLimit,
      windowMs,
    },
    {
      key: `${namespace}:email:${hashKey(normalizedEmail)}`,
      limit: emailLimit,
      windowMs: emailWindowMs,
    },
  ]);

  if (result.ok) return null;

  return NextResponse.json(
    { message: "Too many attempts. Please wait a few minutes and try again." },
    {
      status: 429,
      headers: {
        "Retry-After": String(result.retryAfter),
      },
    },
  );
}
