import Link from "next/link";
import { Award, CircleAlert, Home, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/site";
import { programRoleLabels, type ProgramRole } from "@/lib/program/foundingCircle";

export const metadata = {
  ...pageMetadata({
    title: "Founding Circle Application Confirmed",
    description:
      "Your Lazing Founding Circle application is confirmed and ready for manual cohort review.",
    path: "/program/confirmed",
  }),
  robots: { index: false, follow: false },
};

type ProgramConfirmedPageProps = {
  searchParams?: Promise<{ status?: string; role?: string }>;
};

function getRole(value?: string): ProgramRole {
  return value === "developer" || value === "builder" || value === "creator" ? value : "builder";
}

const states = {
  confirmed: {
    icon: Award,
    eyebrow: "Application received",
    title: "You are in the review queue.",
    copy:
      "The first Founding Circle cohort is curated. We review for a clear use case, useful contribution and responsible scope before opening private calls or early access.",
  },
  failed: {
    icon: CircleAlert,
    eyebrow: "Could not finish",
    title: "The application did not settle.",
    copy:
      "The link was valid, but the backend could not complete the review handoff. Please try the application once more.",
  },
  invalid: {
    icon: CircleAlert,
    eyebrow: "Link expired",
    title: "This confirmation link is no longer active.",
    copy:
      "For privacy, confirmation links are temporary. Apply again and Lazing will send a fresh one.",
  },
};

export default async function ProgramConfirmedPage({ searchParams }: ProgramConfirmedPageProps) {
  const params = await searchParams;
  const key = params?.status === "failed" || params?.status === "invalid" ? params.status : "confirmed";
  const state = states[key];
  const role = getRole(params?.role);
  const Icon = state.icon;

  return (
    <main>
      <section className="confirmation-hero">
        <div className="brand-mark" aria-label="Lazing">
          <span>L A Z I N G</span>
          <i />
        </div>
        <div className="confirmation-card">
          <div className="confirmation-icon" aria-hidden="true">
            <Icon size={28} />
          </div>
          <p className="eyebrow">{state.eyebrow}</p>
          <h1>{state.title}</h1>
          <p>{state.copy}</p>
          <div className="confirmation-proof">
            <span>
              <Award size={16} />
              {programRoleLabels[role]}
            </span>
            <span>
              <ShieldCheck size={16} />
              Manual review
            </span>
          </div>
          <div className="confirmation-actions">
            <Link className="button button-dark" href="/changelog">
              Read build notes
            </Link>
            <Link className="button button-light" href="/">
              <Home size={16} />
              Open laz.ing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
