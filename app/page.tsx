import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { LandingHero } from "@/components/LandingHero";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { faqItems, pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Lazing - The System Adapts To You",
  description:
    "A premium public home for Lazing, the local-first AI command center that turns intention into scoped, living systems.",
});

const flow = [
  {
    label: "Intent",
    title: "You describe what you want to achieve.",
    copy: "A sentence is enough. Lazing does not ask you to choose the right app first.",
  },
  {
    label: "Context",
    title: "The system reads the field around it.",
    copy: "Personal, organization, client, documents, credentials and boundaries shape what should happen next.",
  },
  {
    label: "Skill",
    title: "Reusable expertise enters the moment.",
    copy: "A skill brings the domain logic that an expert would normally carry in their head.",
  },
  {
    label: "SOP",
    title: "Quality becomes a repeatable process.",
    copy: "The system follows the method, checks the missing inputs and keeps work from becoming vague.",
  },
  {
    label: "Swarm",
    title: "Agents can plan, build, compare and check.",
    copy: "Codex, Claude Code, Ollama or local agents can work in parallel without owning the whole context.",
  },
  {
    label: "Manifestation",
    title: "The answer becomes an interface.",
    copy: "A plan, tracker, decision card, workflow, document or workspace appears when the work needs it.",
  },
  {
    label: "Resolution",
    title: "You make the missing decision.",
    copy: "Approve, adjust, delegate or pause before sensitive work continues.",
  },
  {
    label: "Trace",
    title: "The system remembers what happened and why.",
    copy: "Every result can leave a scoped record of context, decision and execution.",
  },
];
const lenses = ["personal field", "organization field", "isolated RAG", "scoped credentials", "quick choices"];
const developerItems = ["Codex", "Claude Code", "Ollama", "local agents", "SQLite trace", "scoped memory", "heartbeats", "benchmark battles"];
const manifestationCards = [
  {
    title: "Plan",
    copy: "An idea opens into workstreams, assets, timeline, KPIs and the decisions still missing.",
    className: "bento-card bento-wide",
  },
  {
    title: "Decision Card",
    copy: "Approve, adjust, delegate or pause without reading another wall of text.",
    className: "bento-card",
  },
  {
    title: "Tracker",
    copy: "A meal, deadline or routine becomes a living state instead of a forgotten note.",
    className: "bento-card bento-tall",
  },
  {
    title: "Review Panel",
    copy: "Legal, code or strategy work can surface risks, alternatives and consensus.",
    className: "bento-card",
  },
  {
    title: "Workspace",
    copy: "A project gathers context, credentials, documents, trace and next actions.",
    className: "bento-card bento-soft",
  },
];

const fieldCards = [
  {
    title: "Personal Field",
    copy: "Private notes, fitness, family, learning, documents and routines stay personal.",
    className: "bento-card bento-wide",
  },
  {
    title: "Organization Field",
    copy: "Teams, customers, invoices, legal documents and shared workspaces stay scoped.",
    className: "bento-card",
  },
  {
    title: "Scoped Credentials",
    copy: "Access belongs to the field that owns it. Sensitive use asks first.",
    className: "bento-card bento-soft",
  },
  {
    title: "SQLite Trace",
    copy: "The runtime keeps decisions, changes and agent work understandable.",
    className: "bento-card",
  },
];

const pocketCards = [
  "Approve",
  "Adjust",
  "Delegate",
  "Pause",
  "Continue",
  "Compare",
];

const creatorExamples = [
  "A coach turns routines into a nutrition system",
  "An agency turns onboarding into a client workspace",
  "A developer turns review logic into a coding pack",
  "An educator turns a method into a learning journey",
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lazing",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Local machine or VPS",
  description: site.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  author: { "@type": "Person", name: site.creator },
  codeRepository: site.repo,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Lazing",
      item: site.url,
    },
  ],
};

