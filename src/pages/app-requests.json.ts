import type { APIRoute } from "astro";
import { demandItems } from "../data/demand";

const siteUrl = "https://aipubkit.com";

export const GET: APIRoute = () => {
  const body = {
    name: "AI PubKit public app request queue",
    url: `${siteUrl}/app-requests.json`,
    homepage: siteUrl,
    repository: "https://github.com/1085386571w-oss/aipubkit",
    updatedAt: "2026-07-05",
    count: demandItems.length,
    requests: demandItems.map((item) => ({
      ...item,
      pageUrl: item.pageUrl ? new URL(item.pageUrl, siteUrl).toString() : undefined,
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
