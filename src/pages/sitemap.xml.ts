import type { APIRoute } from "astro";

const pages = [
  "/",
  "/apps/",
  "/request-app/",
  "/aitoearn-one-click-deploy/",
  "/mcp-ai-publishing/",
  "/deployment-service/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>https://aipubkit.com${path}</loc>
    <changefreq>${path === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
