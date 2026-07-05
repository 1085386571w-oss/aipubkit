# AI PubKit Deployment

Production project:

- Cloudflare Pages project: `aipubkit`
- Temporary Pages URL: `https://aipubkit.pages.dev/`
- Current custom domains created in Cloudflare Pages:
  - `aipubkit.com`
  - `www.aipubkit.com`

## Build

```bash
pnpm install
pnpm run build
```

## Deploy

```bash
pnpm dlx wrangler pages deploy ./dist --project-name=aipubkit --branch=main
```

## DNS Records Still Needed

Add these records in the domain registrar DNS panel:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `@` | `aipubkit.pages.dev` |
| CNAME | `www` | `aipubkit.pages.dev` |

If the registrar does not allow a CNAME at `@`, move DNS hosting to Cloudflare
or use a DNS provider that supports CNAME flattening/ALIAS/ANAME at the root.

After DNS propagates, Cloudflare Pages should automatically finish certificate
validation and activate:

- `https://aipubkit.com/`
- `https://www.aipubkit.com/`

## SEO/GEO Files

- `https://aipubkit.com/sitemap.xml`
- `https://aipubkit.com/robots.txt`
- `https://aipubkit.com/llms.txt`
- `https://aipubkit.com/llms-full.txt`
