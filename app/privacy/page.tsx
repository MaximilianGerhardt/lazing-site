import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy - Lazing",
  description:
    "GDPR-aware privacy information for Lazing. No analytics are loaded before consent.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">Privacy</p>
        <h1>The first visit stays quiet.</h1>
        <p>
          Lazing is designed so necessary functions come first and optional signals are
          loaded only after consent.
        </p>
      </section>
      <section className="section prose-section">
        <h2>Controller</h2>
        <p>
          Maximilian Gerhardt, c/o Impressumservice Dein-Impressum, Stettiner Straße 41,
          35410 Hungen, Germany. Contact:{" "}
          <a href="mailto:info@p-a.llc">info@p-a.llc</a>.
        </p>

        <h2>Current site behavior</h2>
        <p>
          The public website is designed to load no analytics before consent. External
          embeds are blocked until the relevant optional consent category is enabled.
          Necessary storage may be used to remember consent choices.
        </p>
        <h2>Newsletter</h2>
        <p>
          The newsletter form asks for an email address, a selected interest track,
          explicit consent and a timestamped consent version. A Double Opt-In email is
          required before the address is added to the newsletter segment. Pending
          entries are used only to send the confirmation email. No newsletter is sent
          without the confirmation click.
        </p>
        <h2>Consent categories</h2>
        <p>Necessary, Analytics, Media Embeds and Community.</p>
        <h2>AI and runtime note</h2>
        <p>
          The public website does not run your local Lazing runtime. If you install or
          self-host Lazing, the data processing of that runtime depends on your own
          installation, adapters, models, credentials, scopes and infrastructure.
        </p>
      </section>
    </main>
  );
}
