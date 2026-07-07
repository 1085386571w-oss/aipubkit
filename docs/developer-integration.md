# AI PubKit Developer Integration

Last reviewed: 2026-07-07

This document describes the current source-app integration path for AI image,
video, writing, design, audio, and agent products.

## Customer Scenario

A user creates an image, short video, article, transcript, script, or design in
an AI app. After generation, they want to send that output to destinations such
as TikTok, YouTube Shorts, Instagram, LinkedIn, WordPress, Telegram, or Slack
without manually rewriting every version.

## Current Public Path

AI PubKit does not yet expose a production ingestion API. The current public
path is:

1. Choose the source app and source content type in the browser composer.
2. Choose the handoff mode: copy package, stable media URL, webhook/API
   request, or manual upload after review.
3. Create an AI PubKit content package.
4. Check destination support in `apps.json`.
5. Generate or preview a publishing package in the browser composer.
6. Submit a source-app integration request through the website or GitHub.
7. Use AI PubKit's destination model to create direct publishing paths or
   assisted drafts.

The live composer is:

https://aipubkit.com/tools/ai-publishing-composer/

## Content Package

The draft JSON Schema is published at:

https://aipubkit.com/content-package.schema.json

Minimum package fields:

- `schemaVersion`
- `sourceApp.name`
- `sourceApp.contentType`
- `sourceContent.title`
- `sourceContent.assets`
- `destinations`
- `requestedOutput`

## Expected Product Flow

1. Source app generates content.
2. Source app sends source context, prompt, media URL when available, content
   type, destination choices, and requested outputs.
3. AI PubKit prepares a content package.
4. AI PubKit maps destinations to `Live path`, `Assisted`, or `Researching`.
5. AI PubKit creates app-ready outputs: captions, titles, descriptions,
   hashtags, cover text, alt text, CMS notes, media checks, and review status.
6. User reviews output.
7. Direct publishing or assisted draft creation happens by destination.

## Source App Handoff Examples

| Source app type | What AI PubKit needs | Customer result |
| --- | --- | --- |
| Writing app | title, prompt, draft, campaign, audience, destination list | platform-specific posts, CMS notes, community messages |
| Design app | image/design URL, visible text, prompt, brand notes, target apps | captions, alt text, cover text, visual review checks |
| Video app | video URL, transcript, aspect ratio, duration, cover frame notes | TikTok captions, YouTube metadata, Shorts notes, safe-zone checks |
| Audio/transcript app | transcript, audio/video URL, speaker context, summary | article drafts, social posts, YouTube descriptions |
| Media generator | image/video URL, prompt, rights notes, campaign context | publishing copy around the asset and destination checks |

## Generation Boundary

AI PubKit should generate the publishing layer first. It can create platform
copy and metadata from a text idea, product update, article, transcript, image
context, or video context.

For images and videos, the preferred first integration is source-app handoff:
the source app generates the media and sends AI PubKit a stable URL plus prompt,
caption, context, destination list, and requested outputs. Native image or video
generation can be added later through external model APIs.

## Next Product Layer

The next product layer should add:

- Hosted composer URL for content package preview.
- Signed package submission.
- OAuth destination connections.
- Draft creation for low-risk destinations.
- Direct posting only where official platform rules allow it.
