import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileNav } from "@/components/MobileNav";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { ScrollDirector } from "@/components/ScrollDirector";
import { site, pageMetadata } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({
    title: site.title,
    description: site.description,
  }),
  applicationName: site.name,
  authors: [{ name: site.creator }],
  creator: site.creator,
  publisher: site.creator,
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBFCFF",
  colorScheme: "light",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  creator: {
    "@type": "Person",
    name: site.creator,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.creator,
  url: site.url,
  sameAs: [site.repo],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SchemaJsonLd data={[websiteSchema, personSchema]} />
        <header className="site-header">
          <Link className="nav-brand" href="/" aria-label="Lazing home">
            <span>L A Z I N G</span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/manifestation-layer">Docs</Link>
            <Link href="/developers">Developers</Link>
            <Link href="/creators">Creators</Link>
            <Link href="/changelog">Build Notes</Link>
            <a href={site.repo}>GitHub</a>
            <Link className="nav-cta" href="/#start-locally">Get Lazing</Link>
          </nav>
          <MobileNav />
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <Link className="footer-brand" href="/">
              <Image src="/logo.svg" alt="" width={34} height={34} />
              <span>Lazing</span>
            </Link>
            <p>Lazing turns intention into living systems.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/privacy">Privacy</Link>
            <Link href="/imprint">Imprint</Link>
            <Link href="/license">License</Link>
            <Link href="/changelog">Build Notes</Link>
            <a href="/llms.txt">llms.txt</a>
          </nav>
        </footer>
        <CookieConsent />
        <ScrollDirector />
      </body>
    </html>
  );
}
