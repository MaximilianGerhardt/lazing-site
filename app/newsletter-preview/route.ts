import {
  buildLazingConfirmationEmail,
  buildLazingWelcomeEmail,
} from "@/lib/email/lazingNewsletter";

export function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type");
  const email =
    type === "welcome"
      ? buildLazingWelcomeEmail({
          track: "launch",
          unsubscribeUrl: "https://laz.ing/privacy",
        })
      : buildLazingConfirmationEmail({
          track: "launch",
          confirmUrl: "https://laz.ing/api/newsletter/confirm?token=preview",
        });

  return new Response(email.html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
