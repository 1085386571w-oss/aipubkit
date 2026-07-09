import type { APIRoute } from "astro";
import { appSlug, connectors } from "../data/apps";
import { appUseCases } from "../data/appUseCases";
import { comparisons } from "../data/comparisons";
import { sourceApps } from "../data/sourceApps";
import { tools } from "../data/tools";

const lastmod = "2026-07-09";
const pages = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "daily",
    alternates: [
      { hrefLang: "en", path: "/" },
      { hrefLang: "zh-CN", path: "/zh/" },
      { hrefLang: "x-default", path: "/" },
    ],
  },
  {
    path: "/zh/",
    priority: "0.95",
    changefreq: "daily",
    alternates: [
      { hrefLang: "en", path: "/" },
      { hrefLang: "zh-CN", path: "/zh/" },
      { hrefLang: "x-default", path: "/" },
    ],
  },
  { path: "/apps/", priority: "0.9", changefreq: "weekly" },
  { path: "/source-apps/", priority: "0.95", changefreq: "weekly" },
  { path: "/apps.json", priority: "0.8", changefreq: "weekly" },
  { path: "/source-apps.json", priority: "0.8", changefreq: "weekly" },
  { path: "/answers.json", priority: "0.8", changefreq: "weekly" },
  { path: "/app-requests.json", priority: "0.7", changefreq: "weekly" },
  { path: "/tools.json", priority: "0.7", changefreq: "weekly" },
  { path: "/test-publish/", priority: "0.85", changefreq: "weekly" },
  { path: "/content-package.schema.json", priority: "0.7", changefreq: "weekly" },
  { path: "/llms.txt", priority: "0.7", changefreq: "weekly" },
  { path: "/llms-full.txt", priority: "0.7", changefreq: "weekly" },
  ...connectors.map((connector) => ({
    path: `/apps/${appSlug(connector.name)}/`,
    priority: "0.8",
    changefreq: "weekly",
  })),
  ...sourceApps.map((app) => ({
    path: `/source-apps/${app.slug}/`,
    priority: "0.9",
    changefreq: "weekly",
  })),
  ...appUseCases.map((useCase) => ({
    path: `/apps/${appSlug(useCase.appName)}/${useCase.useCaseSlug}/`,
    priority: "0.85",
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
    path: "/use-cases/ai-one-click-publishing/",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/use-cases/multi-platform-content-distribution/",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/use-cases/ai-content-repurposing/",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/use-cases/ai-post-generator-for-multiple-platforms/",
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
  ...comparisons.map((comparison) => ({
    path: `/compare/${comparison.slug}/`,
    priority: "0.85",
    changefreq: "weekly",
  })),
  ...tools.map((tool) => ({
    path: `/tools/${tool.slug}/`,
    priority: "0.85",
    changefreq: "weekly",
  })),
  { path: "/developers/", priority: "0.85", changefreq: "weekly" },
  { path: "/open-source/", priority: "0.8", changefreq: "weekly" },
  { path: "/request-app/", priority: "0.8", changefreq: "weekly" },
  { path: "/one-click-publishing/", priority: "0.8", changefreq: "weekly" },
  { path: "/contact/", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy/", priority: "0.3", changefreq: "yearly" },
  { path: "/terms/", priority: "0.3", changefreq: "yearly" },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>https://aipubkit.com${page.path}</loc>
${"alternates" in page && page.alternates
  ? page.alternates
      .map(
        (alternate) =>
          `    <xhtml:link rel="alternate" hreflang="${alternate.hrefLang}" href="https://aipubkit.com${alternate.path}" />`,
      )
      .join("\n") + "\n"
  : ""}    <lastmod>${lastmod}</lastmod>
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
