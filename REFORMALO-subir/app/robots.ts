import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Rastreadores de buscadores con IA permitidos de forma explícita (GEO):
// queremos que ChatGPT, Claude, Perplexity o Gemini puedan citar la web.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
