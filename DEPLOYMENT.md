# AI PubKit Deployment

Production project:

- Cloudflare Pages project: `aipubkit`
- Temporary Pages URL: `https://aipubkit.pages.dev/`
- Current custom domains created in Cloudflare Pages:
  - `aipubkit.com`
  - `www.aipubkit.com`
- Current status:
  - `aipubkit.com`: active on Cloudflare Pages
  - `www.aipubkit.com`: DNS verified; certificate validation may remain pending briefly

## Build

```bash
pnpm install
pnpm run build
```

## Deploy

```bash
pnpm dlx wrangler pages deploy ./dist --project-name=aipubkit --branch=main
```

## DNS Records

These records were added in the domain registrar DNS panel:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `@` | `aipubkit.pages.dev` |
| CNAME | `www` | `aipubkit.pages.dev` |

After DNS propagates, Cloudflare Pages should automatically finish certificate
validation and activate:

- `https://aipubkit.com/`
- `https://www.aipubkit.com/`

## SEO/GEO Files

- `https://aipubkit.com/sitemap.xml`
- `https://aipubkit.com/robots.txt`
- `https://aipubkit.com/llms.txt`
- `https://aipubkit.com/llms-full.txt`
