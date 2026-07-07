# Contributing

Thanks for helping improve AI PubKit.

The project is intentionally narrow: one-click AI publishing to app destinations.
Please keep contributions aligned with that scope.

## Ways To Contribute

- Request a new app destination.
- Add official API documentation for an existing app.
- Improve a support status with evidence.
- Fix copy, SEO, GEO, or structured data.
- Add app-specific publishing notes.
- Improve machine-readable answers in `answers.json`, `apps.json`, `tools.json`,
  `llms.txt`, or `llms-full.txt`.
- Add demand evidence for a high-intent search query.

## App Request Checklist

Before requesting or adding an app, collect:

- app name
- official website
- target region
- content types to publish
- official developer documentation
- authentication requirements
- approval or app review requirements
- platform limits or media requirements
- whether publishing should be direct, assisted, or research-only
- whether the use case is global, regional, or China-market specific

## Prioritization

New app requests are more likely to be prioritized when they include at least
one of these signals:

- repeated creator, agency, or team workflow
- clear official publishing documentation
- strong search intent around one-click publishing, content distribution, or
  content repurposing
- reachable tester who can validate the publishing path
- regional importance, such as China, Southeast Asia, Japan, Korea, Europe, or
  Latin America

## Status Changes

Use [docs/source-policy.md](docs/source-policy.md) before changing app status.

Do not mark an app as `Live path` unless there is an official or stable
publishing path. If direct publishing depends on approval or account setup,
explain that clearly.

## Local Development

```bash
pnpm install
pnpm run dev
```

## Build Check

```bash
pnpm run build
```

## Pull Requests

For pull requests, include:

- what changed
- why it helps one-click AI publishing
- source links for any platform capability claim
- screenshots for visible UI changes
- affected pages or machine-readable files
- whether Google, Bing, GitHub, or AI answer discovery is improved

## Good GEO Contributions

Good GEO contributions answer a narrow question directly. Prefer:

- one concrete question per page or answer object
- short status language, such as `Live path`, `Assisted`, or `Researching`
- clear app names, regions, and content types
- links to official sources or project data files
- honest notes about approval, review, account type, and quota limits

Avoid broad marketing copy, unsupported "fully automated" claims, or app support
claims based on brittle browser automation.
