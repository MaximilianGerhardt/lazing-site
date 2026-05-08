import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildLazingWelcomeEmail, type NewsletterTrack } from "@/lib/email/lazingNewsletter";

export const runtime = "nodejs";

const allowedTracks = new Set(["builder", "developer", "creator", "changelog", "launch"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const consentText =
  "I want to receive the Lazing founder letter, product updates and program invitations. I can unsubscribe at any time.";

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
  if (!apiKey) {
    return NextResponse.json(
      { message: "Newsletter backend is prepared. Add RESEND_API_KEY before launch." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID;
  const topicId = process.env.RESEND_NEWSLETTER_TOPIC_ID;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const replyTo = process.env.RESEND_REPLY_TO_EMAIL;
  const unsubscribeUrl = process.env.RESEND_UNSUBSCRIBE_URL;
  const now = new Date().toISOString();
  const contact = {
    email,
    unsubscribed: false,
    properties: {
      source,
      track,
      consent_text: consentText,
      consent_version: "lazing-newsletter-v1",
      consent_at: now,
      page: "laz.ing",
    },
    segments: segmentId ? [{ id: segmentId }] : undefined,
    topics: topicId ? [{ id: topicId, subscription: "opt_in" as const }] : undefined,
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
      unsubscribed: false,
      properties: contact.properties,
    });

    if (updated.error) {
      return NextResponse.json(
        { message: "Newsletter signup failed. Please try again later." },
        { status: updated.error.statusCode ?? 500 },
      );
    }
  }

  if (fromEmail) {
    const welcome = buildLazingWelcomeEmail({
      track: track as NewsletterTrack,
      unsubscribeUrl,
    });

    const welcomeEmail = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo,
      subject: welcome.subject,
      html: welcome.html,
      text: welcome.text,
    });

    if (welcomeEmail.error) {
      return NextResponse.json(
        { message: "You are on the list, but the welcome email could not be sent yet." },
        { status: welcomeEmail.error.statusCode ?? 500 },
      );
    }
  }

  return NextResponse.json({
    message: "You are on the Lazing letter. No noise, only meaningful updates.",
  });
}
