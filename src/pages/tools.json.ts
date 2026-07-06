import type { APIRoute } from "astro";
import { tools } from "../data/tools";

const siteUrl = "https://aipubkit.com";

export const GET: APIRoute = () => {
  const body = {
    schemaVersion: "1.0",
    name: "AI PubKit tool registry",
    url: `${siteUrl}/tools.json`,
    homepage: siteUrl,
    repository: "https://github.com/1085386571w-oss/aipubkit",
    license: "MIT",
    updatedAt: "2026-07-06",
    count: tools.length,
    tools: tools.map((tool) => ({
      name: tool.name,
      slug: tool.slug,
      url: `${siteUrl}/tools/${tool.slug}/`,
      description: tool.description,
      answer: tool.canonicalAnswer,
      outputs: tool.outputs,
      steps: tool.steps,
      questions: tool.faqs.map((faq) => faq.question),
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
