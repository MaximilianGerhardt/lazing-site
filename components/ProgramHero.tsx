import type { LucideIcon } from "lucide-react";

type Action = {
  href: string;
  label: string;
};

type Benefit = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

type VisualItem = {
  label: string;
  value: string;
};

type ProgramHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  primary: Action;
  secondary: Action;
  benefits: Benefit[];
  visual: {
    kicker: string;
    title: string;
    copy: string;
    items: VisualItem[];
  };
};

export function ProgramHero({
  eyebrow,
  title,
  copy,
  primary,
  secondary,
  benefits,
  visual,
}: ProgramHeroProps) {
  return (
    <section className="subpage-hero program-hero branded-program-hero">
      <div className="program-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div className="program-actions">
          <a className="button button-dark" href={primary.href}>
            {primary.label}
          </a>
          <a className="button button-light" href={secondary.href}>
            {secondary.label}
          </a>
        </div>
        <i className="program-gradient-mark" aria-hidden="true" />
        <div className="program-benefit-row" aria-label={`${eyebrow} benefits`}>
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="program-benefit-pill">
                <i aria-hidden="true">
                  <Icon size={17} strokeWidth={1.8} />
                </i>
                <div>
                  <strong>{benefit.title}</strong>
                  <span>{benefit.copy}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="program-hero-visual" aria-hidden="true">
        <div className="program-visual-card">
          <div className="program-visual-brand">
            <span>L A Z I N G</span>
            <i />
          </div>
          <div className="program-visual-copy">
            <span>{visual.kicker}</span>
            <h2>{visual.title}</h2>
            <p>{visual.copy}</p>
          </div>
          <div className="program-visual-list">
            {visual.items.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
