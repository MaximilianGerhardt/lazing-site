import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildFoundingCircleReviewEmail,
  buildLazingWelcomeEmail,
} from "@/lib/email/lazingNewsletter";
import type { ProgramRole } from "@/lib/program/foundingCircle";
import { site } from "@/lib/site";
import { verifyNewsletterConfirmationToken } from "@/lib/newsletter/doiToken";
import { contactPropertiesToValues, contactProperty } from "@/lib/newsletter/resendContact";

export const runtime = "nodejs";

const allowedTracks = new Set(["builder", "developer", "creator", "changelog", "launch"]);
const allowedRoles = new Set<ProgramRole>(["creator", "developer", "builder"]);
const consentText =
  "I want to receive the Lazing founder letter, product updates and program invitations. I can unsubscribe at any time.";
const programConsentText =
  "I want to receive the Lazing founder letter and Founding Circle program invitations. I can unsubscribe at any time.";

function redirect(status: string) {
  const url = new URL("/newsletter/confirmed", site.url);
  url.searchParams.set("status", status);

  return NextResponse.redirect(url);
}

function redirectProgram(status: string, role?: ProgramRole) {
  const url = new URL("/program/confirmed", site.url);
  url.searchParams.set("status", status);

  if (role) {
    url.searchParams.set("role", role);
  }

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

  if (payload.kind === "program") {
    const role = payload.programRole;

    if (!role || !allowedRoles.has(role)) {
      return redirectProgram("invalid");
    }

    const existing = await resend.contacts.get({ email: payload.email });

    if (existing.error) {
      return redirectProgram("failed", role);
    }

    const existingProperties = existing.data.properties;
    const programUseCase = contactProperty(existingProperties, "program_use_case");
    const programContribution = contactProperty(existingProperties, "program_contribution");
    const programLink = contactProperty(existingProperties, "program_link");
    const programStatus = contactProperty(existingProperties, "program_status");

    if (!programUseCase || !programContribution) {
      return redirectProgram("invalid", role);
    }

    if (programStatus === "pending_review") {
      return redirectProgram("confirmed", role);
    }

    const update = await resend.contacts.update({
      email: payload.email,
      unsubscribed: false,
      properties: {
        ...contactPropertiesToValues(existingProperties),
        source: payload.source,
        track: payload.track,
        program_role: role,
        program_status: "pending_review",
        program_use_case: programUseCase,
        program_contribution: programContribution,
        program_link: programLink,
        program_source: payload.source,
        consent_text: programConsentText,
        consent_version: "lazing-founding-circle-v1",
        consent_at: now,
        doi_status: "confirmed",
        doi_requested_at: new Date(payload.issuedAt).toISOString(),
        doi_confirmed_at: now,
        page: "laz.ing",
      },
    });

    if (update.error) {
      return redirectProgram("failed", role);
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
        return redirectProgram("failed", role);
      }
    }

    if (topicId) {
      const topic = await resend.contacts.topics.update({
        email: payload.email,
        topics: [{ id: topicId, subscription: "opt_in" }],
      });

      if (topic.error) {
        return redirectProgram("failed", role);
      }
    }

    if (fromEmail) {
      const programReviewEmail =
        process.env.PROGRAM_REVIEW_EMAIL ?? process.env.RESEND_REPLY_TO_EMAIL ?? "info@p-a.llc";
      const review = buildFoundingCircleReviewEmail({
        email: payload.email,
        role,
        useCase: programUseCase,
        contribution: programContribution,
        link: programLink,
        source: payload.source,
      });

      const reviewEmail = await resend.emails.send({
        from: fromEmail,
        to: programReviewEmail,
        replyTo: payload.email,
        subject: review.subject,
        html: review.html,
        text: review.text,
      });

      if (reviewEmail.error) {
        return redirectProgram("failed", role);
      }
    }

    return redirectProgram("confirmed", role);
  }

  const existing = await resend.contacts.get({ email: payload.email });

  if (existing.data && contactProperty(existing.data.properties, "newsletter_status") === "confirmed") {
    return redirect("confirmed");
  }

  const update = await resend.contacts.update({
    email: payload.email,
    unsubscribed: false,
    properties: {
      ...(existing.data ? contactPropertiesToValues(existing.data.properties) : {}),
      source: payload.source,
      track: payload.track,
      consent_text: consentText,
      consent_version: "lazing-newsletter-v1",
      newsletter_status: "confirmed",
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
