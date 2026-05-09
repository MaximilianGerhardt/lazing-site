import type { Metadata } from "next";
import { Braces, Database, GitBranch, ShieldCheck, Workflow, Zap } from "lucide-react";
import { ProgramApplicationForm } from "@/components/ProgramApplicationForm";
import { ProgramHero } from "@/components/ProgramHero";
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

const developerBenefits = [
  {
    icon: ShieldCheck,
    title: "Scoped by design",
    copy: "Credentials, memory and actions stay inside the field that owns them.",
  },
  {
    icon: GitBranch,
    title: "Bring your engines",
    copy: "Codex, Claude Code, Ollama and local agents plug in as capabilities.",
  },
  {
    icon: Database,
    title: "Traceable work",
    copy: "Every decision and handoff can leave an inspectable local record.",
  },
];

const developerApplicationBenefits = [
  {
    title: "Own a contribution track",
    copy: "Pick a concrete surface: adapter, trace tool, pack test harness, eval, docs or runtime UX.",
  },
  {
    title: "Influence the interface",
    copy: "Early technical contributors help harden pack contracts before the API surface settles.",
  },
  {
    title: "Get early architecture calls",
    copy: "Strong applicants can join private review loops around adapters, scope and trace.",
  },
];

const developerValues = [
  {
    icon: Workflow,
    title: "Less integration glue",
    copy: "Build one pack that can produce plans, review panels, trackers or decisions from intent.",
  },
  {
    icon: Braces,
    title: "Reusable domain logic",
    copy: "Turn expert workflows into pack contracts instead of repeating prompt rituals.",
  },
  {
    icon: Zap,
    title: "Fast local iteration",
    copy: "Prototype against a local runtime before any hosted surface or marketplace exists.",
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

const developerUseCases = [
  ["Codex adapter", "Shape how Codex becomes a scoped capability instead of an owner of the whole context."],
  ["Ollama path", "Help make local models useful inside fields, packs and traceable resolutions."],
  ["Trace viewer", "Build the surface that makes decisions, changes and agent handoffs inspectable."],
  ["Pack test harness", "Create checks that keep creator packs honest before a public showcase exists."],
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

      <ProgramHero
        eyebrow="Developer Program"
        title="Build the layer between intention and working software."
        copy="Codex, Claude Code and Ollama are engines. Lazing is the cockpit, scope and trace layer around them: local-first, bounded and built for real work."
        primary={{ href: "#founding-circle", label: "Apply as Founding Developer" }}
        secondary={{ href: "/manifestation-layer", label: "Read the layer" }}
        benefits={developerBenefits}
        visual={{
          kicker: "Builder value",
          title: "Use powerful engines without giving them the whole house.",
          copy: "The runtime keeps authority while each engine does one bounded job.",
          items: [
            { label: "Authority", value: "Local/VPS host" },
            { label: "Memory", value: "Scoped fields" },
            { label: "Review", value: "Trace + resolution" },
          ],
        }}
      />

      <section className="section value-section">
        <p className="eyebrow">Why Builders Care</p>
        <h2>Useful agent power without the usual sprawl.</h2>
        <div className="value-grid">
          {developerValues.map((item) => {
            const Icon = item.icon;
            return (
              <article className="value-card" key={item.title}>
                <i aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </i>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
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
            It is the control layer for bounded work: fields, packs, adapters, confirmations
            and trace. Every object has a reason to exist and a scope where it belongs.
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

      <section className="section creator-showcase">
        <p className="eyebrow">Developer Use Cases</p>
        <h2>The first technical work should make scope easier to trust.</h2>
        <div className="showcase-grid">
          {developerUseCases.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ProgramApplicationForm
        source="developers-page"
        defaultRole="developer"
        title="Apply before the API surface settles."
        copy="The first Founding Developers will influence adapter boundaries, pack contracts and the trace layer before Lazing hardens."
        benefits={developerApplicationBenefits}
      />
    </main>
  );
}
