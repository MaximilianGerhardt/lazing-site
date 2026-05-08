import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
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
    title: "Early builders",
    copy: "Run the runtime, report friction and help shape the first useful fields.",
  },
  {
    title: "Creator program",
    copy: "Turn repeatable expertise into packs, routines, lenses and expert tracks.",
  },
  {
    title: "Pack authors",
    copy: "Write domain systems with inputs, risks, confirmations and trace.",
  },
  {
    title: "Showcase submissions",
    copy: "Share real systems built with Lazing once the public gallery opens.",
  },
  {
    title: "GitHub contributors",
    copy: "Help with adapters, docs, examples, privacy posture and runtime polish.",
  },
  {
    title: "Build in public",
    copy: "Follow product decisions, changelog notes and program calls as they happen.",
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
      <section className="subpage-hero">
        <p className="eyebrow">Community</p>
        <h1>Early builders shape the first living systems.</h1>
        <p>
          The community direction is for people who want to run Lazing, write packs,
          build in public, teach methods and test the Manifestation Layer in real work.
        </p>
        <div className="program-actions">
          <Link className="button button-dark" href="/creators">
            Creator program
          </Link>
          <Link className="button button-light" href="/developers">
            Developer program
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="concept-grid">
          {paths.map((path) => (
            <article className="mini-card" key={path.title}>
              <h2>{path.title}</h2>
              <p>{path.copy}</p>
            </article>
          ))}
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
