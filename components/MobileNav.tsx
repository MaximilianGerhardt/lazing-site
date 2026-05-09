import Link from "next/link";
import { site } from "@/lib/site";

export function MobileNav() {
  return (
    <details className="mobile-nav">
      <summary aria-label="Open navigation">
        <span />
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        <Link href="/manifestation-layer">Docs</Link>
        <Link href="/developers">Developers</Link>
        <Link href="/creators">Creators</Link>
        <Link href="/community">Community</Link>
        <Link href="/changelog">Build notes</Link>
        <a href={site.repo}>GitHub</a>
        <Link className="mobile-nav-cta" href="/#start-locally">Get Lazing</Link>
      </nav>
    </details>
  );
}
