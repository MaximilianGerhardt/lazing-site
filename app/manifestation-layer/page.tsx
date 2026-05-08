import type { Metadata } from "next";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Manifestation Layer - Lazing",
  description:
    "The Manifestation Layer is the standard direction behind intent-driven interfaces, scoped systems, resolutions and trace.",
  path: "/manifestation-layer",
});

const concepts = [
  {
    title: "Intent",
    text: "A human intention enters the runtime without assuming it should stay as chat.",
    className: "bento-card bento-wide",
  },
  {
    title: "Context",
    text: "The runtime understands the field, memory, credentials, risks and boundaries around the work.",
    className: "bento-card",
  },
  {
    title: "Skill + SOP",
    text: "Reusable expertise and repeatable quality decide what kind of working system should appear.",
    className: "bento-card bento-soft",
  },
  {
    title: "Manifestation",
    text: "The answer becomes a plan, card, tracker, review panel, workflow or workspace.",
    className: "bento-card bento-wide",
  },
  {
    title: "Resolution",
    text: "The user approves, adjusts, delegates or pauses before sensitive actions happen.",
    className: "bento-card",
  },
  {
    title: "Trace",
    text: "The runtime records what happened, why it happened and which scope authorized it.",
    className: "bento-card",
  },
];

export default function ManifestationLayerPage() {
  return (
    <main className="subpage">
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
      <section className="subpage-hero">
        <p className="eyebrow">Standard / Protocol / Idea Identity</p>
        <h1>Interfaces should form around intention.</h1>
        <p>
          The Manifestation Layer describes how a signal becomes a scoped system:
          field, lens, pack, manifestation, resolution and trace.
        </p>
      </section>

      <section className="section">
        <div className="bento-grid docs-bento">
          {concepts.map((concept) => (
            <article className={concept.className} key={concept.title}>
              <span>{concept.title}</span>
              <p>{concept.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section prose-section">
        <h2>Why it matters</h2>
        <p>
          Classical apps ask people to adapt to fixed surfaces. Chatbots often keep
          every request as another message. The Manifestation Layer gives builders a
          language for letting useful interfaces, documents, workflows and decisions
          appear only when the work needs them.
        </p>
        <p>
          Lazing is the runtime product that can host this idea locally or on a VPS.
          The layer is the broader standard direction: scoped, consent-aware,
          traceable and designed for adaptive systems.
        </p>
      </section>
    </main>
  );
}
