export type Comparison = {
  slug: string;
  competitor: string;
  title: string;
  description: string;
  hero: string;
  officialPosition: string;
  bestForCompetitor: string[];
  bestForAiPubKit: string[];
  differences: {
    area: string;
    competitor: string;
    aiPubKit: string;
  }[];
  workflow: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  officialSources: {
    name: string;
    url: string;
  }[];
};

export const comparisons: Comparison[] = [
  {
    slug: "buffer-alternative-for-ai-publishing",
    competitor: "Buffer",
    title: "Buffer alternative for AI publishing - AI PubKit",
    description:
      "Compare Buffer and AI PubKit for teams that need AI content distribution, app-ready drafts, and one-click publishing workflows.",
    hero: "A Buffer alternative when the job is AI publishing, not only social scheduling.",
    officialPosition:
      "Buffer is positioned as a social media management platform for publishing, engagement, analytics, collaboration, and social content workflows.",
    bestForCompetitor: [
      "You mainly need a mature social media calendar.",
      "You want social engagement, analytics, approval, and community management around scheduled posts.",
      "Your publishing work is already centered on supported social channels.",
    ],
    bestForAiPubKit: [
      "You need to turn one AI-generated source into app-ready outputs for social, video, community, and CMS destinations.",
      "You want an open app registry that explains direct, assisted, and researching publishing status.",
      "You need a request path for new publishing apps instead of a fixed social-only workflow.",
    ],
    differences: [
      {
        area: "Primary job",
        competitor: "Social media management and scheduling.",
        aiPubKit: "AI content distribution and one-click publishing readiness.",
      },
      {
        area: "Content source",
        competitor: "Posts and campaigns prepared for social channels.",
        aiPubKit: "One AI source repurposed into app-ready posts, videos, articles, messages, and drafts.",
      },
      {
        area: "Destination model",
        competitor: "Social platform workflow.",
        aiPubKit: "Public app registry across social, video, community, CMS, and regional apps.",
      },
      {
        area: "Transparency",
        competitor: "Product-managed platform support.",
        aiPubKit: "Open-source status model with official source links and app request issues.",
      },
    ],
    workflow: [
      "Generate or import one AI source.",
      "Choose social, video, community, and CMS destinations.",
      "Create platform-specific copy, metadata, tags, media notes, and review fields.",
      "Publish directly where possible or prepare assisted drafts where review is needed.",
    ],
    faq: [
      {
        question: "Is AI PubKit a Buffer replacement?",
        answer:
          "AI PubKit is not a general replacement for Buffer's social media management suite. It is a focused alternative when the user's core problem is AI content distribution, app-specific publishing readiness, and open app support data.",
      },
      {
        question: "When should a team use Buffer instead?",
        answer:
          "A team should use Buffer when it mainly needs a mature social calendar, scheduling, engagement, analytics, and team workflows around social media channels.",
      },
      {
        question: "When should a team use AI PubKit instead?",
        answer:
          "A team should use AI PubKit when it needs to turn one AI-generated source into publishing-ready outputs across multiple app types and understand whether each destination supports direct publishing or assisted drafts.",
      },
    ],
    officialSources: [
      {
        name: "Buffer official website",
        url: "https://buffer.com/",
      },
    ],
  },
  {
    slug: "hootsuite-alternative-for-ai-publishing",
    competitor: "Hootsuite",
    title: "Hootsuite alternative for AI publishing - AI PubKit",
    description:
      "Compare Hootsuite and AI PubKit for AI publishing, content repurposing, app capability data, and one-click distribution workflows.",
    hero: "A Hootsuite alternative for teams building around AI-generated publishing workflows.",
    officialPosition:
      "Hootsuite is positioned as a social media management tool that brings scheduling, content creation, analytics, and social listening together.",
    bestForCompetitor: [
      "You need enterprise social media management, analytics, listening, and team operations.",
      "Your marketing team already works inside a social media command center.",
      "You need broad social management features beyond publishing preparation.",
    ],
    bestForAiPubKit: [
      "You want to map AI-generated content into app-ready formats before publishing.",
      "You need a transparent answer to whether each app supports direct, assisted, or researched publishing.",
      "You care about GitHub, open contribution, and user-requested app coverage.",
    ],
    differences: [
      {
        area: "Primary job",
        competitor: "Social media management, intelligence, and listening.",
        aiPubKit: "AI-generated content publishing and app readiness.",
      },
      {
        area: "Scope",
        competitor: "Social campaign operations.",
        aiPubKit: "Social, video, community, CMS, and regional publishing destinations.",
      },
      {
        area: "AI role",
        competitor: "AI helps parts of social media management.",
        aiPubKit: "AI-generated content is the starting point of the entire publishing workflow.",
      },
      {
        area: "Open data",
        competitor: "Platform support is part of the product.",
        aiPubKit: "Publishing status is exposed through pages, apps.json, answers.json, and GitHub.",
      },
    ],
    workflow: [
      "Start with an AI article, script, brief, or launch message.",
      "Repurpose it into each selected app format.",
      "Check official or stable publishing paths in the app registry.",
      "Publish, stage, or request support depending on destination status.",
    ],
    faq: [
      {
        question: "Is AI PubKit a Hootsuite replacement?",
        answer:
          "AI PubKit is not a full replacement for Hootsuite's social management, analytics, and listening suite. It is an alternative for users whose main problem is AI publishing preparation across many app destinations.",
      },
      {
        question: "When should a team use Hootsuite instead?",
        answer:
          "A team should use Hootsuite when it needs a mature social media management platform with scheduling, analytics, social listening, enterprise controls, and ongoing campaign operations.",
      },
      {
        question: "When should a team use AI PubKit instead?",
        answer:
          "A team should use AI PubKit when it needs an app-first AI publishing workflow with open capability data, direct and assisted paths, and a request queue for additional apps.",
      },
    ],
    officialSources: [
      {
        name: "Hootsuite official website",
        url: "https://www.hootsuite.com/",
      },
    ],
  },
  {
    slug: "zapier-alternative-for-ai-publishing",
    competitor: "Zapier",
    title: "Zapier alternative for AI publishing - AI PubKit",
    description:
      "Compare Zapier and AI PubKit for teams that want focused AI publishing instead of a general app automation platform.",
    hero: "A Zapier alternative when the workflow is specifically one-click AI publishing.",
    officialPosition:
      "Zapier is positioned as a broad automation platform for connecting AI, agents, workflows, and everyday apps.",
    bestForCompetitor: [
      "You need general business automation across many departments and apps.",
      "You want to connect triggers and actions across existing software.",
      "Your workflow is not limited to content publishing.",
    ],
    bestForAiPubKit: [
      "You want a product surface dedicated to AI-generated content distribution.",
      "You need built-in publishing status and app-specific content fields.",
      "You want public answers for questions like whether AI can publish to YouTube, WordPress, Shopify Blog, or Slack in one click.",
    ],
    differences: [
      {
        area: "Primary job",
        competitor: "General automation across apps, AI tools, agents, and workflows.",
        aiPubKit: "Focused AI publishing across app destinations.",
      },
      {
        area: "User surface",
        competitor: "Trigger-action automation builder.",
        aiPubKit: "Publishing workflow organized around content and destination apps.",
      },
      {
        area: "Publishing detail",
        competitor: "Depends on app actions and user-created automation logic.",
        aiPubKit: "Tracks content types, limits, workflow notes, official sources, and app status.",
      },
      {
        area: "SEO and GEO role",
        competitor: "Automation platform pages and app directory.",
        aiPubKit: "Answer pages, apps.json, answers.json, llms.txt, and open app request data.",
      },
    ],
    workflow: [
      "Use AI to produce the source content.",
      "Choose the destinations that should receive app-ready versions.",
      "Generate the required output for each app instead of building every action manually.",
      "Route the output to direct publishing, assisted drafts, or requested app support.",
    ],
    faq: [
      {
        question: "Is AI PubKit a Zapier replacement?",
        answer:
          "AI PubKit is not a general replacement for Zapier. Zapier is broader automation software. AI PubKit is narrower and more focused on AI content distribution, app-ready publishing outputs, and public publishing capability data.",
      },
      {
        question: "When should a team use Zapier instead?",
        answer:
          "A team should use Zapier when it needs flexible automation across many business processes, including sales, operations, support, marketing, data, and internal tools.",
      },
      {
        question: "When should a team use AI PubKit instead?",
        answer:
          "A team should use AI PubKit when the repeated job is creating one AI source and moving it toward multiple publishing destinations with platform-specific copy, metadata, and review status.",
      },
    ],
    officialSources: [
      {
        name: "Zapier official website",
        url: "https://zapier.com/",
      },
    ],
  },
  {
    slug: "repurpose-io-alternative",
    competitor: "Repurpose.io",
    title: "Repurpose.io alternative for AI publishing - AI PubKit",
    description:
      "Compare Repurpose.io and AI PubKit for content repurposing, AI content distribution, app-ready drafts, and open publishing status data.",
    hero: "A Repurpose.io alternative when repurposing needs to start from AI content and end in app-ready publishing outputs.",
    officialPosition:
      "Repurpose.io is positioned as an automated content repurposing and distribution platform, especially for creators moving content across channels.",
    bestForCompetitor: [
      "You already create audio or video content and need automated distribution to connected channels.",
      "You want creator-focused repurposing workflows around existing media assets.",
      "Your main workflow is moving content between supported media and social destinations.",
    ],
    bestForAiPubKit: [
      "You want to repurpose AI-generated articles, scripts, transcripts, launch notes, and briefs into many app-ready formats.",
      "You need transparent app status for direct publishing, assisted drafts, and researching destinations.",
      "You want the app list and request process to live in an open GitHub-backed registry.",
    ],
    differences: [
      {
        area: "Primary job",
        competitor: "Automated repurposing and distribution for creator content.",
        aiPubKit: "AI source to app-ready publishing outputs across destination types.",
      },
      {
        area: "Input",
        competitor: "Often creator media such as video or audio content.",
        aiPubKit: "AI drafts, articles, scripts, transcripts, campaign briefs, and product updates.",
      },
      {
        area: "Destination model",
        competitor: "Connected distribution channels.",
        aiPubKit: "Open app registry with official source links, workflow limits, and support status.",
      },
      {
        area: "Best wedge",
        competitor: "Post once and distribute media across channels.",
        aiPubKit: "Generate once, repurpose by destination, and publish or stage based on app rules.",
      },
    ],
    workflow: [
      "Start from one AI source or existing content asset.",
      "Choose output formats such as social posts, articles, video metadata, messages, and app drafts.",
      "Adapt each output to the selected destination.",
      "Publish directly where possible or prepare human-review drafts where required.",
    ],
    faq: [
      {
        question: "Is AI PubKit a Repurpose.io replacement?",
        answer:
          "AI PubKit is not a direct replacement for every Repurpose.io workflow. It is a focused alternative for users who want AI-first content repurposing tied to open app publishing status and one-click publishing readiness.",
      },
      {
        question: "When should a creator use Repurpose.io instead?",
        answer:
          "A creator should use Repurpose.io when the primary job is automated distribution of existing audio or video content across its supported channels.",
      },
      {
        question: "When should a creator or team use AI PubKit instead?",
        answer:
          "A creator or team should use AI PubKit when the source is AI-generated or needs to become many destination-specific outputs across social, video, community, CMS, and regional apps.",
      },
    ],
    officialSources: [
      {
        name: "Repurpose.io official website",
        url: "https://repurpose.io/",
      },
      {
        name: "Repurpose.io content distribution tool",
        url: "https://repurpose.io/content-distribution-tool/",
      },
    ],
  },
  {
    slug: "socialbee-alternative",
    competitor: "SocialBee",
    title: "SocialBee alternative for AI publishing - AI PubKit",
    description:
      "Compare SocialBee and AI PubKit for AI social media management, publishing readiness, app status data, and one-source-to-many workflows.",
    hero: "A SocialBee alternative when AI publishing needs an open app registry and destination-specific outputs.",
    officialPosition:
      "SocialBee is positioned as an AI-powered social media management tool for creating, scheduling, publishing, analyzing, and handling conversations from one dashboard.",
    bestForCompetitor: [
      "You want a social media management dashboard with scheduling, analytics, engagement, and collaboration.",
      "You need AI help with captions, visuals, content calendars, and social media strategy.",
      "Your main workflow stays inside social media management.",
    ],
    bestForAiPubKit: [
      "You want AI content distribution across more than social scheduling.",
      "You need app-specific publishing status that can be read by users, search engines, and AI assistants.",
      "You want a GitHub-backed app request path for destinations outside a fixed platform list.",
    ],
    differences: [
      {
        area: "Primary job",
        competitor: "AI-powered social media management.",
        aiPubKit: "AI publishing readiness across social, video, community, and CMS apps.",
      },
      {
        area: "AI role",
        competitor: "AI assists social content creation and strategy.",
        aiPubKit: "AI source content is repurposed into destination-specific publishing outputs.",
      },
      {
        area: "Data openness",
        competitor: "Product support and integrations are documented by the platform.",
        aiPubKit: "Support status is exposed through pages, apps.json, answers.json, llms.txt, and GitHub.",
      },
      {
        area: "Expansion path",
        competitor: "Social management features and integrations.",
        aiPubKit: "User-requested app coverage across global and regional publishing destinations.",
      },
    ],
    workflow: [
      "Create or import one AI source.",
      "Select destination apps across social, video, CMS, community, and regional channels.",
      "Generate app-ready outputs and review notes.",
      "Publish, stage, or request support based on each destination status.",
    ],
    faq: [
      {
        question: "Is AI PubKit a SocialBee replacement?",
        answer:
          "AI PubKit is not a complete replacement for SocialBee's social media management dashboard. It is an alternative when the main job is AI publishing across many app destination types with transparent support status.",
      },
      {
        question: "When should a team use SocialBee instead?",
        answer:
          "A team should use SocialBee when it wants a social media management tool with scheduling, analytics, engagement, collaboration, and AI assistance inside a social dashboard.",
      },
      {
        question: "When should a team use AI PubKit instead?",
        answer:
          "A team should use AI PubKit when it wants to turn one AI-generated source into destination-specific outputs and route them through direct publishing, assisted drafts, or new app requests.",
      },
    ],
    officialSources: [
      {
        name: "SocialBee official website",
        url: "https://socialbee.com/",
      },
      {
        name: "SocialBee social media posting tool",
        url: "https://socialbee.com/social-media-posting-tool/",
      },
    ],
  },
];

export function comparisonBySlug(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}
