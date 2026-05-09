import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Lazing

Lazing is a local-first AI command center that turns intention into scoped, living systems.

Core positioning:
- Primary line: Lazing turns intention into living systems.
- Hero line: The system adapts to you.
- Runtime: local machine or VPS.
- Mobile: the phone is the primary Command Center, paired through a scoped QR or link.

Install path:
\`\`\`bash
git clone https://github.com/MaximilianGerhardt/lazing.git
cd lazing
./install
\`\`\`

Important concepts:
- Signal: a human intention, observation or request.
- Field: the scoped runtime boundary.
- Observation Lens: the perspective that shapes interpretation.
- Manifestation Pack: reusable domain expertise and confirmation rules.
- Manifestation: an adaptive interface, workflow, document, tracker, decision or system.
- Resolution: user confirmation, adjustment or rejection.
- Trace: local record of what happened and which scope authorized it.

Adapters:
- Codex
- Claude Code
- Ollama
- OpenAI-compatible engines
- local agents

Creator and community direction:
Creators can turn repeatable expertise into methods, routines, workflows, lenses, templates and expert tracks. The first story is empowerment; marketplace features can come later.
Creator packs are described through a blueprint: method, lens, inputs, risks, surfaces and trace.
Community participation is organized around runners, pack authors, reviewers and maintainers.

Privacy direction:
Lazing is local-first and designed with European privacy expectations in mind. No analytics should load before consent on this website. Sensitive data belongs in scoped fields by default.

Risk direction:
AI models, agents and adapters can make mistakes. Lazing content is not legal, medical, financial, security or compliance advice. Local/VPS operators are responsible for installation, credentials, scopes, backups, adapter permissions and reviewing outputs before use.

Links:
- Website: ${site.url}
- Runtime repository: ${site.repo}
- Website repository: ${site.siteRepo}
- Build notes: ${site.url}/changelog
- Imprint: ${site.url}/imprint
- Risk notice: ${site.url}/terms

Developer program:
- Builders can create adapters, Manifestation Packs, trace tooling, local/VPS runtime integrations, benchmark flows and documentation.
- Engines are scoped capabilities, not owners of the whole user context.

Creator program:
- Creators can turn repeatable expertise into systems people can run.
- The first story is empowerment and audience outcomes, not monetization.

Newsletter:
- The site includes a GDPR-aware newsletter form with Double Opt-In.
- Resend is prepared as the backend via RESEND_API_KEY plus optional segment/topic IDs.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
