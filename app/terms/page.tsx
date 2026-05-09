import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Nutzungs- und Risikohinweise - Lazing",
  description:
    "Nutzungs-, Risiko- und Haftungshinweise fuer Lazing, KI-Ausgaben, lokale Runtime, Agenten, Packs und externe Adapter.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero">
        <p className="eyebrow">Risk Notice</p>
        <h1>AI kann helfen. Sie kann sich auch irren.</h1>
        <p>
          Lazing soll Absichten in brauchbare Systeme verwandeln. Das macht Verantwortung
          nicht kleiner. Es macht sie sichtbarer: pruefen, bestaetigen, begrenzen.
        </p>
      </section>

      <section className="section prose-section">
        <h2>Geltungsbereich</h2>
        <p>
          Diese Hinweise gelten fuer die oeffentliche Lazing Website, die beschriebenen
          Konzepte, Newsletter, Community-Programme, Creator-Programme, Manifestation
          Packs, Dokumentation, Beispielcode und Verweise auf die lokale oder
          selbst-gehostete Lazing Runtime.
        </p>

        <h2>Kein produktiver Sicherheits-, Rechts-, Medizin- oder Finanzdienst</h2>
        <p>
          Lazing stellt keine Rechtsberatung, medizinische Beratung, Finanzberatung,
          Steuerberatung, Sicherheitsfreigabe, Compliance-Pruefung oder professionelle
          Einzelfallberatung dar. Inhalte, Antworten, Manifestationen, Plaene,
          Entscheidungskarten, Routinen und Workflows sind Ausgangspunkte. Sie muessen
          vor jeder realen Nutzung fachlich und sachlich geprueft werden.
        </p>

        <h2>KI-Fehler und Modellgrenzen</h2>
        <p>
          KI-Modelle koennen halluzinieren, Quellen falsch verstehen, veraltete
          Informationen verwenden, Risiken uebersehen, Befehle falsch ableiten,
          Anforderungen unvollstaendig erfassen oder Ergebnisse erzeugen, die plausibel
          klingen und trotzdem falsch sind. Lazing kann solche Systeme nur strukturieren,
          eingrenzen und nachvollziehbarer machen. Eine Garantie fuer Richtigkeit,
          Vollstaendigkeit, Sicherheit oder Eignung entsteht dadurch nicht.
        </p>

        <h2>Lokale Runtime und Selbsthosting</h2>
        <p>
          Wer Lazing lokal, auf einem VPS, in einem privaten Netzwerk oder in einer
          Organisation betreibt, ist fuer Installation, Konfiguration, Updates, Backups,
          Zugriffsschutz, Schluessel, Credentials, Adapter, Datenbanken,
          Netzwerkfreigaben und ausgefuehrte Befehle selbst verantwortlich. Vor
          produktiver Nutzung sollten Berechtigungen eng begrenzt, Daten gesichert und
          Ausgaben nachvollziehbar geprueft werden.
        </p>

        <h2>Agenten, Adapter und Ausfuehrung</h2>
        <p>
          Verbundene Werkzeuge wie Codex, Claude Code, Ollama, lokale Modelle,
          OpenAI-kompatible Adapter, Shell-Werkzeuge, Browser-Automation oder andere
          Engines koennen Dateien veraendern, Daten verarbeiten, externe Dienste
          ansprechen oder Aktionen vorbereiten. Nutzerinnen und Nutzer muessen vor der
          Ausfuehrung verstehen, was ein Agent tun darf, welche Daten betroffen sind und
          welche Folgen eintreten koennen.
        </p>

        <h2>Manifestation Packs und Creator-Inhalte</h2>
        <p>
          Packs, Lenses, SOPs, Vorlagen, Expert Tracks und Community-Beitraege koennen
          von Dritten stammen oder fachliche Annahmen enthalten. Sie sind keine Garantie
          fuer ein bestimmtes Ergebnis. Creator und Pack-Autorinnen muessen ihre Methoden
          verantwortungsvoll beschreiben; Nutzerinnen und Nutzer muessen sie auf ihren
          Kontext, ihre Risiken und ihre rechtlichen Anforderungen pruefen.
        </p>

        <h2>Keine Hochrisiko-Nutzung ohne eigene Freigabe</h2>
        <p>
          Lazing ist nicht dafuer bestimmt, ohne gesonderte menschliche Pruefung in
          Bereichen eingesetzt zu werden, in denen Fehler erhebliche Schaeden verursachen
          koennen. Dazu gehoeren insbesondere Gesundheit, Recht, Finanzen, Personal,
          kritische Infrastruktur, Sicherheit, Produktionsanlagen, Minderjaehrige,
          Notfallentscheidungen und sonstige sensible oder hochriskante Kontexte.
        </p>

        <h2>Haftungsbegrenzung</h2>
        <p>
          Die Nutzung erfolgt, soweit gesetzlich zulaessig, auf eigenes Risiko. Eine
          Haftung fuer mittelbare Schaeden, Folgeschaeden, entgangenen Gewinn,
          Datenverlust, Betriebsunterbrechung, fehlerhafte KI-Ausgaben, ungepruefte
          Automationen, falsch konfigurierte Adapter oder selbst ausgefuehrte Befehle
          wird im gesetzlich zulaessigen Umfang ausgeschlossen.
        </p>
        <p>
          Dieser Hinweis beschraenkt keine Haftung, die nach zwingendem Recht nicht
          ausgeschlossen oder begrenzt werden darf, insbesondere nicht bei Vorsatz, grober
          Fahrlaessigkeit, Verletzung von Leben, Koerper oder Gesundheit oder bei
          zwingenden gesetzlichen Anspruechen.
        </p>

        <h2>Open Source und keine Gewaehrleistung</h2>
        <p>
          Der Runtime-Code wird ueber das Projekt-Repository bereitgestellt:{" "}
          <a href={site.repo}>{site.repo}</a>. Soweit eine Open-Source-Lizenz gilt,
          bleiben deren Bedingungen massgeblich. Beispielcode, Dokumentation und
          Entwuerfe werden ohne Zusage bereitgestellt, dass sie fehlerfrei, sicher,
          dauerhaft verfuegbar oder fuer einen bestimmten Zweck geeignet sind.
        </p>

        <h2>Verantwortliche Nutzung</h2>
        <p>
          Gute Systeme fragen nach Grenzen. Nutze Lazing mit kleinen Scopes, klaren
          Freigaben, nachvollziehbaren Traces, Backups, menschlicher Pruefung und
          besonderer Vorsicht bei sensiblen Daten. Wenn eine Entscheidung wichtig ist,
          gehoert ein Mensch mit Verantwortung in den Loop.
        </p>

        <h2>Kontakt</h2>
        <p>
          Anbieterangaben und Kontakt stehen im <Link href="/imprint">Impressum</Link>.
        </p>
      </section>
    </main>
  );
}
