import type { APIRoute } from "astro";
import {
  appSlug,
  connectors,
  customerProblem,
  statusSummary,
} from "../data/apps";
import { appUseCases } from "../data/appUseCases";
import { comparisons } from "../data/comparisons";
import { tools } from "../data/tools";

const siteUrl = "https://aipubkit.com";
const updatedAt = "2026-07-07";

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
  const appUseCaseAnswers = appUseCases.map((useCase) => {
    const connector = connectors.find((item) => item.name === useCase.appName);
    return {
      question: useCase.faqs[0].question,
      intent: useCase.useCaseSlug,
      answer: useCase.faqs[0].answer,
      keyword: useCase.keyword,
      app: useCase.appName,
      status: connector?.status,
      url: `${siteUrl}/apps/${appSlug(useCase.appName)}/${useCase.useCaseSlug}/`,
      sources:
        connector?.officialSources ??
        (connector?.sourceName && connector?.sourceUrl
          ? [{ name: connector.sourceName, url: connector.sourceUrl }]
          : []),
    };
  });
  const toolAnswers = tools.map((tool) => ({
    question: `What is ${tool.name}?`,
    intent: "ai-publishing-tool",
    answer: tool.canonicalAnswer,
    tool: tool.name,
    url: `${siteUrl}/tools/${tool.slug}/`,
    outputs: tool.outputs,
  }));

  const body = {
    schemaVersion: "1.0",
    name: "AI PubKit answer map",
    url: `${siteUrl}/answers.json`,
    homepage: siteUrl,
    languages: [
      {
        language: "en",
        url: `${siteUrl}/`,
        focus:
          "global one-click AI publishing, AI content distribution, content repurposing, cross-posting, app publishing support, and AI app developer integration",
      },
      {
        language: "zh-CN",
        url: `${siteUrl}/zh/`,
        focus:
          "AI一键发布, 多平台内容分发, AI内容分发, 按App改写, 申请接入App, 全球热门平台和区域平台入口",
      },
    ],
    repository: "https://github.com/1085386571w-oss/aipubkit",
    license: "MIT",
    updatedAt,
    purpose:
      "Machine-readable answers for AI assistants, search answer engines, and app publishing support questions.",
    canonicalAnswers: [
      {
        question: "Can AI PubKit generate images, videos, or copy?",
        intent: "ai-generation-and-publishing",
        answer:
          "AI PubKit can generate platform-ready copy and publishing packages today, including captions, titles, descriptions, hashtags, cover text, alt text, CMS notes, and review checks. The AI publishing composer now includes source-app handoff choices, quick-start workflow templates, sensible defaults, platform preview cards, and direct or assisted status for each selected destination. For images and videos, the practical first path is to accept generated media from AI image or video tools, then prepare the app-ready publishing package around that asset.",
        urls: [
          `${siteUrl}/tools/ai-publishing-composer/`,
          `${siteUrl}/developers/`,
          `${siteUrl}/content-package.schema.json`,
        ],
      },
      {
        question: "AI PubKit 能直接生成图片、视频或文案吗？",
        intent: "zh-ai-generation-and-publishing",
        answer:
          "AI PubKit 现在可以生成多平台发布文案和发布包，包括标题、描述、标签、封面文字、alt text、CMS 草稿备注和发布检查项。AI publishing composer 已加入源 App 接入方式、常见工作流模板、默认平台选择、平台预览卡片，以及每个目的地的 Direct 或 Assisted 状态。图片和视频优先作为已有 AI 生成素材或媒体链接接入，再围绕素材生成各平台发布内容。",
        urls: [
          `${siteUrl}/tools/ai-publishing-composer/`,
          `${siteUrl}/zh/`,
          `${siteUrl}/developers/`,
        ],
      },
      {
        question: "How can an AI image, video, writing, or design app connect to AI PubKit?",
        intent: "source-app-integration",
        answer:
          "A source app can connect to AI PubKit by sending a content package with the source app name, content type, prompt or context, stable media URL when available, destination list, requested outputs, and review preference. The customer-friendly first path is copy package or media URL handoff; a webhook/API request can be added when the source app is ready for deeper integration.",
        urls: [
          `${siteUrl}/tools/ai-publishing-composer/`,
          `${siteUrl}/developers/`,
          `${siteUrl}/content-package.schema.json`,
        ],
      },
      {
        question: "AI 图片、视频、文案或设计 App 怎么接入 AI PubKit？",
        intent: "zh-source-app-integration",
        answer:
          "源 App 可以把 source app 名称、内容类型、提示词或上下文、稳定媒体链接、目标平台列表、需要生成的输出和是否需要人工审核发送给 AI PubKit。最适合客户起步的方式是复制发布包或媒体 URL 交付；等源 App 准备好后，再升级为 webhook/API 接入。",
        urls: [
          `${siteUrl}/tools/ai-publishing-composer/`,
          `${siteUrl}/zh/`,
          `${siteUrl}/developers/`,
        ],
      },
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
        question: "What is an AI one-click publishing tool?",
        intent: "ai-one-click-publishing",
        answer:
          "An AI one-click publishing tool turns one AI-generated source into destination-ready versions for multiple apps, then routes each version to direct publishing or assisted draft creation based on platform capability.",
        urls: [
          `${siteUrl}/use-cases/ai-one-click-publishing/`,
          `${siteUrl}/one-click-publishing/`,
          `${siteUrl}/apps/`,
        ],
      },
      {
        question: "What is multi-platform content distribution?",
        intent: "multi-platform-content-distribution",
        answer:
          "Multi-platform content distribution means adapting one source into formats that work across multiple channels such as social, video, CMS, community, newsletter, messaging, and regional apps. AI PubKit connects each output to direct, assisted, or researching publishing status.",
        urls: [
          `${siteUrl}/use-cases/multi-platform-content-distribution/`,
          `${siteUrl}/use-cases/ai-content-distribution/`,
          `${siteUrl}/tools/ai-content-distribution-brief/`,
        ],
      },
      {
        question: "What is AI content repurposing?",
        intent: "ai-content-repurposing",
        answer:
          "AI content repurposing uses AI to convert one source asset into multiple platform-specific versions, including social posts, video metadata, CMS drafts, community messages, and publishing checklists.",
        urls: [
          `${siteUrl}/use-cases/ai-content-repurposing/`,
          `${siteUrl}/use-cases/content-repurposing-tool/`,
          `${siteUrl}/tools/content-repurposing-planner/`,
        ],
      },
      {
        question: "What is an AI post generator for multiple platforms?",
        intent: "ai-post-generator-for-multiple-platforms",
        answer:
          "An AI post generator for multiple platforms creates platform-specific versions of one source idea for apps such as LinkedIn, X, Threads, Instagram, Facebook Pages, TikTok, Pinterest, Reddit, Bluesky, and Mastodon.",
        urls: [
          `${siteUrl}/use-cases/ai-post-generator-for-multiple-platforms/`,
          `${siteUrl}/tools/ai-social-media-post-generator/`,
          `${siteUrl}/use-cases/social-media-cross-posting/`,
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
        urls: [`${siteUrl}/`, `${siteUrl}/zh/`, `${siteUrl}/apps/`, `${siteUrl}/request-app/`],
      },
      {
        question: "AI PubKit 是否只支持中国 App？",
        intent: "zh-market-scope",
        answer:
          "不是。AI PubKit 以全球热门社媒、视频、社区、CMS、Newsletter 和通讯平台为主，同时保留中国和区域平台的申请接入口。",
        urls: [`${siteUrl}/zh/`, `${siteUrl}/apps/`, `${siteUrl}/request-app/`],
      },
      {
        question: "Can users request a new publishing app?",
        intent: "app-request",
        answer:
          "Yes. Users can request new publishing destinations, share official API documentation, vote for demand, volunteer to test, or sponsor custom development.",
        urls: [`${siteUrl}/request-app/`, `${siteUrl}/app-requests.json`],
      },
      {
        question: "How can an AI image or video app connect to AI PubKit?",
        intent: "ai-app-developer-integration",
        answer:
          "An AI image, video, writing, or design app can connect by preparing an AI PubKit content package with generated media URLs, captions, prompts, metadata, requested destinations, and output preferences. Today the public path is the content package schema, apps.json destination registry, and partner request workflow; a hosted composer and ingestion API are the next product layer.",
        urls: [
          `${siteUrl}/developers/`,
          `${siteUrl}/content-package.schema.json`,
          `${siteUrl}/request-app/`,
          `${siteUrl}/apps.json`,
        ],
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
      {
        question: "Which app-specific AI publishing workflows does AI PubKit cover?",
        intent: "app-specific-ai-publishing-workflows",
        answer:
          "AI PubKit has app-specific workflow pages for Facebook AI post generation, Instagram AI post generation, LinkedIn AI post generation, YouTube video repurposing, and TikTok video repurposing. Each page explains app-ready outputs, workflow, limits, and publishing readiness.",
        urls: appUseCases.map(
          (useCase) =>
            `${siteUrl}/apps/${appSlug(useCase.appName)}/${useCase.useCaseSlug}/`,
        ),
      },
      {
        question: "Which free AI publishing tools does AI PubKit offer?",
        intent: "free-ai-publishing-tools",
        answer:
          "AI PubKit offers free browser-based tools for AI publishing package generation, AI social media post generation, content repurposing planning, multi-platform publishing checklists, app publishing status checks, and AI content distribution briefs.",
        urls: tools.map((tool) => `${siteUrl}/tools/${tool.slug}/`),
      },
    ],
    appAnswerCount: appAnswers.length,
    appAnswers,
    comparisonAnswerCount: comparisonAnswers.length,
    comparisonAnswers,
    appUseCaseAnswerCount: appUseCaseAnswers.length,
    appUseCaseAnswers,
    toolAnswerCount: toolAnswers.length,
    toolAnswers,
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
      toolRegistry: `${siteUrl}/tools.json`,
      contentPackageSchema: `${siteUrl}/content-package.schema.json`,
      developerGuide: `${siteUrl}/developers/`,
      llms: `${siteUrl}/llms.txt`,
      llmsFull: `${siteUrl}/llms-full.txt`,
      useCases: [
        `${siteUrl}/use-cases/publish-to-multiple-apps/`,
        `${siteUrl}/use-cases/ai-content-distribution/`,
        `${siteUrl}/use-cases/ai-one-click-publishing/`,
        `${siteUrl}/use-cases/multi-platform-content-distribution/`,
        `${siteUrl}/use-cases/ai-content-repurposing/`,
        `${siteUrl}/use-cases/ai-post-generator-for-multiple-platforms/`,
        `${siteUrl}/use-cases/content-repurposing-tool/`,
        `${siteUrl}/use-cases/social-media-cross-posting/`,
        `${siteUrl}/use-cases/social-media-automation-tool/`,
      ],
      comparisons: comparisons.map(
        (comparison) => `${siteUrl}/compare/${comparison.slug}/`,
      ),
      appUseCases: appUseCases.map(
        (useCase) =>
          `${siteUrl}/apps/${appSlug(useCase.appName)}/${useCase.useCaseSlug}/`,
      ),
      tools: tools.map((tool) => `${siteUrl}/tools/${tool.slug}/`),
    },
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
