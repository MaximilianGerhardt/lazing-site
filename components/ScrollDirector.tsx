"use client";

import { useEffect } from "react";

const revealSelector = [
  ".reveal",
  ".section-copy",
  ".command-copy",
  ".creator-copy",
  ".bento-card",
  ".quick-choice-grid",
  ".lens-strip",
  ".pack-row",
  ".capability-list",
  ".creator-examples",
  ".creator-blueprint-section",
  ".blueprint-card",
  ".pack-case-card",
  ".creator-quality-section",
  ".role-card",
  ".submission-section",
  ".submission-steps",
  ".build-public-section",
  ".program-application-panel",
  ".changelog-note",
  ".program-card",
  ".value-card",
  ".docs-flow-card",
  ".definition-stack",
  ".docs-principle-card",
  ".docs-resolution",
  ".showcase-grid",
  ".anatomy-list",
  ".path-card",
  ".newsletter-panel",
  "details",
  ".final-cta",
].join(",");

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollDirector() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      root.classList.add("motion-reduced");
      return;
    }

    root.classList.add("motion-ready");

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const flowStories = Array.from(document.querySelectorAll<HTMLElement>("[data-flow-story]"));

    revealItems.forEach((item, index) => {
      if (!item.style.getPropertyValue("--reveal-index")) {
        item.style.setProperty("--reveal-index", String(index % 5));
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const markInitialVisible = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
          item.classList.add("is-visible");
          observer.unobserve(item);
        }
      });
    };

    const updateHeroMotion = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const progress = clamp(-rect.top / Math.max(1, rect.height));
      root.style.setProperty("--hero-scroll", progress.toFixed(3));
    };

    const updateFlowStories = () => {
      flowStories.forEach((story) => {
        const cards = Array.from(story.querySelectorAll<HTMLElement>("[data-flow-card]"));
        const steps = Array.from(story.querySelectorAll<HTMLElement>("[data-flow-step]"));
        if (!cards.length) return;

        const rect = story.getBoundingClientRect();
        const pinTop = window.matchMedia("(max-width: 760px)").matches ? 74 : 82;
        const travel = Math.max(1, rect.height - window.innerHeight);
        const progress = clamp((pinTop - rect.top) / travel);
        const stepCount = cards.length;
        const rawStep = progress * stepCount;
        const activeIndex = Math.min(stepCount - 1, Math.floor(rawStep));
        const localProgress = activeIndex === stepCount - 1 ? 1 : clamp(rawStep - activeIndex);
        const isPinned = rect.top <= pinTop && rect.bottom >= window.innerHeight;
        const isAfter = rect.bottom < window.innerHeight;

        story.style.setProperty("--flow-progress", progress.toFixed(4));
        story.style.setProperty("--flow-step-count", String(stepCount));
        story.style.setProperty("--flow-active-index", String(activeIndex));
        story.style.setProperty("--flow-local-progress", localProgress.toFixed(4));
        story.dataset.activeStep = String(activeIndex);
        story.classList.toggle("is-pinned", isPinned);
        story.classList.toggle("is-after", isAfter);

        cards.forEach((card, index) => {
          card.classList.toggle("is-active", index === activeIndex);
          card.style.setProperty("--flow-card-offset", String(index - activeIndex));
        });

        steps.forEach((step, index) => {
          step.classList.toggle("is-active", index === activeIndex);
          step.classList.toggle("is-complete", index < activeIndex);
        });
      });
    };

    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      updateHeroMotion();
      updateFlowStories();
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMotion);
    };

    markInitialVisible();
    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      root.style.removeProperty("--hero-scroll");
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
