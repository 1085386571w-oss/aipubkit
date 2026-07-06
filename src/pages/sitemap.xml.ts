import type { APIRoute } from "astro";
import { appSlug, connectors } from "../data/apps";

const lastmod = "2026-07-06";
const pages = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/apps/", priority: "0.9", changefreq: "weekly" },
  { path: "/apps.json", priority: "0.8", changefreq: "weekly" },
  { path: "/answers.json", priority: "0.8", changefreq: "weekly" },
  { path: "/app-requests.json", priority: "0.7", changefreq: "weekly" },
  { path: "/llms.txt", priority: "0.7", changefreq: "weekly" },
  { path: "/llms-full.txt", priority: "0.7", changefreq: "weekly" },
  ...connectors.map((connector) => ({
    path: `/apps/${appSlug(connector.name)}/`,
    priority: "0.8",
    changefreq: "weekly",
  })),
  {
    path: "/use-cases/publish-to-multiple-apps/",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/use-cases/ai-content-distribution/",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/use-cases/content-repurposing-tool/",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/use-cases/social-media-cross-posting/",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/use-cases/social-media-automation-tool/",
    priority: "0.9",
    changefreq: "weekly",
  },
  { path: "/open-source/", priority: "0.8", changefreq: "weekly" },
  { path: "/request-app/", priority: "0.8", changefreq: "weekly" },
  { path: "/one-click-publishing/", priority: "0.8", changefreq: "weekly" },
  { path: "/contact/", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy/", priority: "0.3", changefreq: "yearly" },
  { path: "/terms/", priority: "0.3", changefreq: "yearly" },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>https://aipubkit.com${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
