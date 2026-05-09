import type { Metadata } from "next";
import { CircleDot, GitPullRequestArrow, MailCheck, PackageCheck, ShieldCheck } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProgramHero } from "@/components/ProgramHero";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Build Notes - Lazing",
  description:
    "Follow Lazing build notes, changelog direction and product decisions as the local-first runtime and creator layer evolve.",
  path: "/changelog",
});

const buildBenefits = [
  {
    icon: CircleDot,
    title: "Decision notes",
    copy: "Why a system changed, not just what shipped.",
  },
  {
    icon: GitPullRequestArrow,
    title: "OSS direction",
    copy: "Runtime, adapters, docs and contribution surfaces.",
  },
  {
    icon: ShieldCheck,
    title: "Trust posture",
    copy: "Privacy, consent, trace and claims stay visible.",
  },
];

const notes = [
  {
    date: "Now",
    title: "Public site and DOI newsletter",
    copy: "The website now has the Lazing brand layer, program pages, DSGVO-friendly consent and Double Opt-In newsletter flow.",
    tags: ["Website", "Privacy", "Newsletter"],
  },
  {
    date: "Next",
    title: "Creator pack review path",
    copy: "Define the first creator pack blueprint: method, lens, inputs, risks, surfaces and trace.",
    tags: ["Creators", "Packs", "Quality"],
  },
  {
    date: "Next",
    title: "Community submission loop",
    copy: "Prepare early builder feedback, showcase submissions and contributor roles before opening public channels.",
    tags: ["Community", "Showcase", "OSS"],
  },
  {
    date: "Later",
    title: "Pack gallery after trust mechanics",
    copy: "Discovery should come after quality gates, verified claims and local-first boundaries are clear.",
    tags: ["Gallery", "Trust", "Manifestation Layer"],
  },
];

export default function ChangelogPage() {
  return (
    <main className="subpage program-page changelog-page">
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Lazing", item: site.url },
            { "@type": "ListItem", position: 2, name: "Build Notes", item: `${site.url}/changelog` },
          ],
        }}
      />

      <ProgramHero
        eyebrow="Build Notes"
        title="Follow decisions, not noise."
        copy="Lazing build notes are for product decisions, runtime direction, creator program signals and trust work that should be visible while the project takes shape."
        primary={{ href: "/community", label: "Join early builders" }}
        secondary={{ href: site.repo, label: "View GitHub" }}
        benefits={buildBenefits}
        visual={{
          kicker: "Public log",
          title: "What changed. Why it changed. What still needs proof.",
          copy: "The update stream stays small, useful and traceable.",
          items: [
            { label: "Cadence", value: "Meaningful only" },
            { label: "Signal", value: "Decisions + proof" },
            { label: "Scope", value: "Runtime + packs" },
          ],
        }}
      />

      <section className="section changelog-timeline-section">
        <p className="eyebrow">Current Direction</p>
        <h2>Small public notes for a system that should earn trust slowly.</h2>
        <div className="changelog-list">
          {notes.map((note) => (
            <article className="changelog-note" key={note.title}>
              <span>{note.date}</span>
              <div>
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
                <div>
                  {note.tags.map((tag) => (
                    <em key={tag}>{tag}</em>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NewsletterSignup
        source="changelog-page"
        defaultTrack="changelog"
        title="Get the build notes when they matter."
        copy="A quiet changelog for Lazing runtime direction, creator pack review and community openings."
      />
    </main>
  );
}
