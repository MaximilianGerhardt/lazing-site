import Link from "next/link";
import { MailCheck, ShieldCheck, Sparkles } from "lucide-react";
import { pageMetadata } from "@/lib/site";
import { programRoleLabels, type ProgramRole } from "@/lib/program/foundingCircle";

export const metadata = {
  ...pageMetadata({
    title: "Confirm Your Founding Circle Application",
    description:
      "One clear step remains: confirm your Lazing Founding Circle application by email.",
    path: "/program/check-email",
  }),
  robots: { index: false, follow: false },
};

type ProgramCheckEmailPageProps = {
  searchParams?: Promise<{ role?: string }>;
};

function getRole(value?: string): ProgramRole {
  return value === "developer" || value === "builder" || value === "creator" ? value : "builder";
}

export default async function ProgramCheckEmailPage({ searchParams }: ProgramCheckEmailPageProps) {
  const params = await searchParams;
  const role = getRole(params?.role);

  return (
    <main>
      <section className="confirmation-hero">
        <div className="brand-mark" aria-label="Lazing">
          <span>L A Z I N G</span>
          <i />
        </div>
        <div className="confirmation-card">
          <div className="confirmation-icon" aria-hidden="true">
            <MailCheck size={28} />
          </div>
          <p className="eyebrow">Double opt-in</p>
          <h1>One step left.</h1>
          <p>
            We sent the confirmation email for your {programRoleLabels[role]} application.
            The first cohort is curated, so the application only enters review after one
            clear yes.
          </p>
          <div className="confirmation-proof">
            <span>
              <ShieldCheck size={16} />
              Curated first cohort
            </span>
            <span>
              <Sparkles size={16} />
              Status + early access
            </span>
          </div>
          <div className="confirmation-actions">
            <Link className="button button-dark" href="/community">
              Back to community
            </Link>
            <Link className="button button-light" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
