import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildLazingConfirmationEmail,
  type NewsletterTrack,
} from "@/lib/email/lazingNewsletter";
import { site } from "@/lib/site";
import { createNewsletterConfirmationToken } from "@/lib/newsletter/doiToken";

export const runtime = "nodejs";

const allowedTracks = new Set(["builder", "developer", "creator", "changelog", "launch"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const consentText =
  "I want to receive the Lazing founder letter, product updates and program invitations. I can unsubscribe at any time.";
const confirmationExpiryHours = 48;

type NewsletterPayload = {
  email?: unknown;
  track?: unknown;
  consent?: unknown;
  source?: unknown;
  company?: unknown;
};

function cleanText(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim().slice(0, 120) : fallback;
}

export async function POST(request: Request) {
  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (payload.company) {
    return NextResponse.json({ message: "Thanks. Your request was received." });
  }

  const email = cleanText(payload.email).toLowerCase();
  const track = cleanText(payload.track, "launch");
  const source = cleanText(payload.source, "lazing-site");

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (!payload.consent) {
    return NextResponse.json({ message: "Please confirm the newsletter consent." }, { status: 400 });
  }

  if (!allowedTracks.has(track)) {
    return NextResponse.json({ message: "Invalid newsletter track." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const confirmationSecret = process.env.NEWSLETTER_CONFIRM_SECRET;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey) {
    return NextResponse.json(
      { message: "Newsletter backend is prepared. Add RESEND_API_KEY before launch." },
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
  const token = await createNewsletterConfirmationToken(
    {
      email,
      track: track as NewsletterTrack,
      source,
      issuedAt: nowMs,
      expiresAt: nowMs + confirmationExpiryHours * 60 * 60 * 1000,
      nonce: crypto.randomUUID(),
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
      consent_text: consentText,
      consent_version: "lazing-newsletter-v1",
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
        { message: "Newsletter signup failed. Please try again later." },
        { status: created.error.statusCode ?? 500 },
      );
    }

    const updated = await resend.contacts.update({
      email,
      properties: contact.properties,
    });

    if (updated.error) {
      return NextResponse.json(
        { message: "Newsletter signup failed. Please try again later." },
        { status: updated.error.statusCode ?? 500 },
      );
    }
  }

  const confirmation = buildLazingConfirmationEmail({
    track: track as NewsletterTrack,
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
    message: "One step left. Please confirm the email we just sent.",
  });
}
