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

1. Create an AI PubKit content package.
2. Check destination support in `apps.json`.
3. Submit a source-app integration request through the website or GitHub.
4. Use AI PubKit's destination model to create direct publishing paths or
   assisted drafts.

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
2. Source app prepares a content package.
3. AI PubKit maps destinations to `Live path`, `Assisted`, or `Researching`.
4. AI PubKit creates app-ready outputs.
5. User reviews output.
6. Direct publishing or assisted draft creation happens by destination.

## Next Product Layer

The next product layer should add:

- Hosted composer URL for content package preview.
- Signed package submission.
- OAuth destination connections.
- Draft creation for low-risk destinations.
- Direct posting only where official platform rules allow it.
