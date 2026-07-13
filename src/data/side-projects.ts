import type { SideProject } from "@/components/home-dashboard/side-projects/side-projects.types";

export const sideProjects: SideProject[] = [
  {
    slug: "inverte-o-jogo",
    title: "Inverte o Jogo",
    cardDescription:
      "AI-powered MVP that turns personal photos into World Cup stickers — designed, built, and shipped in a few days.",
    summary:
      "I built an AI sticker generator for the 2026 World Cup. Upload a photo, pay, and get a personalized sticker by email — shipped in a few days as a real MVP.",
    motivation:
      "I started making stickers for friends with ChatGPT and realized it could be a product. Wanted to validate the idea fast, not overbuild a platform.",
    websiteUrl: "https://inverteojogo.com.br",
    coverSrc: "/side-projects/inverteojogo.png",
    technologies: [
      "Node.js",
      "Fastify",
      "OpenAI GPT Image",
      "AbacatePay",
      "REST APIs",
      "Email delivery",
    ],
    contributions: [
      "Shaped the product idea and MVP scope",
      "Designed the full user flow",
      "Built the backend and APIs",
      "Integrated OpenAI image generation",
      "Wired AbacatePay and email delivery",
    ],
    features: [
      "Photo upload for sticker generation",
      "AI-generated World Cup stickers",
      "Checkout with AbacatePay",
      "Email delivery of final assets",
      "Production deploy with a lean stack",
    ],
    fundamentals: [
      "Ship an MVP before building a full platform",
      "Prefer simple delivery (email) over auth and dashboards",
      "Validate with real payments and real users",
    ],
  },
  {
    slug: "portfolio-ai",
    title: "vigads ai",
    cardDescription:
      "An AI-powered portfolio assistant using RAG, local models, and semantic search over a personal knowledge base.",
    summary:
      "This site isn’t a static resume. You can ask about my experience, skills, and projects — answers come from a RAG pipeline over my own knowledge base.",
    motivation:
      "I wanted one project that mixes frontend craft with AI engineering. Building my own assistant was the best way to learn RAG for real.",
    websiteUrl: "/",
    coverSrc: "/side-projects/vigads-ai-website.png",
    technologies: [
      "Node.js",
      "Fastify",
      "Ollama",
      "LangChain",
      "Neo4j",
      "RAG",
      "Qwen 3",
    ],
    contributions: [
      "Designed the RAG architecture end to end",
      "Built the Fastify chat API with streaming",
      "Set up Neo4j vector search and embeddings",
      "Integrated LangChain and local Ollama models",
      "Created the Markdown knowledge ingestion pipeline",
    ],
    features: [
      "Chat assistant about my career and work",
      "Semantic search over a personal knowledge base",
      "Local LLM inference with Ollama",
      "Streaming responses in the UI",
      "Semantic cache for repeated questions",
    ],
    fundamentals: [
      "Retrieve before generate — ground answers in real context",
      "Keep models local when privacy and cost matter",
      "Treat the knowledge base as a product surface, not a dump",
    ],
  },
];

export function getSideProjects(): SideProject[] {
  return sideProjects;
}

export function getSideProjectBySlug(slug: string): SideProject | undefined {
  return sideProjects.find((project) => project.slug === slug);
}

export function getSideProjectSlugs(): string[] {
  return sideProjects.map((project) => project.slug);
}
