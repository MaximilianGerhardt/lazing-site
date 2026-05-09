import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildLazingWelcomeEmail } from "@/lib/email/lazingNewsletter";
import { site } from "@/lib/site";
import { verifyNewsletterConfirmationToken } from "@/lib/newsletter/doiToken";

export const runtime = "nodejs";

const allowedTracks = new Set(["builder", "developer", "creator", "changelog", "launch"]);
const consentText =
  "I want to receive the Lazing founder letter, product updates and program invitations. I can unsubscribe at any time.";

function redirect(status: string) {
  const url = new URL("/newsletter/confirmed", site.url);
  url.searchParams.set("status", status);

  return NextResponse.redirect(url);
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  const apiKey = process.env.RESEND_API_KEY;
  const confirmationSecret = process.env.NEWSLETTER_CONFIRM_SECRET;

  if (!token || !apiKey || !confirmationSecret) {
    return redirect("invalid");
  }

  const payload = await verifyNewsletterConfirmationToken(token, confirmationSecret);

  if (!payload || !allowedTracks.has(payload.track)) {
    return redirect("invalid");
  }

  const resend = new Resend(apiKey);
  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID;
  const topicId = process.env.RESEND_NEWSLETTER_TOPIC_ID;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const replyTo = process.env.RESEND_REPLY_TO_EMAIL;
  const unsubscribeUrl = process.env.RESEND_UNSUBSCRIBE_URL;
  const now = new Date().toISOString();

  const update = await resend.contacts.update({
    email: payload.email,
    unsubscribed: false,
    properties: {
      source: payload.source,
      track: payload.track,
      consent_text: consentText,
      consent_version: "lazing-newsletter-v1",
      consent_at: now,
      doi_status: "confirmed",
      doi_requested_at: new Date(payload.issuedAt).toISOString(),
      doi_confirmed_at: now,
      page: "laz.ing",
    },
  });

  if (update.error) {
    return redirect("failed");
  }

  if (segmentId) {
    const segment = await resend.contacts.segments.add({
      email: payload.email,
      segmentId,
    });
    const alreadyInSegment =
      segment.error?.statusCode === 409 ||
      segment.error?.message.toLowerCase().includes("already");

    if (segment.error && !alreadyInSegment) {
      return redirect("failed");
    }
  }

  if (topicId) {
    const topic = await resend.contacts.topics.update({
      email: payload.email,
      topics: [{ id: topicId, subscription: "opt_in" }],
    });

    if (topic.error) {
      return redirect("failed");
    }
  }

  if (fromEmail) {
    const welcome = buildLazingWelcomeEmail({
      track: payload.track,
      unsubscribeUrl,
    });

    await resend.emails.send({
      from: fromEmail,
      to: payload.email,
      replyTo,
      subject: welcome.subject,
      html: welcome.html,
      text: welcome.text,
    });
  }

  return redirect("confirmed");
}
