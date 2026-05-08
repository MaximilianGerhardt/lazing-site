# Lazing Site

Public website for Lazing: a local-first AI command center that turns intention into scoped, living systems.

## Stack

- Next.js App Router
- TypeScript
- Plain CSS design system
- DSGVO-friendly consent shell
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

The newsletter form is DSGVO-aware and requires explicit consent before creating a
contact. It is wired for Resend through environment variables:

```bash
RESEND_API_KEY=
RESEND_NEWSLETTER_SEGMENT_ID=
RESEND_NEWSLETTER_TOPIC_ID=
RESEND_FROM_EMAIL=
RESEND_REPLY_TO_EMAIL=
RESEND_UNSUBSCRIBE_URL=
```

`RESEND_NEWSLETTER_SEGMENT_ID` and `RESEND_NEWSLETTER_TOPIC_ID` are optional. Without
`RESEND_API_KEY`, the API returns a clear launch-time error instead of pretending to
subscribe the visitor.

If `RESEND_FROM_EMAIL` is set to a verified Resend sender, the signup endpoint also
sends a branded Lazing welcome email. Leave it empty until the sending domain is
verified. `RESEND_REPLY_TO_EMAIL` and `RESEND_UNSUBSCRIBE_URL` are optional.

## Routes

- `/`
- `/manifestation-layer`
- `/developers`
- `/creators`
- `/community`
- `/privacy`
- `/imprint`
- `/license`
