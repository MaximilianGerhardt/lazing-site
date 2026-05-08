import type { Metadata } from "next";
import { BookOpenText, GitPullRequestArrow, MessageCircleHeart, PackageCheck, Radio, UsersRound } from "lucide-react";
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

      <NewsletterSignup
        source="community-page"
        defaultTrack="builder"
        title="Join without joining another noisy community."
        copy="The Lazing letter is the quiet entry point for early builders, creators and pack authors until public channels open."
      />
    </main>
  );
}
