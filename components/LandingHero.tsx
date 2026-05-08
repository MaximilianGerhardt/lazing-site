"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const installCommand = `git clone https://github.com/MaximilianGerhardt/lazing.git
cd lazing
./install`;

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.5 17.5 4 20V6.8C4 5.25 5.25 4 6.8 4h10.4C18.75 4 20 5.25 20 6.8v7.9c0 1.55-1.25 2.8-2.8 2.8H6.5Z" />
      <path d="M8 10.8h.01M12 10.8h.01M16 10.8h.01" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 10V8.2C7 5.35 9.15 3.5 12 3.5s5 1.85 5 4.7V10" />
      <path d="M6.5 10h11c.8 0 1.5.7 1.5 1.5v7c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-7c0-.8.7-1.5 1.5-1.5Z" />
      <path d="M12 14v2.2" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3.5 14.1 9.9 20.5 12l-6.4 2.1L12 20.5l-2.1-6.4L3.5 12l6.4-2.1L12 3.5Z" />
      <path d="M18.5 3.8v3.1M20.05 5.35h-3.1" />
    </svg>
  );
}

export function LandingHero() {
  const [copied, setCopied] = useState(false);

  async function copyInstallCommand() {
    try {
      const copyWithTextarea = () => {
        const textArea = document.createElement("textarea");
        textArea.value = installCommand;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      };

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(installCommand).catch(copyWithTextarea);
      } else {
        copyWithTextarea();
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          The system adapts <span>to you.</span>
        </h1>
        <p className="hero-lede">
          Not the other way around. Describe your intention and the right working system appears.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-dark" href="#start-locally">›_ Start locally</a>
          <Link className="button button-light" href="/manifestation-layer">
            Explore the docs
          </Link>
        </div>

        <div className="hero-install" aria-label="Start Lazing from GitHub">
          <a
            className="hero-install-repo"
            href="https://github.com/MaximilianGerhardt/lazing"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>MaximilianGerhardt/lazing</strong>
          </a>
          <code>git clone …/lazing && ./install</code>
          <button
            className="hero-copy-button"
            type="button"
            onClick={copyInstallCommand}
            aria-label={copied ? "Install command copied" : "Copy install command"}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              {copied ? (
                <path d="m5 12 4.2 4.2L19 6.8" />
              ) : (
                <>
                  <path d="M8 8.5V6.8C8 5.8 8.8 5 9.8 5h7.4c1 0 1.8.8 1.8 1.8v7.4c0 1-.8 1.8-1.8 1.8h-1.7" />
                  <path d="M5 10.8C5 9.8 5.8 9 6.8 9h7.4c1 0 1.8.8 1.8 1.8v7.4c0 1-.8 1.8-1.8 1.8H6.8c-1 0-1.8-.8-1.8-1.8v-7.4Z" />
                </>
              )}
            </svg>
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <div className="hero-trust" aria-label="Lazing principles">
          <span>
            <i><ChatIcon /></i>
            <b><strong>Local-first</strong><em>Your runtime. Your data.</em></b>
          </span>
          <span>
            <i><LockIcon /></i>
            <b><strong>Private by default</strong><em>Personal Field keeps you in control.</em></b>
          </span>
          <span>
            <i><SparkIcon /></i>
            <b><strong>Open source</strong><em>Transparent. Built for builders.</em></b>
          </span>
        </div>
      </div>

      <div className="hero-stage">
        <div className="artifact-plinth">
          <Image
            src="/assets/lazing-phone-mockup-transparent.png"
            alt="Lazing mobile command center showing a product launch manifestation"
            width={853}
            height={1844}
            priority
            className="product-mockup-image"
          />
        </div>
      </div>

      <div className="engine-dock" aria-label="Lazing engines">
        <span>Connect when you&apos;re ready</span>
        <strong><Image src="/brand/openai.svg" alt="" width={24} height={24} />Codex</strong>
        <strong><Image src="/brand/claude.svg" alt="" width={24} height={24} />Claude Code</strong>
        <strong><Image src="/brand/ollama.svg" alt="" width={24} height={24} />Ollama</strong>
      </div>
    </section>
  );
}
