import type { APIRoute } from "astro";
import { sourceApps } from "../data/sourceApps";

const siteUrl = "https://aipubkit.com";

export const GET: APIRoute = () => {
  const body = {
    schemaVersion: "1.0",
    name: "AI PubKit source app registry",
    url: `${siteUrl}/source-apps.json`,
    homepage: `${siteUrl}/source-apps/`,
    purpose:
      "Machine-readable source app coverage for AI publishing handoff, SEO, GEO, and customer workflow answers.",
    sourceApps: sourceApps.map((app) => ({
      name: app.name,
      slug: app.slug,
      url: `${siteUrl}/source-apps/${app.slug}/`,
      category: app.category,
      region: app.region,
      sourceType: app.sourceType,
      creates: app.creates,
      customerProblem: app.customerProblem,
      handoffFields: app.handoffFields,
      aiPubKitOutputs: app.aiPubKitOutputs,
      destinations: app.destinations.map((destination) => ({
        app: destination.app,
        status: destination.status,
        useCase: destination.useCase,
      })),
      keywords: app.keywords,
      officialSources: app.officialSources,
      examplePackage: app.examplePackage,
      faqs: app.faqs,
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
