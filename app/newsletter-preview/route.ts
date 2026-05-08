import { buildLazingWelcomeEmail } from "@/lib/email/lazingNewsletter";

export function GET() {
  const email = buildLazingWelcomeEmail({
    track: "launch",
    unsubscribeUrl: "https://laz.ing/privacy",
  });

  return new Response(email.html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
