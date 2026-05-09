import type { Metadata } from "next";
import Link from "next/link";
import { Bot, LockKeyhole, Sparkles, ShieldCheck } from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lazing auf Deutsch - Dein lokales KI-Kommandozentrum",
  description:
    "Lazing ist ein lokales KI-Kommandozentrum: Du beschreibst, was passieren soll, und Lazing baut die passende Arbeitsfläche darum.",
  alternates: {
    canonical: `${site.url}/de`,
    languages: {
      en: site.url,
      de: `${site.url}/de`,
    },
  },
  openGraph: {
    title: "Lazing auf Deutsch - Dein lokales KI-Kommandozentrum",
    description:
      "Du sagst, was du willst. Lazing baut daraus ein kleines, nachvollziehbares Arbeitssystem.",
    url: `${site.url}/de`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Lazing passt sich dir an." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazing auf Deutsch",
    description: "Dein lokales KI-Kommandozentrum für Codex, Claude Code, Ollama und echte Workflows.",
    images: ["/og"],
  },
  keywords: [
    "lokales KI Kommandozentrum",
    "KI lokal nutzen",
    "Codex Claude Code Ollama",
    "Open Source KI Workspace",
    "KI Agenten lokal",
    "selbst gehostete KI",
    "DSGVO KI Tool",
    "KI Workflow automatisieren",
    "Manifestation Layer deutsch",
  ],
};

const benefits = [
  {
    icon: LockKeyhole,
    title: "Lokal zuerst",
    copy: "Dein Rechner oder VPS bleibt der Ort, an dem Autorität liegt.",
  },
  {
    icon: Bot,
    title: "Engines bleiben Engines",
    copy: "Codex, Claude Code und Ollama helfen, aber übernehmen nicht dein ganzes System.",
  },
  {
    icon: ShieldCheck,
    title: "Privat by default",
    copy: "Felder, Zugänge und Entscheidungen bleiben sauber getrennt.",
  },
];

const cards = [
  {
    title: "Nicht noch ein Chatbot",
    copy: "Chat ist nur der Start. Das Ergebnis kann ein Plan, Tracker, Workspace oder eine Entscheidungskarte sein.",
    className: "program-card program-card-large",
  },
  {
    title: "Nicht noch ein Dashboard",
    copy: "Du sollst nicht erst das richtige Menü finden. Die Oberfläche erscheint, wenn die Arbeit sie braucht.",
    className: "program-card",
  },
  {
    title: "Nicht noch ein Tool-Silo",
    copy: "Codex, Claude Code, Ollama und lokale Modelle werden zu Fähigkeiten in einem klaren Scope.",
    className: "program-card program-card-soft",
  },
  {
    title: "Nicht noch mehr Blindflug",
    copy: "Trace hält fest, was passiert ist, warum es passiert ist und welche Entscheidung gefehlt hat.",
    className: "program-card",
  },
];

const useCases = [
  ["Für Entwickler", "Lass Codex oder Claude Code arbeiten, ohne dass Kontext, Secrets und Entscheidungen wild durcheinanderlaufen."],
  ["Für Creator", "Mach aus deiner Methode ein System, das Menschen wirklich benutzen können."],
  ["Für Teams", "Halte Kunden, Projekte, Dokumente und Zugänge sauber getrennt."],
  ["Für dich selbst", "Fitness, Lernen, Planung oder private Dokumente bleiben in deinem persönlichen Feld."],
];

const faq = [
  ["Was ist Lazing?", "Ein lokales KI-Kommandozentrum. Du beschreibst ein Ziel, und Lazing formt daraus eine passende Arbeitsfläche."],
  ["Ist Lazing ein Chatbot?", "Nein. Chat kann der Einstieg sein. Lazing soll daraus Systeme machen: Pläne, Tracker, Workspaces, Entscheidungen und Trace."],
  ["Brauche ich Codex oder Claude Code?", "Nein. Sie sind mögliche Engines. Lazing ist die Schicht, die Scope, Oberfläche und Nachvollziehbarkeit darum legt."],
  ["Ist das DSGVO-konform?", "Die Richtung ist bewusst europäisch und datensparsam. Es gibt Double Opt-In, keine Analytics vor Consent und lokale/VPS-first Architektur. Rechtliche Details bleiben bewusst vorsichtig formuliert."],
];

