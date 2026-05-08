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
```

`RESEND_NEWSLETTER_SEGMENT_ID` and `RESEND_NEWSLETTER_TOPIC_ID` are optional. Without
`RESEND_API_KEY`, the API returns a clear launch-time error instead of pretending to
subscribe the visitor.

## Routes

- `/`
- `/manifestation-layer`
- `/developers`
- `/creators`
- `/community`
- `/privacy`
- `/imprint`
- `/license`