export default function Home() {
  return (
    <main>
      <SchemaJsonLd data={[softwareSchema, faqSchema, breadcrumbSchema]} />
      <LandingHero />

      <section className="section intent-section">
        <ScrollReveal>
          <p className="eyebrow">From Intent To Impact</p>
          <h2>You should not have to learn the system. The system should learn what you mean.</h2>
          <p className="section-lede">
            Lazing begins where classical software usually makes you work: before the menu,
            before the dashboard, before the right structure is obvious. You describe the goal.
            Lazing forms the working system around it.
          </p>
        </ScrollReveal>
        <div className="flow-story" data-flow-story aria-label="Manifestation flow">
          <div className="flow-story-sticky">
            <div className="flow-rail" aria-hidden="true">
              <i className="flow-rail-progress" />
              {flow.map((item, index) => (
                <span data-flow-step key={item.label} style={{ "--step-index": index } as CSSProperties}>
                  {item.label}
                </span>
              ))}
            </div>
            <div className="flow-card-stage">
              {flow.map((item, index) => (
                <article
                  className="flow-story-card"
                  data-flow-card
                  key={item.label}
                  style={{ "--flow-card-offset": index } as CSSProperties}
                >
                  <span>{String(index + 1).padStart(2, "0")} / 08 · {item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <ScrollReveal className="section-copy">
          <p className="eyebrow">Manifestation Layer</p>
          <h2>The interface appears when needed.</h2>
          <p>
            A chat answer should not always remain text. Sometimes it should become a plan,
            a decision, a tracker, a review panel, a workspace or a routine that keeps working.
          </p>
        </ScrollReveal>
        <div className="bento-grid manifestation-bento">
          {manifestationCards.map((item) => (
            <article className={item.className} key={item.title}>
              <span>{item.title}</span>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section runtime-section">
        <ScrollReveal>
          <p className="eyebrow">Fields And Boundaries</p>
          <h2>Every field has its own memory. Every memory has a boundary.</h2>
          <p className="section-lede">
            Personal work, organizations, clients and projects stay separated. Credentials,
            documents, RAG spaces and agent capabilities belong to the field that owns them.
          </p>
        </ScrollReveal>
        <div className="bento-grid field-bento" aria-label="Scoped field architecture">
          {fieldCards.map((item) => (
            <article className={item.className} key={item.title}>
              <span>{item.title}</span>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section command-section">
        <div className="command-copy">
          <p className="eyebrow">Pocket Command Center</p>
          <h2>Decisions should not wait until you are back at a desk.</h2>
          <p>
            Send an idea, approve a plan, answer a quick choice, continue an agent,
            switch a workspace or retrieve a result from your pocket.
          </p>
        </div>
        <div className="pocket-bento">
          <article className="bento-card pocket-command">
            <span>Describe your intention</span>
            <p>Fix the chat bug and compare Claude Code against Codex.</p>
          </article>
          <article className="bento-card heartbeat-card">
            <span>Heartbeat</span>
            <strong>The system is alive.</strong>
            <p>Agent running. Tests pending. One decision needed.</p>
          </article>
          <div className="quick-choice-grid" aria-label="Quick choices">
            {pocketCards.map((choice) => (
              <button type="button" key={choice}>{choice}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section packs-section">
        <ScrollReveal>
          <p className="eyebrow">Skills + SOPs</p>
          <h2>Expertise becomes executable.</h2>
          <p className="section-lede">
            Skills hold reusable expertise. SOPs hold repeatable quality. Manifestations turn
            both into interactive work: not just something to read, but something to run.
          </p>
        </ScrollReveal>
        <div className="lens-strip">
          {lenses.map((lens) => (
            <span key={lens}>{lens}</span>
          ))}
        </div>
        <div className="pack-row">
          <span>core-work</span>
          <span>personal-fitness</span>
          <span>bridge</span>
        </div>
      </section>

      <section className="section install-section" id="start-locally">
        <div className="section-copy">
          <p className="eyebrow">Start Locally</p>
          <h2>Run the runtime where the authority belongs.</h2>
          <p>
            Lazing is designed for your local machine or VPS. Connect engines when
            you are ready, keep credentials scoped and let trace stay close to the host.
          </p>
        </div>
        <div className="install-panel">
          <span>Terminal</span>
          <pre>{`git clone https://github.com/MaximilianGerhardt/lazing.git
cd lazing
./install`}</pre>
          <a className="button button-dark" href={site.repo}>View GitHub</a>
        </div>
      </section>

      <section className="section split-section developer-section">
        <div className="section-copy">
          <p className="eyebrow">For Developers</p>
          <h2>Many minds. One decision.</h2>
          <p>
            Codex, Claude Code, Ollama and local agents can plan, build, compare,
            test and reach consensus without dissolving the boundary between fields.
          </p>
          <div className="cta-row">
            <a className="button button-dark" href={site.repo}>View GitHub</a>
            <a className="button button-light" href="/developers">Read architecture</a>
          </div>
        </div>
        <div className="capability-list">
          {developerItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section creator-section">
        <div className="creator-copy">
          <p className="eyebrow">For Creators</p>
          <h2>Creators should publish methods, not only content.</h2>
          <p>
            A creator can turn repeatable expertise into skills, SOPs, routines and
            working interfaces that help people get better outcomes.
          </p>
          <div className="cta-row">
            <a className="button button-dark" href="/creators">Build your first pack</a>
            <a className="button button-light" href="/community">Join the creator list</a>
          </div>
        </div>
        <div className="creator-examples">
          {creatorExamples.map((example) => (
            <article className="creator-card" key={example}>{example}</article>
          ))}
        </div>
      </section>

      <section className="section trust-section">
        <ScrollReveal>
          <p className="eyebrow">Trust, Privacy, Europe</p>
          <h2>Scope is not a setting. It is product quality.</h2>
          <p className="section-lede">
            Local-first operation, no unscoped memory, isolated fields, scoped credentials,
            consent before sensitive use and traceable events. Designed with European
            privacy expectations in mind.
          </p>
        </ScrollReveal>
      </section>

      <section className="section faq-section" aria-labelledby="faq-heading">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-heading">Plain answers for early builders.</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <NewsletterSignup
        source="landing-page"
        defaultTrack="launch"
        title="Treat the newsletter like a small act of support."
        copy="No donation button, no noisy funnel. The best support right now is attention from people who want Lazing to become real."
      />

      <section className="final-cta">
        <p className="eyebrow">One Interface. Infinite Possibilities.</p>
        <h2>The surface disappears. The intention remains.</h2>
        <div className="hero-actions">
          <a className="button button-dark" href="#start-locally">Start locally</a>
          <a className="button button-light" href={site.repo}>Star on GitHub</a>
          <a className="button button-quiet" href="/community">Join early builders</a>
        </div>
      </section>
    </main>
  );
}
