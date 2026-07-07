import type { APIRoute } from "astro";

const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://aipubkit.com/content-package.schema.json",
  title: "AI PubKit content package",
  description:
    "Draft schema for handing generated content from an AI source app to AI PubKit publishing workflows.",
  type: "object",
  required: ["schemaVersion", "sourceApp", "sourceContent", "destinations"],
  properties: {
    schemaVersion: {
      type: "string",
      enum: ["0.1"],
      description: "Content package schema version.",
    },
    sourceApp: {
      type: "object",
      required: ["name", "contentType"],
      properties: {
        name: {
          type: "string",
          description: "Name of the source app creating the content.",
        },
        website: {
          type: "string",
          format: "uri",
          description: "Public website or developer documentation for the app.",
        },
        contentType: {
          type: "string",
          enum: [
            "ai-image",
            "ai-video",
            "ai-writing",
            "ai-design",
            "ai-audio",
            "ai-agent",
            "mixed",
          ],
        },
      },
      additionalProperties: false,
    },
    sourceContent: {
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string" },
        prompt: { type: "string" },
        caption: { type: "string" },
        description: { type: "string" },
        language: { type: "string" },
        campaign: { type: "string" },
        brandVoice: { type: "string" },
        assets: {
          type: "array",
          items: {
            type: "object",
            required: ["type", "url"],
            properties: {
              type: {
                type: "string",
                enum: ["image", "video", "audio", "document", "text"],
              },
              url: {
                type: "string",
                format: "uri",
                description:
                  "Stable asset URL or storage reference available to the publishing workflow.",
              },
              format: { type: "string" },
              purpose: {
                type: "string",
                enum: ["primary", "cover", "thumbnail", "source", "attachment"],
              },
              aspectRatio: { type: "string" },
              durationSeconds: { type: "number" },
              altText: { type: "string" },
            },
            additionalProperties: false,
          },
        },
      },
      additionalProperties: false,
    },
    destinations: {
      type: "array",
      minItems: 1,
      items: {
        type: "string",
        description:
          "Destination app name, matching AI PubKit app registry names where possible.",
      },
    },
    requestedOutput: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "platform captions",
          "video titles",
          "video descriptions",
          "hashtags",
          "article draft",
          "community message",
          "thumbnail notes",
          "review checklist",
          "direct publish",
          "assisted draft",
        ],
      },
    },
    callbackUrl: {
      type: "string",
      format: "uri",
      description:
        "Optional partner callback URL for future workflow status updates.",
    },
    userReviewRequired: {
      type: "boolean",
      default: true,
      description:
        "Whether a human should review output before direct publishing.",
    },
  },
  additionalProperties: false,
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify(schema, null, 2), {
    headers: {
      "Content-Type": "application/schema+json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
