"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type NewsletterSignupProps = {
  title?: string;
  copy?: string;
  source: string;
  defaultTrack?: "builder" | "developer" | "creator" | "changelog" | "launch";
};

const tracks = [
  { value: "launch", label: "Launch letter" },
  { value: "builder", label: "Early builder" },
  { value: "developer", label: "Developer program" },
  { value: "creator", label: "Creator program" },
  { value: "changelog", label: "Changelog" },
] as const;

export function NewsletterSignup({
  title = "Back the project with attention.",
  copy = "No analytics trap, no growth-hack drip. Join the Lazing letter for launch notes, build decisions and early program access.",
  source,
  defaultTrack = "launch",
}: NewsletterSignupProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        track: formData.get("track"),
        source,
        consent: formData.get("consent") === "on",
        company: formData.get("company"),
      }),
    });
    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message ?? "Signup failed. Please try again later.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage(data.message ?? "You are on the list.");
  }

  return (
    <section className="newsletter-panel" aria-label="Lazing newsletter">
      <div className="newsletter-copy">
        <p className="eyebrow">Founder Letter</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className="newsletter-proof" aria-label="Newsletter principles">
          <span>Necessary data only</span>
          <span>Unsubscribe anytime</span>
          <span>No analytics required</span>
        </div>
      </div>

      <form className="newsletter-form" onSubmit={onSubmit}>
        <input className="hidden-field" name="company" tabIndex={-1} autoComplete="off" />
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Track</span>
          <select name="track" defaultValue={defaultTrack}>
            {tracks.map((track) => (
              <option key={track.value} value={track.value}>
                {track.label}
              </option>
            ))}
          </select>
        </label>
        <label className="newsletter-consent">
          <input name="consent" type="checkbox" required />
          <span>
            I want to receive the Lazing founder letter, product updates and program invitations.
            I can unsubscribe at any time. See <Link href="/privacy">Privacy</Link>.
          </span>
        </label>
        <button className="button button-dark" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Joining..." : "Join the letter"}
        </button>
        {message ? <p className={`newsletter-status ${status}`}>{message}</p> : null}
      </form>
    </section>
  );
}
