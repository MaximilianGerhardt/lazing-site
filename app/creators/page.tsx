import type { Metadata } from "next";
import { BadgeCheck, ChartSpline, HeartHandshake, PanelsTopLeft, Sparkles, UsersRound } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProgramHero } from "@/components/ProgramHero";
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

const creatorBenefits = [
  {
    icon: Sparkles,
    title: "Expertise becomes usable",
    copy: "Your method turns into a system people can actually run.",
  },
  {
    icon: BadgeCheck,
    title: "Premium by default",
    copy: "The experience carries trust before any marketplace mechanics appear.",
  },
  {
    icon: UsersRound,
    title: "Audience outcomes",
    copy: "People get routines, decisions and progress instead of another saved post.",
  },
];

const creatorValues = [
  {
    icon: PanelsTopLeft,
    title: "Your method gets a surface",
    copy: "A coaching routine, client workflow or learning path can appear as the right interface.",
  },
  {
    icon: HeartHandshake,
    title: "Trust stays human",
    copy: "Consent, scope and trace make expert systems feel responsible instead of extractive.",
  },
  {
    icon: ChartSpline,
    title: "Better proof than hype",
    copy: "The value is visible in outcomes, repeated use and clear decisions.",
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

      <ProgramHero
        eyebrow="Creator Program"
        title="Publish the method behind the content."
        copy="The future creator does not only publish posts. They publish routines, workflows, lenses and expert tracks that help people get better outcomes."
        primary={{ href: "/community", label: "Join early creators" }}
        secondary={{ href: "/manifestation-layer", label: "See Manifestation Packs" }}
        benefits={creatorBenefits}
        visual={{
          kicker: "Creator value",
          title: "Turn repeatable expertise into an audience system.",
          copy: "The creator provides the method. Lazing shapes the surface.",
          items: [
            { label: "Start", value: "Method + lens" },
            { label: "Create", value: "Pack + routine" },
            { label: "Outcome", value: "Progress + trust" },
          ],
        }}
      />

      <section className="section value-section">
        <p className="eyebrow">Why Creators Care</p>
        <h2>Your best work should not disappear inside the feed.</h2>
        <div className="value-grid">
          {creatorValues.map((item) => {
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
