import type { NewsletterTrack } from "@/lib/email/lazingNewsletter";

export type NewsletterConfirmationPayload = {
  email: string;
  track: NewsletterTrack;
  source: string;
  issuedAt: number;
  expiresAt: number;
  nonce: string;
};

const encoder = new TextEncoder();

function base64UrlEncode(value: string | ArrayBuffer) {
  const bytes =
    typeof value === "string" ? encoder.encode(value) : new Uint8Array(value);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function base64UrlDecode(value: string) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder().decode(bytes);
}

async function importKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createNewsletterConfirmationToken(
  payload: NewsletterConfirmationPayload,
  secret: string,
) {
  const body = base64UrlEncode(JSON.stringify(payload));
  const key = await importKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(body));

  return `${body}.${base64UrlEncode(signature)}`;
}

export async function verifyNewsletterConfirmationToken(token: string, secret: string) {
  const [body, signature] = token.split(".");

  if (!body || !signature) {
    return null;
  }

  const key = await importKey(secret);
  const isValid = await crypto.subtle.verify(
    "HMAC",
    key,
    Uint8Array.from(
      atob(signature.replaceAll("-", "+").replaceAll("_", "/").padEnd(signature.length + ((4 - (signature.length % 4)) % 4), "=")),
      (char) => char.charCodeAt(0),
    ),
    encoder.encode(body),
  );

  if (!isValid) {
    return null;
  }

  try {
    const payload = JSON.parse(base64UrlDecode(body)) as NewsletterConfirmationPayload;

    if (!payload.email || !payload.track || payload.expiresAt < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
