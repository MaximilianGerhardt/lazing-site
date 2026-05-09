import type { Metadata } from "next";
import {
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Fingerprint,
  Layers3,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Telescope,
} from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Manifestation Layer - Lazing",
  description:
    "The Manifestation Layer is the standard direction behind intent-driven interfaces, scoped systems, resolutions and trace.",
  path: "/manifestation-layer",
});

const layerBenefits = [
  {
    icon: MessageCircle,
    title: "Starts as intent",
    copy: "A sentence can become more than another answer bubble.",
  },
  {
    icon: Layers3,
    title: "Forms the surface",
    copy: "Plans, decisions, trackers and workflows appear only when useful.",
  },
  {
    icon: ShieldCheck,
    title: "Keeps the boundary",
    copy: "Fields, consent and trace keep adaptive work accountable.",
  },
];

const flow = [
  ["Signal", "A human intention, observation or request enters the system."],
  ["Field", "The runtime locates the right scope: personal, project, client or organization."],
  ["Lens", "The observation lens shapes what the intention means in this context."],
  ["Pack", "Reusable expertise defines inputs, risks, confirmations and useful surfaces."],
  ["Manifestation", "The response becomes a plan, tracker, card, workflow, document or workspace."],
  ["Resolution", "The person approves, adjusts, delegates or pauses before sensitive work continues."],
  ["Trace", "The system records what happened, why and under which scope."],
];

const outcomes = [
  {
    icon: Boxes,
    title: "Less app switching",
    copy: "The interface is not chosen first. The right working surface appears from the work itself.",
  },
  {
    icon: BrainCircuit,
    title: "More useful agents",
    copy: "Agents can act through packs, fields and resolutions instead of owning the whole context.",
  },
  {
    icon: Fingerprint,
    title: "Personal without being vague",
    copy: "A field gives the system enough context without turning memory into an unbounded pile.",
  },
];

const definitions = [
  ["Field", "A scoped runtime boundary for memory, credentials, documents, adapters and trace."],
  ["Observation Lens", "The perspective that decides how an intent should be interpreted."],
  ["Manifestation Pack", "A reusable unit of domain expertise with inputs, risks and confirmations."],
  ["Manifestation", "The useful surface that appears: plan, tracker, workflow, decision, document or workspace."],
  ["Resolution", "The explicit moment where a human approves, adjusts, delegates or pauses."],
  ["Trace", "A local record of the context, decision and execution path."],
];

export default function ManifestationLayerPage() {
  return (
    <main className="subpage docs-page">
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Lazing", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Manifestation Layer",
              item: `${site.url}/manifestation-layer`,
            },
          ],
        }}
      />

      <ProgramHero
        eyebrow="Manifestation Layer"
        title="Interfaces should form around intention."
        copy="Plain version: a message should not always stay a message. It can become the small working surface the moment needs: a plan, tracker, decision, workspace or trace."
        primary={{ href: "/#start-locally", label: "Start locally" }}
        secondary={{ href: "/developers", label: "Build on the layer" }}
        benefits={layerBenefits}
        visual={{
          kicker: "Layer value",
          title: "A message becomes the right working system.",
          copy: "Not every answer should stay text. Some work deserves a surface.",
          items: [
            { label: "Input", value: "Intent" },
            { label: "Shape", value: "Field + lens" },
            { label: "Output", value: "Manifestation" },
          ],
        }}
      />

      <section className="section docs-thesis">
        <p className="eyebrow">Why This Exists</p>
        <h2>A message should not always become another message.</h2>
        <p>
          Sometimes it should become a tracker, a workspace, a decision, a document,
          a plan, a workflow or a living system. The Manifestation Layer is a shared
          language for that transformation.
        </p>
      </section>

      <section className="section docs-flow-section">
        <p className="eyebrow">The Transformation</p>
        <h2>From signal to trace.</h2>
        <div className="docs-flow-grid">
          {flow.map(([title, copy], index) => (
            <article key={title} className="docs-flow-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section value-section">
        <p className="eyebrow">Value</p>
        <h2>The layer is useful when software gets out of the way.</h2>
        <div className="value-grid">
          {outcomes.map((item) => {
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

      <section className="section docs-definition-section">
        <div>
          <p className="eyebrow">Vocabulary</p>
          <h2>Simple words for adaptive systems.</h2>
          <p>
            Lazing is the runtime product. The Manifestation Layer is the protocol idea
            underneath it: scoped, consent-aware and traceable.
          </p>
        </div>
        <div className="definition-stack">
          {definitions.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section docs-principles">
        <div className="docs-principle-card">
          <Telescope size={24} strokeWidth={1.7} />
          <h2>As little interface as possible. As much context as necessary.</h2>
          <p>
            The layer is not a promise that every screen disappears. It is a discipline:
            start with human intention, create only the surface that earns its place,
            require resolution when the system needs permission and leave trace behind.
          </p>
        </div>
        <div className="docs-principle-card accent">
          <Sparkles size={24} strokeWidth={1.7} />
          <h2>The system adapts to you.</h2>
          <p>
            Not the other way around. That is the product promise, the design rule and
            the standard direction Lazing is built around.
          </p>
          <div className="docs-mini-actions">
            <a className="button button-dark" href="/creators">Creator program</a>
            <a className="button button-light" href="/developers">Developer program</a>
          </div>
        </div>
      </section>

      <section className="section docs-resolution">
        <CheckCircle2 size={26} strokeWidth={1.7} />
        <p className="eyebrow">Resolution</p>
        <h2>The human remains the deciding surface.</h2>
        <p>
          Lazing can form systems, but it should not silently cross sensitive boundaries.
          Resolution is where a person chooses the next move: approve, adjust, delegate or pause.
        </p>
        <Route size={26} strokeWidth={1.7} />
      </section>
    </main>
  );
}
