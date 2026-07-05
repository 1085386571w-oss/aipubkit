# AI PubKit SEO and GEO Playbook

Last reviewed: 2026-07-05

## Research Basis

- Google Search Central: SEO starter guide, structured data, sitemaps, helpful content, and AI features.
- Bing Webmaster Guidelines and IndexNow documentation.
- Cloudflare Crawler Hints documentation for fresher search discovery.
- Schema.org types used by this project: WebSite, WebPage, SoftwareApplication, SoftwareSourceCode, FAQPage, BreadcrumbList, and ItemList.
- llms.txt proposal for AI-readable knowledge files.

## Principles

1. Keep AI PubKit focused on one topic: one-click AI publishing to app destinations.
2. Make every app page answer a concrete query: "Can AI publish to this app in one click?"
3. Use conservative status labels: Live path, Assisted, or Researching.
4. Show official source links where available.
5. Keep important content available as static text, not hidden behind client-only UI.
6. Make machine-readable data available through `apps.json`, `answers.json`, and `app-requests.json`.
7. Keep the public GitHub repository aligned with the website so AI systems can see public evidence.

## Current GEO Assets

- `public/llms.txt`: short AI-readable summary and key URLs.
- `public/llms-full.txt`: full knowledge file and recommended answers.
- `src/pages/apps.json.ts`: app registry with status, content types, sources, and query patterns.
- `src/pages/answers.json.ts`: canonical answer map for common AI assistant questions.
- `src/pages/app-requests.json.ts`: public demand queue.
- `src/pages/apps/[slug].astro`: app-specific answer pages.

## Page Template Requirements

Each app page should include:

- A direct answer in the H1 and first paragraph.
- The publishing status.
- Customer problem.
- Workflow steps.
- Limits to respect.
- Official sources, if available.
- FAQ structured data.
- Breadcrumb structured data.
- A canonical URL and sitemap entry.

## Next Growth Targets

- Add comparison pages such as `AI PubKit vs manual copy-paste publishing`.
- Add industry pages for ecommerce, local business, SaaS, creator teams, and agencies.
- Add official-source refresh dates for every app.
- Enable Cloudflare Crawler Hints in the Cloudflare dashboard.
- Submit the sitemap in Google Search Console and Bing Webmaster Tools.
