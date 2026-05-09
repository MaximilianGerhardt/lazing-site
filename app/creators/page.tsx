import type { Metadata } from "next";
import {
  BadgeCheck,
  ChartSpline,
  CheckCircle2,
  ClipboardList,
  Compass,
  HeartHandshake,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  SquareStack,
  UsersRound,
} from "lucide-react";
import { ProgramApplicationForm } from "@/components/ProgramApplicationForm";
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

const creatorApplicationBenefits = [
  {
    title: "Turn a method into a pack",
    copy: "Bring one repeatable outcome and shape it into a scoped Lazing system.",
  },
  {
    title: "Get review before public launch",
    copy: "Early pack reviews focus on claims, risks, audience fit and responsible surfaces.",
  },
  {
    title: "Earn founding credit",
    copy: "Strong early creators can receive Founding Creator status and future showcase priority.",
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

const blueprint = [
  ["Method", "The repeatable expert routine: what happens first, what changes the path, what good looks like."],
  ["Lens", "The contextual view: beginner, advanced, rehab-safe, agency client, product launch, exam prep."],
  ["Inputs", "The minimum data needed before the system can act responsibly."],
  ["Risks", "Claims, sensitive data, medical/legal/financial boundaries and places where confirmation is required."],
  ["Surfaces", "The cards, trackers, reviews, decision prompts and timelines the audience will actually use."],
  ["Trace", "What changed, why it changed, who approved it and what should be remembered next time."],
];

const packExamples = [
  {
    title: "Nutrition Reset",
    audience: "Fitness creator",
    outcome: "A private meal log, weekly review and decision prompts around habits, not shame.",
    details: ["Personal Field", "Risk-aware check-ins", "Progress trace"],
  },
  {
    title: "Client Launch OS",
    audience: "Agency creator",
    outcome: "Brief, assets, positioning choices and launch tasks become one scoped client workspace.",
    details: ["Bridge-ready", "Resolution cards", "Client-safe trace"],
  },
  {
    title: "Learning Sprint",
    audience: "Educator",
    outcome: "The learner gets goals, weak spots, drills and a weekly reflection system.",
    details: ["Observation lens", "Adaptive routine", "Review loop"],
  },
];

const onboarding = [
  ["01", "Submit the method", "A short description of the repeatable outcome and who it helps."],
  ["02", "Shape the lens", "Define what context changes the right answer and which data is needed."],
  ["03", "Review the risks", "Mark claims, boundaries, sensitive fields and required confirmations."],
  ["04", "Pilot the pack", "Run with early builders before any marketplace story begins."],
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
        primary={{ href: "#founding-circle", label: "Apply as Founding Creator" }}
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

      <section className="section creator-blueprint-section">
        <div className="section-copy">
          <p className="eyebrow">Pack Blueprint</p>
          <h2>A creator pack is not a template. It is a scoped method.</h2>
          <p>
            Every pack should make expertise usable without pretending to replace the expert.
            The structure stays simple enough to trust and specific enough to work.
          </p>
        </div>
        <div className="blueprint-grid" aria-label="Creator pack blueprint">
          {blueprint.map(([title, copy]) => (
            <article className="blueprint-card" key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pack-showcase-section">
        <p className="eyebrow">First Pack Directions</p>
        <h2>The first creator packs should feel useful before they feel commercial.</h2>
        <div className="pack-showcase-grid">
          {packExamples.map((pack) => (
            <article className="pack-case-card" key={pack.title}>
              <span>{pack.audience}</span>
              <h3>{pack.title}</h3>
              <p>{pack.outcome}</p>
              <div>
                {pack.details.map((detail) => (
                  <em key={detail}>{detail}</em>
                ))}
              </div>
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
        {onboarding.map(([step, title, copy]) => (
          <div className="path-card" key={step}>
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </section>

      <section className="section creator-quality-section">
        <article>
          <ShieldCheck size={30} strokeWidth={1.6} />
          <p className="eyebrow">Quality Bar</p>
          <h2>No pack should make an expert claim it cannot trace.</h2>
          <p>
            Creator systems need taste and restraint: clear outcomes, explicit boundaries,
            privacy-aware fields and a visible way to reject or adjust a recommendation.
          </p>
        </article>
        <div className="quality-list" aria-label="Creator pack quality checks">
          {[
            [Compass, "Narrow promise", "One outcome people can understand before they run it."],
            [ClipboardList, "Required context", "The pack asks only for data it needs now."],
            [CheckCircle2, "Human decision", "Sensitive steps stop for approval instead of pretending certainty."],
            [SquareStack, "Reusable surface", "The result becomes a system, tracker, decision or routine."],
          ].map(([Icon, title, copy]) => {
            const QualityIcon = Icon as typeof Compass;
            return (
              <article key={title as string}>
                <QualityIcon size={20} strokeWidth={1.7} />
                <div>
                  <strong>{title as string}</strong>
                  <span>{copy as string}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ProgramApplicationForm
        source="creators-page"
        defaultRole="creator"
        title="Apply before creator packs open."
        copy="The first Founding Creators will help define what responsible audience systems should feel like before any marketplace story begins."
        benefits={creatorApplicationBenefits}
      />
    </main>
  );
}
