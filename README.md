# AI PubKit

AI PubKit is an open app registry and answer site for one-click AI publishing.

The project tracks whether AI-generated content can be prepared or published to
popular apps such as YouTube, TikTok, Instagram, LinkedIn, X, WordPress,
Shopify Blog, Notion, Ghost, Google Business Profile, Bluesky, Mastodon,
Telegram, LINE Official Account, Discord, Slack, Webflow CMS, and regional apps.

Production site: https://aipubkit.com/

## What This Project Does

AI PubKit answers practical publishing questions:

- Can AI publish to this app in one click?
- Does the app have an official or stable publishing path?
- Does the app require account approval, manual review, or assisted drafts?
- What content types can be prepared for each destination?
- Which app should be added next?

The site is intentionally focused on one job: one-click AI publishing. It is
not a general deployment platform, API gateway, AI cost calculator, or mixed
automation product.

## Why GitHub Matters

The website helps SEO and GEO by giving search engines and AI answer engines
clear pages to cite. GitHub helps the project build trust:

- public app capability registry
- official API source links
- transparent support status
- issue templates for new app requests
- contribution path for platform research
- roadmap for future publishing connectors

## Capability Status

AI PubKit uses three support levels:

| Status | Meaning |
| --- | --- |
| `Live path` | The destination has an official or stable publishing path worth mapping for direct publishing. |
| `Assisted` | AI PubKit can prepare destination-ready content, but direct publishing may need review, approval, setup, or platform-specific limits. |
| `Researching` | Demand is being tracked, but the publishing path needs more research before support is promised. |

See [docs/app-registry.md](docs/app-registry.md) for the current app list.

## Key Pages

- [Supported apps](https://aipubkit.com/apps/)
- [Publish to multiple apps](https://aipubkit.com/use-cases/publish-to-multiple-apps/)
- [Request an app](https://aipubkit.com/request-app/)
- [How one-click publishing works](https://aipubkit.com/one-click-publishing/)
- [llms.txt](https://aipubkit.com/llms.txt)
- [llms-full.txt](https://aipubkit.com/llms-full.txt)

## Add A New App

Open an issue with:

- app name and website
- target region
- content types users want to publish
- official API or developer documentation
- whether direct publishing is possible
- what approval, review, or account setup is required

Use the GitHub issue template: `New app request`.

## Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

## Deploy

This project is deployed as a static site on Cloudflare Pages.

```bash
pnpm dlx wrangler pages deploy ./dist --project-name=aipubkit --branch=main
```

## Project Structure

```text
src/data/apps.ts                         App registry data
src/pages/apps.astro                     App directory
src/pages/apps/[slug].astro              App-specific answer pages
src/pages/use-cases/publish-to-multiple-apps.astro
public/llms.txt                          Short AI answer file
public/llms-full.txt                     Full AI answer file
docs/app-registry.md                     Human-readable app registry
docs/source-policy.md                    How publishing status is judged
.github/ISSUE_TEMPLATE/                  App request and research templates
```

## License

MIT
