import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "License - Lazing",
  description: "License, trademark and warranty notes for the Lazing public website.",
  path: "/license",
});

export default function LicensePage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">License</p>
        <h1>Open source direction with clear brand boundaries.</h1>
        <p>
          Lazing is built in the open, but the name, trust layer and user expectations
          need clear boundaries.
        </p>
      </section>
      <section className="section prose-section">
        <h2>Code</h2>
        <p>
          Runtime repository: <a href={site.repo}>{site.repo}</a>
        </p>
        <p>
          The applicable license for source code is the license file published in the
          relevant repository. If a repository, package or file contains its own license
          notice, that notice controls for that material.
        </p>

        <h2>No warranty</h2>
        <p>
          Software, documentation, examples, diagrams and previews are provided without
          any promise that they are error-free, secure, uninterrupted, legally suitable,
          commercially usable or fit for a particular purpose. AI outputs and agent
          actions must be reviewed before use.
        </p>

        <h2>Brand</h2>
        <p>
          The Lazing name, visual identity and public-facing marks should not be used in
          a way that confuses users about official project ownership.
        </p>
        <p>
          Do not present a fork, pack, service, community, marketplace or hosted runtime
          as official Lazing unless explicit permission has been given.
        </p>

        <h2>Risk and liability notes</h2>
        <p>
          The full AI, runtime, adapter and self-hosting risk notes are available under{" "}
          <Link href="/terms">Risk Notice</Link>.
        </p>
      </section>
    </main>
  );
}
