# Lazing Site

Public website for Lazing: a local-first AI command center that turns intention into scoped, living systems.

## Stack

- Next.js App Router
- TypeScript
- Plain CSS design system
- GDPR-aware consent shell
- Metadata routes for `robots.txt`, `sitemap.xml`, `llms.txt` and OpenGraph

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Newsletter Backend

The newsletter form is GDPR-aware and requires explicit consent before creating a
confirmed newsletter contact. It uses Double Opt-In and is wired for Resend through
environment variables:

```bash
RESEND_API_KEY=
RESEND_NEWSLETTER_SEGMENT_ID=
RESEND_NEWSLETTER_TOPIC_ID=
RESEND_FROM_EMAIL=
RESEND_REPLY_TO_EMAIL=
RESEND_UNSUBSCRIBE_URL=
PROGRAM_REVIEW_EMAIL=
NEWSLETTER_CONFIRM_SECRET=
NEWSLETTER_CONFIRM_BASE_URL=https://laz.ing
```

`RESEND_NEWSLETTER_SEGMENT_ID` and `RESEND_NEWSLETTER_TOPIC_ID` are optional. Without
`RESEND_API_KEY`, the API returns a clear launch-time error instead of pretending to
subscribe the visitor.

`NEWSLETTER_CONFIRM_SECRET` signs temporary confirmation links. If
`RESEND_FROM_EMAIL` is set to a verified Resend sender, the signup endpoint sends the
branded confirmation email. The contact is only moved into the newsletter segment
after confirmation. Leave `RESEND_FROM_EMAIL` empty until the sending domain is
verified. `RESEND_REPLY_TO_EMAIL` and `RESEND_UNSUBSCRIBE_URL` are optional.
`PROGRAM_REVIEW_EMAIL` receives confirmed Founding Circle applications. If it is not
set, the program review email falls back to `RESEND_REPLY_TO_EMAIL` and then
`info@p-a.llc`.

Program application details are stored as pending Resend contact properties and are
not embedded into Double Opt-In URLs. Confirmation tokens carry only the minimum
state needed to verify the click.

The public newsletter and program endpoints include same-origin checks, request-size
limits and lightweight per-IP/per-email throttling before Resend sends. Keep a
Cloudflare WAF or rate-limiting rule in front of these endpoints for production-grade
abuse protection.

## Routes

- `/`
- `/de`
- `/manifestation-layer`
- `/developers`
- `/creators`
- `/community`
- `/changelog`
- `/terms`
- `/program/check-email`
- `/program/confirmed`
- `/privacy`
- `/imprint`
- `/license`
