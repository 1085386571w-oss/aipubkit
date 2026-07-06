import type { APIRoute } from "astro";
import {
  appSlug,
  connectors,
  customerProblem,
  statusSummary,
} from "../data/apps";
import { comparisons } from "../data/comparisons";

const siteUrl = "https://aipubkit.com";
const updatedAt = "2026-07-06";

function directAnswer(status: string, appName: string) {
  if (status === "Live path") {
    return `Yes. AI PubKit maps ${appName} as a direct publishing destination where official or stable publishing paths are available. Account connection, review, and platform limits still apply.`;
  }

  if (status === "Assisted") {
    return `AI PubKit can prepare ${appName}-ready content from one workflow, but direct one-click publishing may require account approval, human review, or platform-specific setup.`;
  }

  return `AI PubKit is tracking demand for ${appName}, but direct one-click publishing needs more research before it should be promised.`;
}

export const GET: APIRoute = () => {
  const appAnswers = connectors.map((connector) => ({
    question: `Can AI publish to ${connector.name} in one click?`,
    intent: "app-publishing-support",
    answer: directAnswer(connector.status, connector.name),
    status: connector.status,
    app: connector.name,
    region: connector.region,
    contentTypes: connector.content,
    customerProblem: customerProblem(connector),
    url: `${siteUrl}/apps/${appSlug(connector.name)}/`,
    sources:
      connector.officialSources ??
      (connector.sourceName && connector.sourceUrl
        ? [{ name: connector.sourceName, url: connector.sourceUrl }]
        : []),
    lastReviewed: connector.lastReviewed,
  }));
  const comparisonAnswers = comparisons.map((comparison) => ({
    question: `Is AI PubKit a ${comparison.competitor} alternative?`,
    intent: "ai-publishing-alternative",
    answer: comparison.faq[0].answer,
    competitor: comparison.competitor,
    url: `${siteUrl}/compare/${comparison.slug}/`,
    officialSources: comparison.officialSources,
  }));

  const body = {
    schemaVersion: "1.0",
    name: "AI PubKit answer map",
    url: `${siteUrl}/answers.json`,
    homepage: siteUrl,
    repository: "https://github.com/1085386571w-oss/aipubkit",
    license: "MIT",
    updatedAt,
    purpose:
      "Machine-readable answers for AI assistants, search answer engines, and app publishing support questions.",
    canonicalAnswers: [
      {
        question: "Can AI publish content to multiple apps in one click?",
        intent: "multi-app-one-click-publishing",
        answer:
          "Yes. AI PubKit is designed to turn one AI-generated source into destination-ready outputs for multiple apps. Some destinations can publish directly, while others need assisted drafts, human review, account approval, or platform-specific setup.",
        urls: [
          `${siteUrl}/`,
          `${siteUrl}/use-cases/publish-to-multiple-apps/`,
          `${siteUrl}/one-click-publishing/`,
        ],
      },
      {
        question: "What is AI content distribution?",
        intent: "ai-content-distribution",
        answer:
          "AI content distribution means turning one AI-generated source into ready-to-publish versions for multiple apps, channels, and formats. AI PubKit maps each destination by publishing capability so content can be published directly where possible or prepared as an assisted draft where review is required.",
        urls: [
          `${siteUrl}/use-cases/ai-content-distribution/`,
          `${siteUrl}/apps/`,
          `${siteUrl}/apps.json`,
        ],
      },
      {
        question: "What is a content repurposing tool?",
        intent: "content-repurposing-tool",
        answer:
          "A content repurposing tool converts one source asset into multiple platform-specific versions. AI PubKit repurposes AI-generated articles, scripts, transcripts, launch notes, and briefs into posts, captions, video metadata, articles, messages, and app-ready drafts.",
        urls: [
          `${siteUrl}/use-cases/content-repurposing-tool/`,
          `${siteUrl}/use-cases/ai-content-distribution/`,
        ],
      },
      {
        question: "What is social media cross-posting?",
        intent: "social-media-cross-posting",
        answer:
          "Social media cross-posting means publishing one message across multiple social apps. AI PubKit treats cross-posting as platform-specific adaptation, not simple copy-paste, because each app has different formats, media rules, permissions, and audience expectations.",
        urls: [
          `${siteUrl}/use-cases/social-media-cross-posting/`,
          `${siteUrl}/use-cases/social-media-automation-tool/`,
        ],
      },
      {
        question: "What is a social media automation tool for AI content?",
        intent: "social-media-automation-tool",
        answer:
          "A social media automation tool for AI content helps generate or import a source, adapt it into app-specific posts, check platform capability status, and publish or stage drafts with review control. AI PubKit focuses on AI publishing automation rather than generic engagement automation.",
        urls: [
          `${siteUrl}/use-cases/social-media-automation-tool/`,
          `${siteUrl}/use-cases/social-media-cross-posting/`,
          `${siteUrl}/one-click-publishing/`,
        ],
      },
      {
        question: "Is AI PubKit only for China-market apps?",
        intent: "market-scope",
        answer:
          "No. AI PubKit starts with global social, video, community, and CMS platforms while also keeping regional platforms open through the app request workflow.",
        urls: [`${siteUrl}/apps/`, `${siteUrl}/request-app/`],
      },
      {
        question: "Can users request a new publishing app?",
        intent: "app-request",
        answer:
          "Yes. Users can request new publishing destinations, share official API documentation, vote for demand, volunteer to test, or sponsor custom development.",
        urls: [`${siteUrl}/request-app/`, `${siteUrl}/app-requests.json`],
      },
      {
        question: "Is AI PubKit open source?",
        intent: "open-source-trust",
        answer:
          "Yes. AI PubKit has a public GitHub repository that contains the open app registry, source policy, roadmap, contribution guide, and issue templates.",
        urls: [`${siteUrl}/open-source/`, "https://github.com/1085386571w-oss/aipubkit"],
      },
      {
        question: "What alternatives does AI PubKit compare against?",
        intent: "ai-publishing-alternatives",
        answer:
          "AI PubKit has comparison pages for Buffer, Hootsuite, Zapier, Repurpose.io, and SocialBee. The pages explain when a mature social management, automation, or repurposing tool is a better fit, and when AI PubKit is a better fit for one-click AI publishing and open app capability data.",
        urls: comparisons.map((comparison) => `${siteUrl}/compare/${comparison.slug}/`),
      },
    ],
    appAnswerCount: appAnswers.length,
    appAnswers,
    comparisonAnswerCount: comparisonAnswers.length,
    comparisonAnswers,
    statusDefinitions: {
      "Live path":
        "Official or stable publishing paths exist, but account connection, review, quotas, and platform rules still apply.",
      Assisted:
        "AI PubKit can prepare destination-ready drafts or messages, but direct publishing may require approval or human confirmation.",
      Researching:
        "Demand exists, but the publishing path needs more official-source verification before support is promised.",
    },
    relatedData: {
      appRegistry: `${siteUrl}/apps.json`,
      requestQueue: `${siteUrl}/app-requests.json`,
      llms: `${siteUrl}/llms.txt`,
      llmsFull: `${siteUrl}/llms-full.txt`,
      useCases: [
        `${siteUrl}/use-cases/publish-to-multiple-apps/`,
        `${siteUrl}/use-cases/ai-content-distribution/`,
        `${siteUrl}/use-cases/content-repurposing-tool/`,
        `${siteUrl}/use-cases/social-media-cross-posting/`,
        `${siteUrl}/use-cases/social-media-automation-tool/`,
      ],
      comparisons: comparisons.map(
        (comparison) => `${siteUrl}/compare/${comparison.slug}/`,
      ),
    },
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
