import type { Metadata } from "next";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "License - Lazing",
  description: "License and trademark notes for the Lazing public website.",
  path: "/license",
});

export default function LicensePage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">License</p>
        <h1>Open source direction with clear brand boundaries.</h1>
        <p>
          Lazing is planned as an open source runtime and public website. Final license
          and trademark details should be verified before launch.
        </p>
      </section>
      <section className="section prose-section">
        <h2>Code</h2>
        <p>
          Runtime repository: <a href={site.repo}>{site.repo}</a>
        </p>
        <h2>Brand</h2>
        <p>
          The Lazing name, visual identity and public-facing marks should not be used in
          a way that confuses users about official project ownership.
        </p>
      </section>
    </main>
  );
}
