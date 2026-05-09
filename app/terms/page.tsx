import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Risk Notice - Lazing",
  description:
    "Use, risk and liability notes for Lazing, AI outputs, local runtime, agents, packs and external adapters.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">Risk Notice</p>
        <h1>AI can help. It can also be wrong.</h1>
        <p>
          Lazing is meant to turn intentions into useful systems. That does not remove
          responsibility. It makes responsibility visible: review, confirm, limit.
        </p>
      </section>

      <section className="section prose-section">
        <h2>Scope</h2>
        <p>
          These notes apply to the public Lazing website, described concepts, newsletter,
          community programs, creator programs, Manifestation Packs, documentation,
          example code and references to the local or self-hosted Lazing runtime.
        </p>

        <h2>No professional advice or production clearance</h2>
        <p>
          Lazing does not provide legal, medical, financial, tax, security, compliance or
          professional case-specific advice. Content, answers, manifestations, plans,
          decision cards, routines and workflows are starting points. They must be
          reviewed before real-world use.
        </p>

        <h2>AI errors and model limits</h2>
        <p>
          AI models can hallucinate, misunderstand sources, use outdated information,
          miss risks, infer unsafe commands, capture requirements incompletely or produce
          outputs that sound plausible while still being wrong. Lazing can structure,
          scope and trace such systems. It does not guarantee correctness, completeness,
          safety or suitability.
        </p>

        <h2>Local runtime and self-hosting</h2>
        <p>
          Anyone running Lazing locally, on a VPS, inside a private network or inside an
          organization is responsible for installation, configuration, updates, backups,
          access control, keys, credentials, adapters, databases, network exposure and
          executed commands. Before production use, permissions should be tightly scoped,
          data should be backed up and outputs should be reviewed.
        </p>

        <h2>Agents, adapters and execution</h2>
        <p>
          Connected tools such as Codex, Claude Code, Ollama, local models,
          OpenAI-compatible adapters, shell tools, browser automation or other engines
          may change files, process data, contact external services or prepare actions.
          Users must understand what an agent is allowed to do, which data is affected
          and what consequences could follow before execution.
        </p>

        <h2>Manifestation Packs and creator content</h2>
        <p>
          Packs, lenses, SOPs, templates, expert tracks and community contributions may
          come from third parties or contain domain assumptions. They are not a guarantee
          of any specific outcome. Creators and pack authors should describe their
          methods responsibly; users must check them against their context, risks and
          legal requirements.
        </p>

        <h2>No high-risk use without independent approval</h2>
        <p>
          Lazing is not intended to be used without separate human review in areas where
          errors could cause significant harm. This includes health, law, finance, human
          resources, critical infrastructure, safety, production systems, minors,
          emergency decisions and other sensitive or high-risk contexts.
        </p>

        <h2>Liability limitation</h2>
        <p>
          Use is, to the extent legally permitted, at your own risk. Liability for
          indirect damage, consequential damage, lost profits, data loss, business
          interruption, incorrect AI outputs, unreviewed automations, misconfigured
          adapters or commands executed by users is excluded to the extent legally
          permitted.
        </p>
        <p>
          Nothing in this notice limits liability that cannot be excluded or limited
          under mandatory law, including liability for intent, gross negligence, injury to
          life, body or health, or mandatory statutory claims.
        </p>

        <h2>Open source and no warranty</h2>
        <p>
          Runtime code is provided through the project repository:{" "}
          <a href={site.repo}>{site.repo}</a>. Where an open-source license applies, that
          license controls. Example code, documentation and previews are provided without
          any promise that they are error-free, secure, permanently available or fit for a
          particular purpose.
        </p>

        <h2>Responsible use</h2>
        <p>
          Good systems ask for boundaries. Use Lazing with small scopes, clear approvals,
          traceable decisions, backups, human review and special care around sensitive
          data. If a decision matters, a responsible human belongs in the loop.
        </p>

        <h2>Contact</h2>
        <p>
          Provider information and contact details are available in the{" "}
          <Link href="/imprint">Imprint</Link>.
        </p>
      </section>
    </main>
  );
}
