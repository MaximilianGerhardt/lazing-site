import Link from "next/link";
import { Check, CircleAlert, Home, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
  title: "Lazing Letter Confirmed",
  description:
    "Your Lazing newsletter signup is confirmed. You will receive useful launch notes, build decisions, and program updates.",
  path: "/newsletter/confirmed",
  }),
  robots: { index: false, follow: false },
};

type NewsletterConfirmedPageProps = {
  searchParams?: Promise<{ status?: string }>;
};

const states = {
  confirmed: {
    icon: Check,
    eyebrow: "Confirmed",
    title: "Confirmed. Welcome to the Lazing Letter.",
    copy:
      "You gave one clear yes. From here on, only meaningful updates: launch notes, build decisions, creator and developer signals worth sending.",
  },
  failed: {
    icon: CircleAlert,
    eyebrow: "Could not confirm",
    title: "The confirmation did not settle.",
    copy:
      "The link was valid, but the newsletter backend could not complete the step. Please try the signup once more.",
  },
  invalid: {
    icon: CircleAlert,
    eyebrow: "Link expired",
    title: "This confirmation link is no longer active.",
    copy:
      "For privacy, confirmation links are temporary. Join again and Lazing will send a fresh one.",
  },
};

export default async function NewsletterConfirmedPage({
  searchParams,
}: NewsletterConfirmedPageProps) {
  const params = await searchParams;
  const key = params?.status === "failed" || params?.status === "invalid" ? params.status : "confirmed";
  const state = states[key];
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
              <ShieldCheck size={16} />
              Explicit consent
            </span>
            <span>
              <Home size={16} />
              Local-first project
            </span>
          </div>
          <div className="confirmation-actions">
            <Link className="button button-dark" href="/">
              Open laz.ing
            </Link>
            <Link className="button button-light" href="/#letter">
              Newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
