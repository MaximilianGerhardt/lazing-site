export type NewsletterTrack = "builder" | "developer" | "creator" | "changelog" | "launch";

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

type WelcomeEmailOptions = {
  track: NewsletterTrack;
  unsubscribeUrl?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function buildLazingWelcomeEmail({ track, unsubscribeUrl }: WelcomeEmailOptions) {
  const trackLabel = trackLabels[track];
  const trackNote = trackNotes[track];
  const safeUnsubscribeUrl = unsubscribeUrl ? escapeHtml(unsubscribeUrl) : "";

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>Welcome to the Lazing letter</title>
  </head>
  <body style="margin:0;padding:0;background:#f7f7ff;color:#0d0d14;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text',Inter,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7ff;margin:0;padding:0;">
      <tr>
        <td align="center" style="padding:34px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;border-collapse:separate;border-spacing:0;">
            <tr>
              <td style="padding:0 0 16px;">
                <div style="font-size:15px;letter-spacing:9px;font-weight:650;color:#0d0d14;">LAZING</div>
                <div style="width:112px;height:2px;margin-top:14px;border-radius:999px;background:linear-gradient(90deg,#687cff,#a259ff 38%,#ff66c7 68%,#ff9a3c);"></div>
              </td>
            </tr>
            <tr>
              <td style="position:relative;overflow:hidden;border:1px solid rgba(13,13,20,.08);border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(255,255,255,.68));box-shadow:0 32px 90px rgba(30,32,60,.10);padding:42px 38px 36px;">
                <div style="height:150px;margin:-42px -38px 28px;border-radius:34px 34px 26px 26px;background:linear-gradient(118deg,transparent 0 34%,rgba(104,124,255,.22) 48%,rgba(255,255,255,.86) 56%,rgba(255,102,199,.20) 66%,rgba(255,154,60,.18) 78%,transparent 90%),radial-gradient(circle at 76% 26%,rgba(162,89,255,.18),transparent 36%),linear-gradient(180deg,#fbfcff,#f7f7ff);"></div>
                <div style="font-size:12px;font-weight:720;letter-spacing:5px;text-transform:uppercase;color:#687cff;">${escapeHtml(trackLabel)}</div>
                <h1 style="margin:18px 0 0;font-size:44px;line-height:1.02;font-weight:650;letter-spacing:-.02em;color:#0d0d14;">You are on the Lazing letter.</h1>
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
              </td>
            </tr>
            <tr>
              <td style="padding:20px 6px 0;color:#777a86;font-size:12px;line-height:1.5;">
                You receive this because you explicitly joined the Lazing newsletter. Necessary data only, unsubscribe anytime.${safeUnsubscribeUrl ? ` <a href="${safeUnsubscribeUrl}" style="color:#687cff;text-decoration:none;">Unsubscribe</a>.` : ""}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

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