export default function GermanPage() {
  return (
    <main className="subpage program-page">
      <SchemaJsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lazing auf Deutsch",
            url: `${site.url}/de`,
            inLanguage: "de-DE",
            description:
              "Eine deutsche Einführung in Lazing, das lokale KI-Kommandozentrum für intent-basierte Arbeitssysteme.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          },
        ]}
      />

      <ProgramHero
        eyebrow="Lazing auf Deutsch"
        title="Du sagst, was du willst. Lazing baut das System darum."
        copy="Lazing ist dein lokales KI-Kommandozentrum: kein weiteres Tool-Silo, sondern eine ruhige Oberfläche für Absicht, Kontext, Entscheidungen und Trace."
        primary={{ href: "/#start-locally", label: "Lokal starten" }}
        secondary={{ href: "/creators#founding-circle", label: "Founding Circle" }}
        benefits={benefits}
        visual={{
          kicker: "Kurz gesagt",
          title: "Die KI arbeitet. Du behältst den Scope.",
          copy: "Codex, Claude Code und Ollama sind Engines. Lazing ist Cockpit, Grenze und Flugschreiber.",
          items: [
            { label: "Start", value: "Deine Absicht" },
            { label: "System", value: "Passende Oberfläche" },
            { label: "Kontrolle", value: "Entscheidung + Trace" },
          ],
        }}
      />

      <section className="section program-stack-section">
        <div className="section-copy">
          <p className="eyebrow">Warum das wichtig ist</p>
          <h2>KI sollte nicht mehr Arbeit erklären. Sie sollte Arbeit formbar machen.</h2>
          <p>
            Viele KI-Tools enden wieder im Chat. Lazing denkt anders: aus einem Wunsch
            wird ein kleines, lebendes System mit Kontext, Oberfläche und klarer Grenze.
          </p>
        </div>
        <div className="program-grid">
          {cards.map((card) => (
            <article className={card.className} key={card.title}>
              <span>{card.title}</span>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section creator-showcase">
        <p className="eyebrow">Für wen?</p>
        <h2>Für Menschen, die KI schon nutzen, aber mehr Struktur brauchen.</h2>
        <div className="showcase-grid">
          {useCases.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section program-split">
        <div>
          <Sparkles size={30} strokeWidth={1.6} />
          <p className="eyebrow">Die einfache Analogie</p>
          <h2>Codex ist ein Motor. Claude Code ist ein Motor. Lazing ist das Cockpit.</h2>
          <p>
            Ein Motor allein entscheidet nicht, wohin du fährst, was geladen wird oder
            was dokumentiert bleibt. Genau dafür ist Lazing da.
          </p>
        </div>
        <div className="anatomy-list">
          {[
            ["Absicht", "Was soll wirklich passieren?"],
            ["Feld", "In welchem Kontext darf gearbeitet werden?"],
            ["Oberfläche", "Welche Karte, Liste, Entscheidung oder Routine braucht es jetzt?"],
            ["Trace", "Was soll später nachvollziehbar bleiben?"],
          ].map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="de-faq-heading">
        <p className="eyebrow">FAQ</p>
        <h2 id="de-faq-heading">Kurz, ehrlich, ohne Buzzword-Nebel.</h2>
        <div className="faq-list">
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Start small</p>
        <h2>Eine Absicht reicht. Das System kann danach wachsen.</h2>
        <div className="hero-actions">
          <Link className="button button-dark" href="/#start-locally">Lokal starten</Link>
          <Link className="button button-light" href="/developers">Für Entwickler</Link>
          <Link className="button button-quiet" href="/creators">Für Creator</Link>
        </div>
      </section>
    </main>
  );
}
