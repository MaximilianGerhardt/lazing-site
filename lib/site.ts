import type { Metadata } from "next";

export const site = {
  name: "Lazing",
  title: "Lazing - Intention Into Living Systems",
  description:
    "Lazing is an adaptive command center where you describe an intention and the right working system appears around it.",
  url: "https://laz.ing",
  creator: "Maximilian Gerhardt",
  repo: "https://github.com/MaximilianGerhardt/lazing",
  siteRepo: "https://github.com/MaximilianGerhardt/lazing-site",
  keywords: [
    "local-first AI command center",
    "open source AI workspace",
    "Manifestation Layer",
    "intent-driven interface",
    "self-hosted AI runtime",
    "AI agent command center",
    "Codex Claude Code Ollama",
    "mobile-first AI interface",
    "scoped AI memory",
    "GDPR AI tool",
  ],
};

export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    keywords: site.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/og",
          width: 1200,
          height: 630,
          alt: "Lazing turns intention into living systems.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og"],
    },
  };
}

export const faqItems = [
  {
    question: "What is Lazing?",
    answer:
      "Lazing is an adaptive command center. You describe what you want to achieve, and Lazing forms the right working system around it: a plan, decision, tracker, workflow, workspace, document, or traceable resolution.",
  },
  {
    question: "Is Lazing open source?",
    answer:
      "Yes. Lazing is planned as an open source runtime and public standard direction, with the website serving as the public home for users, builders, creators, and community.",
  },
  {
    question: "Does Lazing require Codex or Claude Code?",
    answer:
      "No. Lazing is designed to connect to engines such as Codex, Claude Code, Ollama, OpenAI-compatible adapters, and local agents when you choose to enable them.",
  },
  {
    question: "Can I use Ollama locally?",
    answer:
      "Yes. Ollama is part of the local-first adapter direction, so builders can run local models while keeping scope and trace inside their own runtime.",
  },
  {
    question: "Where does my data live?",
    answer:
      "Lazing is designed for local or VPS operation. The host runtime keeps authority over credentials, scoped memory, adapter capabilities, and trace data.",
  },
  {
    question: "What is the Manifestation Layer?",
    answer:
      "The Manifestation Layer is the concept behind turning intent into useful work surfaces. A response can become a plan, decision card, tracker, review panel, workspace, routine, or trace instead of remaining only text.",
  },
  {
    question: "What are Manifestation Packs?",
    answer:
      "Manifestation Packs combine reusable expertise, required data, risks, confirmations, and quality logic so an intention can become an executable working system.",
  },
  {
    question: "Is this a chatbot?",
    answer:
      "No. Chat can be one input surface, but Lazing focuses on forming scoped systems and adaptive interfaces around the work.",
  },
  {
    question: "Can creators build on it?",
    answer:
      "Yes. Lazing is designed so creators can turn repeatable expertise into skills, SOPs, routines, lenses, templates, and expert tracks that others can run.",
  },
];
