# Indexing and Growth Runbook

Last updated: 2026-07-06

## Current Indexing Setup

- Production site: https://aipubkit.com/
- Sitemap: https://aipubkit.com/sitemap.xml
- Robots: https://aipubkit.com/robots.txt
- AI answer map: https://aipubkit.com/answers.json
- Tool registry: https://aipubkit.com/tools.json
- LLM files: https://aipubkit.com/llms.txt and https://aipubkit.com/llms-full.txt
- IndexNow key file: https://aipubkit.com/d5efc19a72392815f9582565de0435d3.txt

## IndexNow

AI PubKit uses IndexNow to notify participating search engines when URLs change.

Run after deployment:

```bash
pnpm run submit:indexnow
```

The script fetches the live sitemap, extracts every `https://aipubkit.com/...`
URL, and submits the set to `https://api.indexnow.org/indexnow` with the hosted
key file.

Expected success:

- HTTP `200`: URL set received.
- HTTP `202`: URL set received and key validation pending.

IndexNow submission does not guarantee ranking or indexing. It only tells
participating search engines that the URLs are ready to crawl.

## Manual Webmaster Steps

These require account access and should be done in the browser:

1. Google Search Console
   - Add property: `https://aipubkit.com/`
   - Verify with DNS or HTML file.
   - Submit sitemap: `https://aipubkit.com/sitemap.xml`
   - Inspect the homepage and several new pages.
2. Bing Webmaster Tools
   - Add property: `https://aipubkit.com/`
   - Submit sitemap: `https://aipubkit.com/sitemap.xml`
   - Open IndexNow reports after submission.
3. Ahrefs
   - Create or refresh Site Audit for `aipubkit.com`.
   - Check internal link depth, indexability, duplicate titles, and missing descriptions.

## First External Link Seeds

Use these only where useful and relevant:

- GitHub repository README and topics.
- GitHub issues for app requests and platform research.
- Product Hunt or indie maker listing when a product demo is ready.
- Relevant Reddit or community answers where people ask about AI cross-posting,
  content repurposing, app publishing APIs, or multi-platform publishing.
- Small comparison mentions from personal blog posts or partner pages.

## Weekly Checks

- Confirm `sitemap.xml` URL count after each content batch.
- Run `pnpm run build`.
- Run `pnpm run submit:indexnow` after deployment.
- Check Bing IndexNow report, Search Console indexing, and Ahrefs Site Audit.
- Add 5 to 10 high-intent pages only after the current cluster starts getting impressions.
