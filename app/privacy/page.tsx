import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy - Lazing",
  description:
    "DSGVO-aware privacy placeholder for Lazing. No analytics are loaded before consent.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy placeholder for German legal details.</h1>
        <p>
          This page is prepared for formal legal review. It does not fake compliance
          statements or personal legal data.
        </p>
      </section>
      <section className="section prose-section">
        <h2>Current site behavior</h2>
        <p>
          The public website is designed to load no analytics before consent. External
          embeds are blocked until the relevant optional consent category is enabled.
          Necessary storage may be used to remember consent choices.
        </p>
        <h2>Newsletter</h2>
        <p>
          The newsletter form asks for an email address, a selected interest track,
          explicit consent and a timestamped consent version. The form is prepared for
          Resend contact storage when the backend key is configured. No newsletter
          contact is created without active submission and consent.
        </p>
        <h2>Consent categories</h2>
        <p>Necessary, Analytics, Media Embeds and Community.</p>
        <h2>Contact placeholder</h2>
        <p>Contact details will be added with the final Impressum and privacy review.</p>
      </section>
    </main>
  );
}
