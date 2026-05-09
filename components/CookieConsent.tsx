"use client";

import { useState, useSyncExternalStore } from "react";

const categories = [
  {
    id: "analytics",
    label: "Analytics",
    copy: "Optional, only after consent. Used later to understand what helps builders.",
  },
  {
    id: "media",
    label: "Media embeds",
    copy: "Optional external media. Blocked until you allow it.",
  },
  {
    id: "community",
    label: "Community",
    copy: "Optional community widgets or waitlist tools. Blocked by default.",
  },
] as const;

type OptionalCategory = (typeof categories)[number]["id"];

const storageKey = "lazing-consent-v1";

export function CookieConsent() {
  const consentSaved = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      return () => window.removeEventListener("storage", onStoreChange);
    },
    () => window.localStorage.getItem(storageKey) ?? "",
    () => "",
  );
  const [selected, setSelected] = useState<Record<OptionalCategory, boolean>>({
    analytics: false,
    media: false,
    community: false,
  });
  const [detailsOpen, setDetailsOpen] = useState(false);

  function persist(next: Record<OptionalCategory, boolean>) {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ necessary: true, ...next, savedAt: new Date().toISOString() }),
    );
    window.dispatchEvent(new Event("storage"));
  }

  if (consentSaved) return null;

  return (
    <aside
      className={`cookie-panel ${detailsOpen ? "is-expanded" : ""}`}
      aria-label="Cookie consent"
    >
      <div>
        <p className="eyebrow">Quiet by default</p>
        <h2>Necessary only by default.</h2>
        <p>
          Lazing keeps the first visit quiet. Optional categories stay off until you
          choose them.
        </p>
      </div>

      <div className="consent-options" aria-label="Optional consent categories">
        <div className="consent-row is-required">
          <span>
            <strong>Necessary</strong>
            <small>Required for consent storage and basic site function.</small>
          </span>
          <em>Always on</em>
        </div>
        {categories.map((category) => (
          <label key={category.id} className="consent-toggle">
            <input
              type="checkbox"
              checked={selected[category.id]}
              onChange={(event) =>
                setSelected((current) => ({ ...current, [category.id]: event.target.checked }))
              }
            />
            <span>
              <strong>{category.label}</strong>
              <small>{category.copy}</small>
            </span>
          </label>
        ))}
      </div>

      <div className="cookie-actions">
        <button
          className="button button-quiet"
          type="button"
          onClick={() => setDetailsOpen((current) => !current)}
          aria-expanded={detailsOpen}
        >
          {detailsOpen ? "Hide details" : "Details"}
        </button>
        <button className="button button-quiet" type="button" onClick={() => persist(selected)}>
          Allow selected
        </button>
        <button
          className="button button-quiet"
          type="button"
          onClick={() => persist({ analytics: false, media: false, community: false })}
        >
          Necessary only
        </button>
        <button
          className="button button-dark"
          type="button"
          onClick={() => persist({ analytics: true, media: true, community: true })}
        >
          Allow all
        </button>
      </div>
    </aside>
  );
}
