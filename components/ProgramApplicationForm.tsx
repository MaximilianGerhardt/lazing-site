"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Award, CheckCircle2, LockKeyhole, Sparkles } from "lucide-react";
import { programRoleLabels, programRoles, type ProgramRole } from "@/lib/program/foundingCircle";

type ProgramBenefit = {
  title: string;
  copy: string;
};

type ProgramApplicationFormProps = {
  defaultRole: ProgramRole;
  source: string;
  title: string;
  copy: string;
  benefits: ProgramBenefit[];
};

export function ProgramApplicationForm({
  defaultRole,
  source,
  title,
  copy,
  benefits,
}: ProgramApplicationFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const role = String(formData.get("role") ?? defaultRole) as ProgramRole;

    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/program/apply", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        role,
        useCase: formData.get("useCase"),
        contribution: formData.get("contribution"),
        link: formData.get("link"),
        source,
        consent: formData.get("consent") === "on",
        company: formData.get("company"),
      }),
    });
    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message ?? "Application failed. Please try again later.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage(data.message ?? "One step left. Please confirm the email we just sent.");
    router.push(`/program/check-email?role=${encodeURIComponent(role)}`);
  }

  return (
    <section className="program-application-panel" id="founding-circle" aria-label="Founding Circle application">
      <div className="program-application-copy">
        <p className="eyebrow">Founding Circle</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className="founding-badge" aria-label={`${programRoleLabels[defaultRole]} badge`}>
          <Award size={18} strokeWidth={1.8} />
          <span>{programRoleLabels[defaultRole]}</span>
        </div>
        <div className="program-application-benefits">
          {benefits.map((benefit, index) => (
            <article key={benefit.title}>
              {index === 0 ? (
                <Sparkles size={18} strokeWidth={1.8} />
              ) : index === 1 ? (
                <LockKeyhole size={18} strokeWidth={1.8} />
              ) : (
                <CheckCircle2 size={18} strokeWidth={1.8} />
              )}
              <div>
                <strong>{benefit.title}</strong>
                <span>{benefit.copy}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <form className="program-application-form" onSubmit={onSubmit}>
        <input className="hidden-field" name="company" tabIndex={-1} autoComplete="off" />
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Role</span>
          <select name="role" defaultValue={defaultRole}>
            {programRoles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Primary use case</span>
          <textarea
            name="useCase"
            placeholder="Example: I want to turn my client onboarding method into a scoped Lazing pack."
            required
            minLength={12}
            maxLength={900}
          />
        </label>
        <label>
          <span>What can you contribute?</span>
          <textarea
            name="contribution"
            placeholder="Your audience, domain expertise, runtime feedback, adapter idea, pack method, review capacity..."
            required
            minLength={12}
            maxLength={900}
          />
        </label>
        <label>
          <span>Optional link</span>
          <input name="link" type="url" placeholder="Website, GitHub, social or portfolio" />
        </label>
        <label className="newsletter-consent">
          <input name="consent" type="checkbox" required />
          <span>
            I want to receive the Lazing founder letter and Founding Circle program invitations.
            I understand that I must confirm my email first and can unsubscribe at any time.
            See <Link href="/privacy">Privacy</Link>.
          </span>
        </label>
        <button className="button button-dark" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending confirmation..." : "Apply with double opt-in"}
        </button>
        {message ? <p className={`newsletter-status ${status}`}>{message}</p> : null}
      </form>
    </section>
  );
}
