import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildFoundingCircleConfirmationEmail } from "@/lib/email/lazingNewsletter";
import { createNewsletterConfirmationToken } from "@/lib/newsletter/doiToken";
import { contactPropertiesToValues } from "@/lib/newsletter/resendContact";
import { programRoleTracks, type ProgramRole } from "@/lib/program/foundingCircle";
import { site } from "@/lib/site";
import {
  assertTrustedOrigin,
  readJsonWithLimit,
  submissionRateLimit,
} from "@/lib/security/requestGuards";

export const runtime = "nodejs";

const allowedRoles = new Set<ProgramRole>(["creator", "developer", "builder"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const confirmationExpiryHours = 48;
const consentText =
  "I want to receive the Lazing founder letter and Founding Circle program invitations. I can unsubscribe at any time.";

type ProgramApplicationPayload = {
  email?: unknown;
  role?: unknown;
  useCase?: unknown;
  contribution?: unknown;
  link?: unknown;
  source?: unknown;
  consent?: unknown;
  company?: unknown;
};

function cleanText(value: unknown, fallback = "", maxLength = 900) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : fallback;
}

function isProgramRole(value: string): value is ProgramRole {
  return allowedRoles.has(value as ProgramRole);
}

export async function POST(request: Request) {
  const originError = assertTrustedOrigin(request);

  if (originError) return originError;

  const body = await readJsonWithLimit<ProgramApplicationPayload>(request, 8192);

  if (!body.ok) return body.response;

  const payload = body.data;

  if (payload.company) {
    return NextResponse.json({ message: "Thanks. Your request was received." });
  }

  const email = cleanText(payload.email, "", 180).toLowerCase();
  const role = cleanText(payload.role, "", 40);
  const useCase = cleanText(payload.useCase);
  const contribution = cleanText(payload.contribution);
  const link = cleanText(payload.link, "", 500);
  const source = cleanText(payload.source, "founding-circle", 120);

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (!isProgramRole(role)) {
    return NextResponse.json({ message: "Please choose a valid program role." }, { status: 400 });
  }

  if (!payload.consent) {
    return NextResponse.json({ message: "Please confirm the program consent." }, { status: 400 });
  }

  if (useCase.length < 12) {
    return NextResponse.json({ message: "Please describe your primary use case." }, { status: 400 });
  }

  if (contribution.length < 12) {
    return NextResponse.json({ message: "Please describe what you can contribute." }, { status: 400 });
  }

  const rateLimitError = submissionRateLimit({
    request,
    namespace: "program",
    email,
    ipLimit: 8,
    emailLimit: 2,
    windowMs: 10 * 60 * 1000,
    emailWindowMs: 60 * 60 * 1000,
  });

  if (rateLimitError) return rateLimitError;

  const apiKey = process.env.RESEND_API_KEY;
  const confirmationSecret = process.env.NEWSLETTER_CONFIRM_SECRET;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey) {
    return NextResponse.json(
      { message: "Program backend is prepared. Add RESEND_API_KEY before launch." },
      { status: 503 },
    );
  }

  if (!confirmationSecret || !fromEmail) {
    return NextResponse.json(
      { message: "Double opt-in is prepared. Add sender and confirmation secret before launch." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const replyTo = process.env.RESEND_REPLY_TO_EMAIL;
  const now = new Date().toISOString();
  const nowMs = Date.now();
  const baseUrl = process.env.NEWSLETTER_CONFIRM_BASE_URL ?? site.url;
  const track = programRoleTracks[role];
  const token = await createNewsletterConfirmationToken(
    {
      kind: "program",
      email,
      track,
      source,
      issuedAt: nowMs,
      expiresAt: nowMs + confirmationExpiryHours * 60 * 60 * 1000,
      nonce: crypto.randomUUID(),
      programRole: role,
    },
    confirmationSecret,
  );
  const confirmUrl = new URL("/api/newsletter/confirm", baseUrl);
  confirmUrl.searchParams.set("token", token);

  const contact = {
    email,
    properties: {
      source,
      track,
      program_role: role,
      program_status: "pending_doi",
      program_use_case: useCase,
      program_contribution: contribution,
      program_link: link,
      program_source: source,
      consent_text: consentText,
      consent_version: "lazing-founding-circle-v1",
      consent_at: "",
      doi_status: "pending",
      doi_requested_at: now,
      doi_confirmed_at: "",
      page: "laz.ing",
    },
  };

  const created = await resend.contacts.create(contact);

  if (created.error) {
    const alreadyExists =
      created.error.statusCode === 409 || created.error.message.toLowerCase().includes("already");

    if (!alreadyExists) {
      return NextResponse.json(
        { message: "Program application failed. Please try again later." },
        { status: created.error.statusCode ?? 500 },
      );
    }

    const existing = await resend.contacts.get({ email });
    const updated = await resend.contacts.update({
      email,
      properties: {
        ...(existing.data ? contactPropertiesToValues(existing.data.properties) : {}),
        ...contact.properties,
      },
    });

    if (updated.error) {
      return NextResponse.json(
        { message: "Program application failed. Please try again later." },
        { status: updated.error.statusCode ?? 500 },
      );
    }
  }

  const confirmation = buildFoundingCircleConfirmationEmail({
    role,
    confirmUrl: confirmUrl.toString(),
    expiresInHours: confirmationExpiryHours,
  });

  const confirmationEmail = await resend.emails.send({
    from: fromEmail,
    to: email,
    replyTo,
    subject: confirmation.subject,
    html: confirmation.html,
    text: confirmation.text,
  });

  if (confirmationEmail.error) {
    return NextResponse.json(
      { message: "The confirmation email could not be sent yet. Please try again later." },
      { status: confirmationEmail.error.statusCode ?? 500 },
    );
  }

  return NextResponse.json({
    message: "One step left. Please confirm the application email we just sent.",
  });
}
