export type NewsletterTrack = "builder" | "developer" | "creator" | "changelog" | "launch";
export type ProgramRole = "creator" | "developer" | "builder";

const trackLabels: Record<NewsletterTrack, string> = {
  launch: "Launch letter",
  builder: "Early builder",
  developer: "Developer program",
  creator: "Creator program",
  changelog: "Changelog",
};

const trackNotes: Record<NewsletterTrack, string> = {
  launch: "You will get the quiet launch notes first: what shipped, what changed, and where Lazing is heading.",
  builder: "You will get early builder notes, install direction, and invitations when the runtime is ready for more hands.",
  developer: "You will get adapter, pack, trace, and architecture updates written for people who may build on the layer.",
  creator: "You will get creator-program notes about turning repeatable expertise into packs, routines, and audience outcomes.",
  changelog: "You will get compact release notes: meaningful changes only, no noisy drip campaign.",
};

const programRoleLabels: Record<ProgramRole, string> = {
  creator: "Founding Creator",
  developer: "Founding Developer",
  builder: "Founding Builder",
};

const programRoleNotes: Record<ProgramRole, string> = {
  creator: "A creator application for turning repeatable expertise into packs, routines and audience systems.",
  developer: "A developer application for adapters, trace tools, evals, pack infrastructure or runtime integrations.",
  builder: "A builder application for running early systems, reporting friction and proving real workflows.",
};

type WelcomeEmailOptions = {
  track: NewsletterTrack;
  unsubscribeUrl?: string;
};

type ConfirmationEmailOptions = {
  track: NewsletterTrack;
  confirmUrl: string;
  expiresInHours?: number;
};

type ProgramConfirmationEmailOptions = {
  role: ProgramRole;
  useCase: string;
  confirmUrl: string;
  expiresInHours?: number;
};

