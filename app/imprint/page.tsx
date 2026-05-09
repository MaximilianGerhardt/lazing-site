import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Imprint - Lazing",
  description: "Legal notice and provider information for Lazing.",
  path: "/imprint",
});

export default function ImprintPage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">Imprint</p>
        <h1>Clear information. No hidden stage.</h1>
        <p>
          Legal provider information for laz.ing and the public Lazing website. Kept
          simple, reachable and verifiable.
        </p>
      </section>
      <section className="section prose-section">
        <h2>Information according to Section 5 DDG</h2>
        <address>
          Maximilian Gerhardt
          <br />
          c/o Impressumservice Dein-Impressum
          <br />
          Stettiner Straße 41
          <br />
          35410 Hungen
          <br />
          Germany
        </address>

        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:info@p-a.llc">info@p-a.llc</a>
        </p>

        <h2>Responsible for content</h2>
        <p>Maximilian Gerhardt, address as listed above.</p>

        <h2>Project status</h2>
        <p>
          Lazing is a local and self-hosted open-source-oriented software project in
          development. The public website describes direction, architecture and community
          programs. It is not individual advice, professional review, or production
          security clearance.
        </p>

        <h2>Liability for content</h2>
        <p>
          The content on this website is created with care. No guarantee is given for
          accuracy, completeness, timeliness, suitability for a particular purpose or
          uninterrupted availability. Obligations to remove or block unlawful content
          under applicable law remain unaffected.
        </p>

        <h2>Liability for links</h2>
        <p>
          This website may link to external websites, repositories, services or
          documentation. Lazing has no control over their content. The respective provider
          is responsible for external content. If specific legal violations become known,
          affected links will be reviewed and removed where required.
        </p>

        <h2>AI, runtime and agent notice</h2>
        <p>
          Lazing can be connected to AI models, local agents, OpenAI-compatible adapters,
          Codex, Claude Code, Ollama or other tools. AI systems can produce incorrect,
          incomplete, outdated, biased or risky outputs. Users must independently review
          outputs, commands, automations, generated files, workflows, decisions and
          manifestations before use, publication or execution.
        </p>
        <p>
          Lazing is not intended for decisions where errors could cause significant
          personal, health, financial, legal, security, infrastructure or other high-risk
          harm. More detail is available in the <Link href="/terms">Risk Notice</Link>.
        </p>

        <h2>Copyright and marks</h2>
        <p>
          Text, graphics, brand elements, interface designs and other website content are
          subject to applicable law. The Lazing name, logo and visual identity must not be
          used in a way that suggests an official offer, approval or partnership unless
          expressly confirmed.
        </p>

        <h2>No consumer dispute resolution commitment</h2>
        <p>
          To the extent legally permitted, there is no obligation and no willingness to
          participate in dispute resolution proceedings before a consumer arbitration
          board.
        </p>
      </section>
    </main>
  );
}
