import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Imprint - Lazing",
  description: "Impressum and provider information for Lazing.",
  path: "/imprint",
});

export default function ImprintPage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">Impressum</p>
        <h1>Klare Angaben. Keine versteckte Buehne.</h1>
        <p>
          Anbieterkennzeichnung fuer laz.ing und die oeffentliche Lazing Website.
          Die Angaben werden bewusst schlicht gehalten: erreichbar, pruefbar, ruhig.
        </p>
      </section>
      <section className="section prose-section">
        <h2>Angaben gemaess § 5 DDG</h2>
        <address>
          Maximilian Gerhardt
          <br />
          c/o Impressumservice Dein-Impressum
          <br />
          Stettiner Straße 41
          <br />
          35410 Hungen
          <br />
          Deutschland
        </address>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@p-a.llc">info@p-a.llc</a>
        </p>

        <h2>Verantwortlich fuer den Inhalt</h2>
        <p>
          Maximilian Gerhardt, Anschrift wie oben.
        </p>

        <h2>Projektstatus</h2>
        <p>
          Lazing ist ein lokales bzw. selbst gehostetes Open-Source-orientiertes
          Softwareprojekt in Entwicklung. Die oeffentliche Website beschreibt Richtung,
          Architektur und Community-Programm. Sie ersetzt keine individuelle Beratung,
          keine professionelle Pruefung und keine produktive Sicherheitsfreigabe.
        </p>

        <h2>Haftung fuer Inhalte</h2>
        <p>
          Die Inhalte dieser Website werden mit Sorgfalt erstellt. Eine Gewaehr fuer
          Richtigkeit, Vollstaendigkeit, Aktualitaet, Eignung fuer einen bestimmten Zweck
          oder durchgehende Verfuegbarkeit wird nicht uebernommen. Verpflichtungen zur
          Entfernung oder Sperrung rechtswidriger Inhalte bleiben nach den allgemeinen
          gesetzlichen Vorschriften unberuehrt.
        </p>

        <h2>Haftung fuer Links</h2>
        <p>
          Diese Website kann auf externe Websites, Repositories, Dienste oder
          Dokumentationen verweisen. Auf deren Inhalte besteht kein Einfluss. Fuer externe
          Inhalte ist der jeweilige Anbieter verantwortlich. Bei Bekanntwerden konkreter
          Rechtsverletzungen werden entsprechende Links geprueft und, soweit erforderlich,
          entfernt.
        </p>

        <h2>AI-, Runtime- und Agenten-Hinweis</h2>
        <p>
          Lazing kann mit KI-Modellen, lokalen Agenten, OpenAI-kompatiblen Adaptern,
          Codex, Claude Code, Ollama oder anderen Werkzeugen verbunden werden. KI-Systeme
          koennen falsche, unvollstaendige, veraltete, voreingenommene oder riskante
          Ergebnisse erzeugen. Nutzerinnen und Nutzer muessen Ausgaben, Befehle,
          Automationen, generierte Dateien, Workflows, Entscheidungen und
          Manifestationen vor Nutzung, Veroeffentlichung oder Ausfuehrung eigenstaendig
          pruefen.
        </p>
        <p>
          Lazing ist nicht fuer Entscheidungen bestimmt, bei denen Fehler zu erheblichen
          Personen-, Gesundheits-, Vermoegens-, Rechts-, Sicherheits-, Infrastruktur-
          oder sonstigen Hochrisikoschaeden fuehren koennen. Mehr dazu steht in den{" "}
          <Link href="/terms">Nutzungs- und Risikohinweisen</Link>.
        </p>

        <h2>Urheberrecht und Marken</h2>
        <p>
          Texte, Grafiken, Markenbestandteile, Interface-Entwuerfe und sonstige Inhalte
          dieser Website unterliegen dem jeweils anwendbaren Recht. Die Nutzung von Name,
          Logo oder visueller Identitaet darf nicht den Eindruck erwecken, es handele
          sich um ein offizielles Angebot, eine Freigabe oder eine Partnerschaft, sofern
          dies nicht ausdruecklich bestaetigt wurde.
        </p>

        <h2>Keine Streitbeilegungspflicht</h2>
        <p>
          Soweit gesetzlich zulaessig, besteht keine Verpflichtung und keine Bereitschaft
          zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.
        </p>
      </section>
    </main>
  );
}
