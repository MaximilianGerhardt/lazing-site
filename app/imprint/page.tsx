import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Imprint - Lazing",
  description: "German Impressum placeholder for Lazing. Legal details to be filled later.",
  path: "/imprint",
});

export default function ImprintPage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">Impressum</p>
        <h1>Impressum placeholder.</h1>
        <p>
          German legal details should be filled in by the responsible site owner or legal
          advisor before public launch.
        </p>
      </section>
      <section className="section prose-section">
        <h2>To be completed</h2>
        <p>Name, address, contact, responsible person and any required registration or tax details.</p>
      </section>
    </main>
  );
}
