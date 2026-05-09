import type { Metadata } from "next";
import {
  BookOpenText,
  FileCheck2,
  GitPullRequestArrow,
  MessageCircleHeart,
  PackageCheck,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProgramHero } from "@/components/ProgramHero";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Community - Lazing",
  description:
    "Join early builders, pack authors, content creators and open source contributors shaping Lazing.",
  path: "/community",
});

const paths = [
  {
    icon: UsersRound,
    title: "Early builders",
    copy: "Run the runtime, report friction and help shape the first useful fields.",
  },
  {
    icon: MessageCircleHeart,
    title: "Creator program",
    copy: "Turn repeatable expertise into packs, routines, lenses and expert tracks.",
  },
  {
    icon: PackageCheck,
    title: "Pack authors",
    copy: "Write domain systems with inputs, risks, confirmations and trace.",
  },
  {
    icon: Radio,
    title: "Showcase submissions",
    copy: "Share real systems built with Lazing once the public gallery opens.",
  },
  {
    icon: GitPullRequestArrow,
    title: "GitHub contributors",
    copy: "Help with adapters, docs, examples, privacy posture and runtime polish.",
  },
  {
    icon: BookOpenText,
    title: "Build in public",
    copy: "Follow product decisions, changelog notes and program calls as they happen.",
  },
];

const communityBenefits = [
  {
    icon: UsersRound,
    title: "Early access",
    copy: "Shape the first fields before the public story hardens.",
  },
  {
    icon: PackageCheck,
    title: "Pack direction",
    copy: "Help define what useful expert systems should feel like.",
  },
  {
    icon: Radio,
    title: "Quiet updates",
    copy: "Follow build decisions without joining another noisy channel.",
  },
];

const roles = [
  {
    name: "Runner",
    gives: "Friction reports from real local/VPS use.",
    gets: "First install paths, field examples and early runtime calls.",
  },
  {
    name: "Pack author",
    gives: "Domain logic, data requirements, risk boundaries and useful surfaces.",
    gets: "A review path for turning expertise into Lazing packs.",
  },
  {
    name: "Reviewer",
    gives: "Quality checks, privacy questions and claims discipline.",
    gets: "A voice in the standard before public gallery mechanics appear.",
  },
  {
    name: "Maintainer",
    gives: "Docs, adapters, examples and contribution structure.",
    gets: "A focused OSS layer instead of a noisy platform backlog.",
  },
];

const submissionFlow = [
  ["01", "Name the outcome", "One useful system, not a vague category."],
  ["02", "Show the method", "Inputs, steps, decisions, risks and expected surface."],
  ["03", "Run a small pilot", "A few real users, honest friction, no marketplace pressure."],
  ["04", "Earn the showcase", "Only packs with a clear boundary and trace should be visible."],
];

const buildNotes = [
  ["Runtime first", "Local/VPS authority, scoped memory and adapter boundaries."],
  ["Packs second", "Creator methods become reusable only after quality review."],
  ["Gallery later", "Public discovery should wait until trust mechanics exist."],
];

export default function CommunityPage() {
  return (
    <main className="subpage">
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Lazing", item: site.url },
            { "@type": "ListItem", position: 2, name: "Community", item: `${site.url}/community` },
          ],
        }}
      />
      <ProgramHero
        eyebrow="Community"
        title="Early builders shape the first living systems."
        copy="The community direction is for people who want to run Lazing, write packs, build in public, teach methods and test the Manifestation Layer in real work."
        primary={{ href: "/creators", label: "Creator program" }}
        secondary={{ href: "/developers", label: "Developer program" }}
        benefits={communityBenefits}
        visual={{
          kicker: "Community value",
          title: "Start small. Make the first systems useful.",
          copy: "The best community is a loop of real work, honest feedback and better packs.",
          items: [
            { label: "Builders", value: "Runtime feedback" },
            { label: "Creators", value: "Methods + packs" },
            { label: "Maintainers", value: "Standards + trust" },
          ],
        }}
      />

      <section className="section value-section community-value-section">
        <p className="eyebrow">Ways To Join</p>
        <h2>Pick the role that matches what you want to make better.</h2>
        <div className="value-grid community-grid">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <article className="value-card" key={path.title}>
                <i aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </i>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section community-role-section">
        <div className="section-copy">
          <p className="eyebrow">Community Roles</p>
          <h2>The community starts as a quality loop, not a chat room.</h2>
          <p>
            Lazing needs people who run systems, write methods, review claims and make the
            open source layer easier to trust.
          </p>
        </div>
        <div className="role-grid">
          {roles.map((role) => (
            <article className="role-card" key={role.name}>
              <span>{role.name}</span>
              <dl>
                <div>
                  <dt>Gives</dt>
                  <dd>{role.gives}</dd>
                </div>
                <div>
                  <dt>Gets</dt>
                  <dd>{role.gets}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section submission-section">
        <article className="submission-feature">
          <Send size={28} strokeWidth={1.6} />
          <p className="eyebrow">Showcase Submissions</p>
          <h2>Submit work when it has a boundary.</h2>
          <p>
            The first showcase should not reward noise. It should reward a clean method,
            scoped data, honest constraints and outcomes that can be inspected.
          </p>
        </article>
        <div className="submission-steps">
          {submissionFlow.map(([step, title, copy]) => (
            <article key={step}>
              <span>{step}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section build-public-section">
        <div>
          <Sparkles size={30} strokeWidth={1.6} />
          <p className="eyebrow">Build In Public</p>
          <h2>Follow decisions, not noise.</h2>
          <p>
            The public update stream should explain what changed, why it changed and what
            still needs proof.
          </p>
          <a className="button button-dark" href="/changelog">Read the build notes</a>
        </div>
        <div className="build-note-list">
          {buildNotes.map(([title, copy]) => (
            <article key={title}>
              <FileCheck2 size={18} strokeWidth={1.8} />
              <div>
                <strong>{title}</strong>
                <span>{copy}</span>
              </div>
            </article>
          ))}
          <article>
            <ShieldCheck size={18} strokeWidth={1.8} />
            <div>
              <strong>Trust always</strong>
              <span>Privacy posture, DOI, consent and claims stay part of the story.</span>
            </div>
          </article>
        </div>
      </section>

      <NewsletterSignup
        source="community-page"
        defaultTrack="builder"
        title="Join without joining another noisy community."
        copy="The Lazing letter is the quiet entry point for early builders, creators and pack authors until public channels open."
      />
    </main>
  );
}
