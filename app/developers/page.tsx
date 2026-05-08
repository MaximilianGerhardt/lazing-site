import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Developer Program - Lazing",
  description:
    "Build adapters, packs, traces and local-first agent workflows for Lazing, the Manifestation Layer runtime.",
  path: "/developers",
});

const stack = [
  {
    title: "Field runtime",
    copy: "Local machine or VPS owns scope, credentials, field memory and execution authority.",
    className: "program-card program-card-large",
  },
  {
    title: "Manifestation Packs",
    copy: "Reusable domain logic: data needs, risks, confirmations, outputs and trace rules.",
    className: "program-card",
  },
  {
    title: "Agent adapters",
    copy: "Codex, Claude Code, Ollama and OpenAI-compatible engines become scoped capabilities.",
    className: "program-card program-card-soft",
  },
  {
    title: "Trace ledger",
    copy: "SQLite-first records for decisions, changes, resolutions and agent handoffs.",
    className: "program-card",
  },
];

const tracks = [
  "Adapter authors",
  "Manifestation Pack maintainers",
  "Local runtime integrators",
  "Benchmark and eval builders",
  "Security and privacy reviewers",
  "Docs and example authors",
];

const packAnatomy = [
  ["Intent", "Which human request should this pack understand?"],
  ["Lens", "Which perspective shapes the system it creates?"],
  ["Inputs", "Which data is needed before useful work starts?"],
  ["Risk", "Which decisions need explicit confirmation?"],
  ["Manifestation", "Which interface, document, workflow or tracker appears?"],
  ["Trace", "What should be recorded for later review?"],
];

export default function DevelopersPage() {
  return (
    <main className="subpage program-page">
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Lazing", item: site.url },
            { "@type": "ListItem", position: 2, name: "Developers", item: `${site.url}/developers` },
          ],
        }}
      />

      <section className="subpage-hero program-hero">
        <p className="eyebrow">Developer Program</p>
        <h1>Build the layer between intention and working software.</h1>
        <p>
          Lazing gives builders a local-first runtime for scoped agents, adaptive interfaces,
          reusable packs and traceable decisions. Bring the engines. Keep the system bounded.
        </p>
        <div className="program-actions">
          <a className="button button-dark" href={site.repo}>
            View runtime repo
          </a>
          <Link className="button button-light" href="/manifestation-layer">
            Read the layer
          </Link>
        </div>
      </section>

      <section className="section program-console-section">
        <div className="program-console-copy">
          <p className="eyebrow">Local First</p>
          <h2>Install the host. Add capabilities. Keep authority close.</h2>
          <p>
            The developer program starts with the runtime itself: local/VPS install,
            scoped adapters, SQLite trace and packs that make useful systems appear from intent.
          </p>
        </div>
        <div className="code-panel program-code">
          <pre>{`git clone https://github.com/MaximilianGerhardt/lazing.git
cd lazing
./install

# planned direction
lazing adapter add codex
lazing adapter add claude-code
lazing adapter add ollama
lazing pack dev ./packs/product-launch`}</pre>
        </div>
      </section>

      <section className="section program-stack-section">
        <div className="section-copy">
          <p className="eyebrow">System Stack</p>
          <h2>The runtime is not another SaaS dashboard.</h2>
          <p>
            It is a host for bounded work: fields, packs, adapters, confirmations and trace.
            Every object has a reason to exist and a scope where it belongs.
          </p>
        </div>
        <div className="program-grid">
          {stack.map((item) => (
            <article className={item.className} key={item.title}>
              <span>{item.title}</span>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section program-split">
        <div>
          <p className="eyebrow">Pack Anatomy</p>
          <h2>A pack is a small operating system for one kind of outcome.</h2>
          <p>
            Packs turn expert behavior into repeatable systems. They do not own the user;
            they ask for the right inputs, create the right surface and leave a clear trace.
          </p>
        </div>
        <div className="anatomy-list">
          {packAnatomy.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section program-roadmap">
        <p className="eyebrow">Contribution Tracks</p>
        <h2>What builders can own first.</h2>
        <div className="track-strip">
          {tracks.map((track) => (
            <span key={track}>{track}</span>
          ))}
        </div>
      </section>

      <NewsletterSignup
        source="developers-page"
        defaultTrack="developer"
        title="Get the developer letter before the API surface settles."
        copy="Join for pack format notes, adapter milestones, architecture decisions and early calls for technical reviewers."
      />
    </main>
  );
}
