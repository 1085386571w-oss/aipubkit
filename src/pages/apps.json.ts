import type { APIRoute } from "astro";
import { appSlug, connectors } from "../data/apps";

const siteUrl = "https://aipubkit.com";

export const GET: APIRoute = () => {
  const body = {
    schemaVersion: "1.1",
    name: "AI PubKit app registry",
    url: `${siteUrl}/apps.json`,
    homepage: siteUrl,
    repository: "https://github.com/1085386571w-oss/aipubkit",
    license: "MIT",
    requestUrl: `${siteUrl}/request-app/`,
    updatedAt: "2026-07-05",
    count: connectors.length,
    statusCounts: {
      livePath: connectors.filter((connector) => connector.status === "Live path")
        .length,
      assisted: connectors.filter((connector) => connector.status === "Assisted")
        .length,
      researching: connectors.filter(
        (connector) => connector.status === "Researching",
      ).length,
    },
    apps: connectors.map((connector) => ({
      name: connector.name,
      slug: appSlug(connector.name),
      url: `${siteUrl}/apps/${appSlug(connector.name)}/`,
      category: connector.category,
      region: connector.region,
      status: connector.status,
      contentTypes: connector.content,
      notes: connector.notes,
      customerProblem: connector.userProblem,
      workflow: connector.workflow,
      limits: connector.limits,
      sources:
        connector.officialSources ??
        (connector.sourceName && connector.sourceUrl
          ? [{ name: connector.sourceName, url: connector.sourceUrl }]
          : []),
      githubIssueUrl: connector.githubIssueUrl,
      lastReviewed: connector.lastReviewed,
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
