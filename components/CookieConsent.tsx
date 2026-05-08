"use client";

import { useSyncExternalStore, useState } from "react";

const categories = [
  { id: "analytics", label: "Analytics" },
  { id: "media", label: "Media embeds" },
  { id: "community", label: "Community" },
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
    () => "server",
  );
  const [selected, setSelected] = useState<Record<OptionalCategory, boolean>>({
    analytics: false,
    media: false,
    community: false,
  });
  function persist(next: Record<OptionalCategory, boolean>) {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ necessary: true, ...next, savedAt: new Date().toISOString() }),
    );
    window.dispatchEvent(new Event("storage"));
  }

  if (consentSaved) return null;

  return (
    <aside className="cookie-panel" aria-label="Cookie consent">
      <div>
        <p className="eyebrow">Quiet by default</p>
        <h2>Lazing keeps the first visit quiet.</h2>
        <p>
          Necessary cookies only by default. You can allow optional signals if you want to
          help improve the project.
        </p>
      </div>

      <div className="consent-options" aria-label="Optional consent categories">
        {categories.map((category) => (
          <label key={category.id} className="consent-toggle">
            <input
              type="checkbox"
              checked={selected[category.id]}
              onChange={(event) =>
                setSelected((current) => ({ ...current, [category.id]: event.target.checked }))
              }
            />
            <span>{category.label}</span>
          </label>
        ))}
      </div>

      <div className="cookie-actions">
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
