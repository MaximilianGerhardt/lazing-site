import Link from "next/link";
import { MailCheck, ShieldCheck, Sparkles } from "lucide-react";
import { pageMetadata } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: "Confirm Your Lazing Letter",
    description:
      "One clear step remains: confirm your Lazing newsletter signup by email. No newsletter is sent before explicit consent.",
    path: "/newsletter/check-email",
  }),
  robots: { index: false, follow: false },
};

export default function NewsletterCheckEmailPage() {
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
            We sent you a confirmation email. Lazing starts quietly: no newsletter
            without a clear yes, no hidden consent, no unnecessary signals.
          </p>
          <div className="confirmation-proof">
            <span>
              <ShieldCheck size={16} />
              Privacy taken seriously
            </span>
            <span>
              <Sparkles size={16} />
              Necessary data only
            </span>
          </div>
          <div className="confirmation-actions">
            <Link className="button button-dark" href="/">
              Back to Lazing
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