type ProgramReviewEmailOptions = {
  email: string;
  role: ProgramRole;
  useCase: string;
  contribution: string;
  link?: string;
  source: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function brandShell({
  title,
  preheader,
  eyebrow,
  body,
  footer,
}: {
  title: string;
  preheader: string;
  eyebrow: string;
  body: string;
  footer: string;
}) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f7f7ff;color:#0d0d14;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text',Inter,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;color:transparent;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7ff;margin:0;padding:0;">
      <tr>
        <td align="center" style="padding:36px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:646px;border-collapse:separate;border-spacing:0;">
            <tr>
              <td style="padding:0 4px 18px;">
                <div style="font-size:15px;letter-spacing:9px;font-weight:650;color:#0d0d14;">LAZING</div>
                <div style="width:112px;height:2px;margin-top:14px;border-radius:999px;background:linear-gradient(90deg,#687cff,#a259ff 38%,#ff66c7 68%,#ff9a3c);"></div>
              </td>
            </tr>
            <tr>
              <td style="overflow:hidden;border:1px solid rgba(13,13,20,.08);border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(255,255,255,.72));box-shadow:0 32px 90px rgba(30,32,60,.10);">
                <div style="height:176px;background:linear-gradient(118deg,transparent 0 32%,rgba(104,124,255,.20) 46%,rgba(255,255,255,.88) 55%,rgba(255,102,199,.18) 66%,rgba(255,154,60,.17) 78%,transparent 91%),radial-gradient(circle at 78% 20%,rgba(162,89,255,.16),transparent 38%),radial-gradient(circle at 18% 84%,rgba(104,124,255,.10),transparent 30%),linear-gradient(180deg,#fbfcff,#f7f7ff);"></div>
                <div style="padding:38px 38px 36px;">
                  <div style="font-size:12px;font-weight:720;letter-spacing:5px;text-transform:uppercase;color:#687cff;">${escapeHtml(eyebrow)}</div>
                  ${body}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 6px 0;color:#777a86;font-size:12px;line-height:1.5;">
                ${footer}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildLazingConfirmationEmail({
  track,
  confirmUrl,
  expiresInHours = 48,
}: ConfirmationEmailOptions) {
  const trackLabel = trackLabels[track];
  const trackNote = trackNotes[track];
  const safeConfirmUrl = escapeHtml(confirmUrl);
  const body = `
    <h1 style="margin:18px 0 0;font-size:46px;line-height:1.02;font-weight:650;letter-spacing:-.02em;color:#0d0d14;">One clear yes.</h1>
    <p style="margin:20px 0 0;font-size:19px;line-height:1.45;color:#5f6270;">Confirm that you want the Lazing Letter. A European project should ask before it keeps your attention.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0 0;border-collapse:separate;border-spacing:0 10px;">
      <tr>
        <td style="border:1px solid rgba(13,13,20,.07);border-radius:18px;background:rgba(255,255,255,.72);padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#7a7d89;">Selected track</div>
          <div style="margin-top:8px;font-size:17px;font-weight:650;color:#0d0d14;">${escapeHtml(trackLabel)}</div>
          <div style="margin-top:6px;font-size:15px;line-height:1.45;color:#696c77;">${escapeHtml(trackNote)}</div>
        </td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(13,13,20,.07);border-radius:18px;background:rgba(255,255,255,.58);padding:16px 18px;">
          <div style="font-size:15px;line-height:1.45;color:#5f6270;">No newsletter before this click. Necessary data only. No analytics required to join.</div>
        </td>
      </tr>
    </table>
    <a href="${safeConfirmUrl}" style="display:inline-block;margin-top:28px;padding:15px 22px;border-radius:999px;background:#0d0d14;color:#ffffff;font-size:15px;font-weight:650;text-decoration:none;">Confirm the Lazing Letter</a>
    <p style="margin:22px 0 0;font-size:13px;line-height:1.55;color:#777a86;">This link expires in ${expiresInHours} hours. If the button does not open, use this link:<br><a href="${safeConfirmUrl}" style="color:#687cff;text-decoration:none;word-break:break-all;">${safeConfirmUrl}</a></p>
  `;
  const html = brandShell({
    title: "Confirm the Lazing Letter",
    preheader: "Only one step left. Confirm your Lazing Letter signup.",
    eyebrow: "Double opt-in",
    body,
    footer:
      "You receive this because this address was entered on laz.ing. If that was not you, ignore this email and nothing else happens.",
  });
  const text = [
    "One clear yes.",
    "",
    "Confirm that you want the Lazing Letter. A European project should ask before it keeps your attention.",
    "",
    `Track: ${trackLabel}`,
    trackNote,
    "",
    "Confirm:",
    confirmUrl,
    "",
    `This link expires in ${expiresInHours} hours. If this was not you, ignore this email.`,
  ].join("\n");

  return {
    subject: "One step left: confirm the Lazing Letter",
    html,
    text,
  };
}

export function buildLazingWelcomeEmail({ track, unsubscribeUrl }: WelcomeEmailOptions) {
  const trackLabel = trackLabels[track];
  const trackNote = trackNotes[track];
  const safeUnsubscribeUrl = unsubscribeUrl ? escapeHtml(unsubscribeUrl) : "";

  const body = `
    <h1 style="margin:18px 0 0;font-size:44px;line-height:1.02;font-weight:650;letter-spacing:-.02em;color:#0d0d14;">Confirmed. Welcome to the Lazing Letter.</h1>
    <p style="margin:20px 0 0;font-size:19px;line-height:1.45;color:#5f6270;">No noisy drip campaign. No fake urgency. Just founder notes, build decisions, and the parts of Lazing that are useful enough to send.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0 0;border-collapse:separate;border-spacing:0 10px;">
      <tr>
        <td style="border:1px solid rgba(13,13,20,.07);border-radius:18px;background:rgba(255,255,255,.72);padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#7a7d89;">Selected track</div>
          <div style="margin-top:8px;font-size:17px;font-weight:650;color:#0d0d14;">${escapeHtml(trackLabel)}</div>
          <div style="margin-top:6px;font-size:15px;line-height:1.45;color:#696c77;">${escapeHtml(trackNote)}</div>
        </td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(13,13,20,.07);border-radius:18px;background:rgba(255,255,255,.58);padding:16px 18px;">
          <div style="font-size:15px;line-height:1.45;color:#5f6270;">Lazing turns intention into living systems: fields, lenses, packs, manifestations, resolutions, and trace.</div>
        </td>
      </tr>
    </table>
    <a href="https://laz.ing" style="display:inline-block;margin-top:28px;padding:14px 20px;border-radius:999px;background:#0d0d14;color:#ffffff;font-size:15px;font-weight:650;text-decoration:none;">Open laz.ing</a>
  `;
  const html = brandShell({
    title: "Welcome to the Lazing letter",
    preheader: "You confirmed the Lazing Letter. No noise, only useful updates.",
    eyebrow: trackLabel,
    body,
    footer: `You receive this because you explicitly confirmed the Lazing newsletter. Necessary data only, unsubscribe anytime.${safeUnsubscribeUrl ? ` <a href="${safeUnsubscribeUrl}" style="color:#687cff;text-decoration:none;">Unsubscribe</a>.` : ""}`,
  });

  const text = [
    "Welcome to the Lazing letter.",
    "",
    `Track: ${trackLabel}`,
    trackNote,
    "",
    "No noisy drip campaign. No fake urgency. Just founder notes, build decisions, and the parts of Lazing that are useful enough to send.",
    "",
    "Open laz.ing: https://laz.ing",
    unsubscribeUrl ? `Unsubscribe: ${unsubscribeUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: "You are on the Lazing letter",
    html,
    text,
  };
}

export function buildFoundingCircleConfirmationEmail({
  role,
  useCase,
  confirmUrl,
  expiresInHours = 48,
}: ProgramConfirmationEmailOptions) {
  const roleLabel = programRoleLabels[role];
  const roleNote = programRoleNotes[role];
  const safeConfirmUrl = escapeHtml(confirmUrl);
  const safeUseCase = escapeHtml(useCase);
  const body = `
    <h1 style="margin:18px 0 0;font-size:46px;line-height:1.02;font-weight:650;letter-spacing:-.02em;color:#0d0d14;">Confirm your Founding Circle application.</h1>
    <p style="margin:20px 0 0;font-size:19px;line-height:1.45;color:#5f6270;">One clear yes before we keep your attention. The first Lazing cohort is curated, quiet and built around useful work.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0 0;border-collapse:separate;border-spacing:0 10px;">
      <tr>
        <td style="border:1px solid rgba(13,13,20,.07);border-radius:18px;background:rgba(255,255,255,.72);padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#7a7d89;">Application role</div>
          <div style="margin-top:8px;font-size:17px;font-weight:650;color:#0d0d14;">${escapeHtml(roleLabel)}</div>
          <div style="margin-top:6px;font-size:15px;line-height:1.45;color:#696c77;">${escapeHtml(roleNote)}</div>
        </td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(13,13,20,.07);border-radius:18px;background:rgba(255,255,255,.58);padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#7a7d89;">Use case</div>
          <div style="margin-top:8px;font-size:15px;line-height:1.45;color:#5f6270;">${safeUseCase}</div>
        </td>
      </tr>
    </table>
    <a href="${safeConfirmUrl}" style="display:inline-block;margin-top:28px;padding:15px 22px;border-radius:999px;background:#0d0d14;color:#ffffff;font-size:15px;font-weight:650;text-decoration:none;">Confirm application</a>
    <p style="margin:22px 0 0;font-size:13px;line-height:1.55;color:#777a86;">This link expires in ${expiresInHours} hours. If the button does not open, use this link:<br><a href="${safeConfirmUrl}" style="color:#687cff;text-decoration:none;word-break:break-all;">${safeConfirmUrl}</a></p>
  `;
  const html = brandShell({
    title: "Confirm your Founding Circle application",
    preheader: `Confirm your ${roleLabel} application for the Lazing Founding Circle.`,
    eyebrow: "Founding Circle",
    body,
    footer:
      "You receive this because this address applied to the Lazing Founding Circle on laz.ing. If that was not you, ignore this email and nothing else happens.",
  });
  const text = [
    "Confirm your Founding Circle application.",
    "",
    `Role: ${roleLabel}`,
    roleNote,
    "",
    "Use case:",
    useCase,
    "",
    "Confirm:",
    confirmUrl,
    "",
    `This link expires in ${expiresInHours} hours. If this was not you, ignore this email.`,
  ].join("\n");

  return {
    subject: `Confirm your ${roleLabel} application`,
    html,
    text,
  };
}

export function buildFoundingCircleReviewEmail({
  email,
  role,
  useCase,
  contribution,
  link,
  source,
}: ProgramReviewEmailOptions) {
  const roleLabel = programRoleLabels[role];
  const safeEmail = escapeHtml(email);
  const safeUseCase = escapeHtml(useCase);
  const safeContribution = escapeHtml(contribution);
  const safeLink = link ? escapeHtml(link) : "";
  const body = `
    <h1 style="margin:18px 0 0;font-size:42px;line-height:1.04;font-weight:650;letter-spacing:-.02em;color:#0d0d14;">New ${escapeHtml(roleLabel)} application.</h1>
    <p style="margin:20px 0 0;font-size:18px;line-height:1.45;color:#5f6270;">The applicant confirmed Double Opt-In and is ready for manual Founding Circle review.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0 0;border-collapse:separate;border-spacing:0 10px;">
      ${[
        ["Email", safeEmail],
        ["Role", escapeHtml(roleLabel)],
        ["Source", escapeHtml(source)],
        ["Use case", safeUseCase],
        ["Contribution", safeContribution],
        ["Link", safeLink || "Not provided"],
      ]
        .map(
          ([label, value]) => `
      <tr>
        <td style="border:1px solid rgba(13,13,20,.07);border-radius:18px;background:rgba(255,255,255,.72);padding:16px 18px;">
          <div style="font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#7a7d89;">${label}</div>
          <div style="margin-top:8px;font-size:15px;line-height:1.45;color:#0d0d14;word-break:break-word;">${value}</div>
        </td>
      </tr>`,
        )
        .join("")}
    </table>
  `;
  const html = brandShell({
    title: `New ${roleLabel} application`,
    preheader: `${email} confirmed a Lazing Founding Circle application.`,
    eyebrow: "Program review",
    body,
    footer:
      "This internal email was generated after Double Opt-In confirmation on laz.ing.",
  });
  const text = [
    `New ${roleLabel} application`,
    "",
    `Email: ${email}`,
    `Role: ${roleLabel}`,
    `Source: ${source}`,
    "",
    "Use case:",
    useCase,
    "",
    "Contribution:",
    contribution,
    "",
    `Link: ${link || "Not provided"}`,
  ].join("\n");

  return {
    subject: `New ${roleLabel} application`,
    html,
    text,
  };
}
