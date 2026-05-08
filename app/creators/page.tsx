import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Creator Program - Lazing",
  description:
    "The Lazing creator program helps experts turn repeatable methods into systems, packs, routines and expert tracks.",
  path: "/creators",
});

const creatorTracks = [
  {
    title: "Methods",
    copy: "Your repeatable way of solving a problem becomes a guided system.",
    className: "program-card program-card-large",
  },
  {
    title: "Routines",
    copy: "Nutrition, learning, client onboarding, focus and planning can become living tracks.",
    className: "program-card",
  },
  {
    title: "Packs",
    copy: "Reusable expertise that knows what to ask, what to create and when to stop.",
    className: "program-card program-card-soft",
  },
  {
    title: "Outcomes",
    copy: "The audience gets a useful working surface instead of one more saved post.",
    className: "program-card",
  },
];

const examples = [
  ["Fitness", "A nutrition creator ships a meal-log pack with check-ins, risk flags and progress reviews."],
  ["Agency", "A strategist ships client onboarding systems with briefs, decisions and launch trace."],
  ["Education", "A teacher ships a learning journey that adapts to goals, gaps and weekly review."],
  ["Software", "A developer ships code review routines, benchmark battles and release checklists."],
];

const principles = [
  "Empowerment before monetization",
  "Useful systems before marketplaces",
  "Consent before cross-scope sharing",
  "Trace before claims",
  "Creator brand stays visible",
  "Audience outcomes decide quality",
];

export default function CreatorsPage() {
  return (
    <main className="subpage program-page creator-program-page">
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Lazing", item: site.url },
            { "@type": "ListItem", position: 2, name: "Creators", item: `${site.url}/creators` },
          ],
        }}
      />

      <section className="subpage-hero program-hero creator-page-hero">
        <p className="eyebrow">Creator Program</p>
        <h1>Publish the method behind the content.</h1>
        <p>
          The future creator does not only publish posts. They publish routines,
          workflows, lenses and expert tracks that help people get better outcomes.
        </p>
        <div className="program-actions">
          <Link className="button button-dark" href="/community">
            Join early creators
          </Link>
          <Link className="button button-light" href="/manifestation-layer">
            See Manifestation Packs
          </Link>
        </div>
      </section>

      <section className="section program-stack-section">
        <div className="section-copy">
          <p className="eyebrow">Creator Operating Layer</p>
          <h2>Your audience should not have to reconstruct your method from memory.</h2>
          <p>
            Lazing can turn creator expertise into systems people run locally or on their VPS.
            The creator provides the lens. The runtime keeps the scope.
          </p>
        </div>
        <div className="program-grid">
          {creatorTracks.map((track) => (
            <article className={track.className} key={track.title}>
              <span>{track.title}</span>
              <p>{track.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section creator-showcase">
        <p className="eyebrow">Program Examples</p>
        <h2>Creator value becomes a repeatable outcome.</h2>
        <div className="showcase-grid">
          {examples.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section program-split">
        <div>
          <p className="eyebrow">Trust Model</p>
          <h2>This should feel like a premium creator brand, not a template marketplace.</h2>
          <p>
            The first creator story is empowerment: experts translate their best work into
            scoped systems. Marketplace mechanics can come later, after quality and trust exist.
          </p>
        </div>
        <div className="principle-stack">
          {principles.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </div>
      </section>

      <section className="section creator-path">
        <div className="path-card">
          <span>01</span>
          <h3>Describe the method</h3>
          <p>What do you repeatedly help people do better?</p>
        </div>
        <div className="path-card">
          <span>02</span>
          <h3>Define the lens</h3>
          <p>What context changes the right answer?</p>
        </div>
        <div className="path-card">
          <span>03</span>
          <h3>Ship the pack</h3>
          <p>The audience runs a scoped system, not another generic app.</p>
        </div>
      </section>

      <NewsletterSignup
        source="creators-page"
        defaultTrack="creator"
        title="Join the creator list before packs open."
        copy="Get creator program notes, pack examples, early review calls and the first launch invitation when the program is ready."
      />
    </main>
  );
}
