export type ToolField =
  | {
      id: string;
      label: string;
      type: "text" | "textarea";
      placeholder: string;
      required?: boolean;
      help?: string;
    }
  | {
      id: string;
      label: string;
      type: "select";
      options: string[];
      required?: boolean;
      help?: string;
    }
  | {
      id: string;
      label: string;
      type: "checkboxes";
      options: string[];
      defaultChecked?: string[];
      required?: boolean;
      help?: string;
    };

export type ToolPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  outputLabel: string;
  fields: ToolField[];
  steps: string[];
  outputs: string[];
  canonicalAnswer: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const tools: ToolPage[] = [
  {
    slug: "ai-publishing-composer",
    name: "AI publishing composer",
    title: "AI publishing composer for copy, image, and video handoff - AI PubKit",
    description:
      "Generate a platform-ready publishing package from one idea, image, video, article, transcript, or product update.",
    h1: "AI publishing composer for copy, image, and video workflows.",
    lead:
      "Start with text, an image link, a video link, or a campaign idea. Generate the captions, titles, metadata, cover text, alt text, and review checks needed before publishing.",
    outputLabel: "Generated publishing package",
    fields: [
      {
        id: "source",
        label: "Source idea or asset context",
        type: "textarea",
        placeholder:
          "Describe the idea, product, article, image, video, transcript, launch, or offer you want to publish.",
        required: true,
      },
      {
        id: "source_app",
        label: "Source app",
        type: "select",
        options: [
          "ChatGPT",
          "Claude",
          "Gemini",
          "Perplexity",
          "Canva",
          "CapCut",
          "Runway",
          "Google Veo / Gemini Omni",
          "Seedance",
          "Kling AI",
          "Luma AI",
          "Midjourney",
          "Seedream",
          "Adobe Firefly",
          "Ideogram",
          "Leonardo AI",
          "FLUX / Stable Diffusion",
          "Pika",
          "Hailuo AI",
          "Vidu",
          "Wan",
          "HeyGen",
          "Synthesia",
          "ElevenLabs",
          "Descript",
          "Jasper",
          "Copy.ai",
          "Notion AI",
          "Sora legacy media",
          "Other AI app",
        ],
        help: "Choose where the idea, image, video, audio, design, or draft starts.",
      },
      {
        id: "source_type",
        label: "Source type",
        type: "select",
        options: [
          "Text or idea",
          "Image or design",
          "Video or audio",
          "Product update",
          "Article or transcript",
        ],
      },
      {
        id: "handoff_mode",
        label: "How the source app sends it",
        type: "select",
        options: [
          "Paste or copy package",
          "Stable media URL",
          "Webhook or API request",
          "Manual upload after review",
        ],
        help: "Start simple with copy/package or media URL. Use API handoff when a source app integration is ready.",
      },
      {
        id: "media_url",
        label: "Media URL if available",
        type: "text",
        placeholder: "https://cdn.example.com/generated-video.mp4",
        help: "Use a stable image, video, audio, or file URL when the source already exists.",
      },
      {
        id: "audience",
        label: "Audience",
        type: "text",
        placeholder: "Example: creators, ecommerce buyers, local customers, SaaS teams",
      },
      {
        id: "tone",
        label: "Tone",
        type: "select",
        options: ["Clear", "Professional", "Founder-led", "Promotional", "Educational"],
      },
      {
        id: "destinations",
        label: "Publishing destinations",
        type: "checkboxes",
        options: [
          "TikTok",
          "YouTube",
          "Instagram",
          "LinkedIn",
          "X",
          "Threads",
          "Facebook Pages",
          "Pinterest",
          "Reddit",
          "WordPress",
          "Shopify Blog",
          "Amazon Seller Central",
          "TikTok Shop",
          "Etsy",
          "eBay",
          "Walmart Marketplace",
          "WooCommerce",
          "BigCommerce",
          "Google Business Profile",
          "Mailchimp",
          "Beehiiv",
          "Telegram Channel",
          "Discord",
          "Slack",
          "WhatsApp Business",
          "Xiaohongshu",
          "Douyin",
          "Bilibili",
          "WeChat Official Account",
          "WeChat Channels",
          "Weibo",
          "Kuaishou",
          "Zhihu",
        ],
        defaultChecked: ["TikTok", "YouTube", "Instagram", "LinkedIn"],
        help: "Start with the platforms most teams repurpose to first. You can change this before generating.",
      },
      {
        id: "outputs",
        label: "Needed outputs",
        type: "checkboxes",
        options: [
          "Captions",
          "Titles and descriptions",
          "Hashtags",
          "Cover or thumbnail text",
          "Alt text",
          "CMS article draft",
          "Review checklist",
        ],
        defaultChecked: [
          "Captions",
          "Titles and descriptions",
          "Hashtags",
          "Cover or thumbnail text",
          "Alt text",
          "Review checklist",
        ],
      },
    ],
    steps: [
      "Choose the source app and describe the idea, asset, prompt, transcript, or media URL.",
      "Choose the handoff method, source type, audience, tone, destination apps, and needed outputs.",
      "Generate one publishing package with platform-specific copy, metadata, media notes, and review checks.",
      "Move each destination into direct publishing where allowed or an assisted draft where review is required.",
    ],
    outputs: [
      "Platform-ready copy, titles, descriptions, hashtags, and calls to action.",
      "Image and video handoff notes such as cover text, thumbnail text, alt text, and media checks.",
      "A structured publishing package that can feed direct publishing or assisted draft workflows.",
    ],
    canonicalAnswer:
      "AI PubKit's AI publishing composer can generate platform-ready copy and publishing packages from source apps such as AI writing, image, video, audio, avatar, design, and regional creative tools. It includes source-app handoff choices, quick-start workflow templates, default destination choices, platform previews, and review-ready handoff notes.",
    faqs: [
      {
        question: "Can AI PubKit generate copy for multiple apps?",
        answer:
          "Yes. AI PubKit can generate platform-specific captions, titles, descriptions, hashtags, calls to action, CMS draft notes, and review checks from one source.",
      },
      {
        question: "Can AI PubKit generate images or videos?",
        answer:
          "The practical first product layer is to accept generated image or video assets and create the publishing package around them. Native image or video generation can be added later through model integrations.",
      },
      {
        question: "What should an image or video app send to AI PubKit?",
        answer:
          "It should send a content package with the source app name, stable media URL, prompt, caption, source context, destination list, and requested outputs such as captions, video titles, cover text, alt text, hashtags, and review checks.",
      },
      {
        question: "How does a source app connect to AI PubKit?",
        answer:
          "The customer-friendly path is source app to content package to destination review. A source app can start with copy-paste, a stable media URL, or a webhook/API request, then AI PubKit maps each selected destination to direct publishing, assisted draft, or research status.",
      },
      {
        question: "Which source apps should AI PubKit watch?",
        answer:
          "AI PubKit should watch global and regional source apps, including ChatGPT, Claude, Gemini, Canva, Runway, Google Veo, Seedance, Kling AI, Luma AI, Midjourney, Seedream, Adobe Firefly, Ideogram, HeyGen, Synthesia, ElevenLabs, Descript, Hailuo, Vidu, Wan, and other fast-moving creative tools.",
      },
    ],
  },
  {
    slug: "ai-social-media-post-generator",
    name: "AI social media post generator",
    title: "AI social media post generator - AI PubKit",
    description:
      "Generate platform-specific social post drafts from one source idea for LinkedIn, X, Threads, Instagram, and Facebook Pages.",
    h1: "AI social media post generator for multi-app publishing.",
    lead:
      "Turn one source idea into platform-specific social post drafts. The output is designed for review-ready publishing, not generic copy-paste.",
    outputLabel: "Generated social post drafts",
    fields: [
      {
        id: "source",
        label: "Source idea",
        type: "textarea",
        placeholder: "Paste a launch note, article summary, product update, or campaign idea.",
        required: true,
      },
      {
        id: "audience",
        label: "Audience",
        type: "text",
        placeholder: "Example: SaaS founders, local customers, ecommerce buyers",
      },
      {
        id: "goal",
        label: "Publishing goal",
        type: "select",
        options: [
          "Educate the audience",
          "Announce a launch",
          "Drive traffic",
          "Start a conversation",
          "Promote an offer",
        ],
      },
      {
        id: "tone",
        label: "Tone",
        type: "select",
        options: ["Clear", "Founder-led", "Professional", "Friendly", "Direct"],
      },
      {
        id: "destinations",
        label: "Destinations",
        type: "checkboxes",
        options: ["LinkedIn", "X", "Threads", "Instagram", "Facebook Pages"],
        help: "Pick the social apps that need separate drafts.",
      },
    ],
    steps: [
      "Paste one source idea.",
      "Choose audience, goal, tone, and destination apps.",
      "Generate app-specific drafts with hooks, body copy, and review notes.",
      "Copy the output into AI PubKit publishing workflows or destination drafts.",
    ],
    outputs: [
      "Platform-specific social post drafts.",
      "Hooks, captions, calls to action, and review notes.",
      "A cleaner first step before cross-posting or one-click publishing.",
    ],
    canonicalAnswer:
      "AI PubKit's AI social media post generator turns one source idea into platform-specific drafts for social apps such as LinkedIn, X, Threads, Instagram, and Facebook Pages.",
    faqs: [
      {
        question: "What does the AI social media post generator create?",
        answer:
          "It creates destination-specific post drafts with hooks, body copy, calls to action, hashtags or formatting notes, and review reminders.",
      },
      {
        question: "Does the generator publish posts automatically?",
        answer:
          "No. The tool creates review-ready drafts. Publishing depends on each app's direct or assisted publishing status in AI PubKit.",
      },
      {
        question: "Why generate separate posts for each app?",
        answer:
          "Each social app has different audience behavior, length expectations, media rules, and calls to action, so one exact caption should not be copied everywhere.",
      },
    ],
  },
  {
    slug: "content-repurposing-planner",
    name: "Content repurposing planner",
    title: "Content repurposing planner - AI PubKit",
    description:
      "Plan how one source asset becomes social posts, video metadata, CMS articles, community updates, and newsletter teasers.",
    h1: "Content repurposing planner for one-source-to-many workflows.",
    lead:
      "Use this planner to decide what one source should become before sending it into app-specific publishing pages.",
    outputLabel: "Generated repurposing plan",
    fields: [
      {
        id: "source",
        label: "Source asset",
        type: "textarea",
        placeholder: "Describe the article, transcript, script, podcast, video, or campaign brief.",
        required: true,
      },
      {
        id: "source_format",
        label: "Source format",
        type: "select",
        options: ["Article", "Video script", "Transcript", "Podcast notes", "Launch brief", "Product update"],
      },
      {
        id: "audience",
        label: "Target audience",
        type: "text",
        placeholder: "Example: creators, agencies, local businesses, developers",
      },
      {
        id: "destinations",
        label: "Repurpose into",
        type: "checkboxes",
        options: ["Social posts", "Video metadata", "CMS article", "Community update", "Newsletter teaser"],
      },
      {
        id: "timeframe",
        label: "Publishing window",
        type: "select",
        options: ["Today", "This week", "Two weeks", "One month"],
      },
    ],
    steps: [
      "Identify the source asset and audience.",
      "Choose the output formats the source should become.",
      "Generate a repurposing plan with deliverables and sequencing.",
      "Move each output into an app-specific publishing workflow.",
    ],
    outputs: [
      "A destination-by-destination repurposing plan.",
      "Suggested output formats and review priorities.",
      "A bridge from long-form source content to publishing-ready assets.",
    ],
    canonicalAnswer:
      "AI PubKit's content repurposing planner helps users turn one source asset into multiple publishing outputs such as social posts, video metadata, CMS articles, community updates, and newsletter teasers.",
    faqs: [
      {
        question: "What is a content repurposing planner?",
        answer:
          "A content repurposing planner decides how one source asset should become multiple publishing outputs across social, video, CMS, community, and newsletter channels.",
      },
      {
        question: "Can the planner repurpose video content?",
        answer:
          "Yes. It can start from a script, transcript, podcast notes, or video idea and generate a plan for YouTube, TikTok, social posts, CMS articles, and community updates.",
      },
      {
        question: "How does this connect to AI PubKit?",
        answer:
          "The planner creates the publishing plan. AI PubKit's app pages then explain how each destination should be handled as direct, assisted, or still researching.",
      },
    ],
  },
  {
    slug: "multi-platform-publishing-checklist",
    name: "Multi-platform publishing checklist",
    title: "Multi-platform publishing checklist - AI PubKit",
    description:
      "Generate a review checklist before publishing one AI source across multiple social, video, community, and CMS apps.",
    h1: "Multi-platform publishing checklist for AI content.",
    lead:
      "Before publishing across apps, check source quality, destination formatting, platform limits, review status, and direct or assisted publishing readiness.",
    outputLabel: "Generated publishing checklist",
    fields: [
      {
        id: "source",
        label: "Content summary",
        type: "textarea",
        placeholder: "Summarize what you plan to publish.",
        required: true,
      },
      {
        id: "team_type",
        label: "Team type",
        type: "select",
        options: ["Creator", "Agency", "Startup", "Local business", "Ecommerce team", "Publisher"],
      },
      {
        id: "destinations",
        label: "Destination types",
        type: "checkboxes",
        options: ["Social", "Video", "Community", "CMS", "Newsletter"],
      },
      {
        id: "risk_level",
        label: "Review level",
        type: "select",
        options: ["Standard review", "Brand-sensitive", "Legal or regulated", "Client approval required"],
      },
      {
        id: "deadline",
        label: "Publishing deadline",
        type: "text",
        placeholder: "Example: today, Friday, before product launch",
      },
    ],
    steps: [
      "Summarize the source and target destinations.",
      "Choose the review level and team context.",
      "Generate a checklist for content, platform, media, approval, and publishing status.",
      "Use the checklist before direct publishing or draft handoff.",
    ],
    outputs: [
      "Preflight checklist for multi-platform publishing.",
      "Review reminders for links, claims, media, format, approvals, and app status.",
      "A practical control layer before one-click publishing.",
    ],
    canonicalAnswer:
      "AI PubKit's multi-platform publishing checklist helps teams review AI-generated content before sending it to multiple apps through direct publishing paths or assisted drafts.",
    faqs: [
      {
        question: "Why use a multi-platform publishing checklist?",
        answer:
          "A checklist reduces broken links, wrong formats, missing approvals, unsupported media, and overpromised direct publishing across apps.",
      },
      {
        question: "Does the checklist replace human review?",
        answer:
          "No. It makes human review faster and more consistent, especially for brand-sensitive, client, legal, or regulated content.",
      },
      {
        question: "What does the checklist verify?",
        answer:
          "It verifies source quality, destination formatting, media readiness, links, metadata, platform status, approvals, and publishing handoff.",
      },
    ],
  },
  {
    slug: "app-publishing-status-checker",
    name: "App publishing status checker",
    title: "App publishing status checker - AI PubKit",
    description:
      "Check whether an app is mapped as direct, assisted, or researching for one-click AI publishing in AI PubKit.",
    h1: "App publishing status checker.",
    lead:
      "Choose an app and content type to get a practical publishing-readiness answer based on AI PubKit's open app registry.",
    outputLabel: "Generated publishing status summary",
    fields: [
      {
        id: "app_name",
        label: "App",
        type: "select",
        options: [],
        required: true,
        help: "Options are loaded from the AI PubKit app registry.",
      },
      {
        id: "content_type",
        label: "Content type",
        type: "select",
        options: ["Post", "Image", "Video", "Short video", "Article", "Message", "Newsletter", "CMS page"],
      },
      {
        id: "desired_action",
        label: "Desired action",
        type: "select",
        options: ["Publish directly", "Create draft", "Schedule", "Check feasibility"],
      },
      {
        id: "docs_url",
        label: "Official docs link if known",
        type: "text",
        placeholder: "https://developers.example.com/docs",
      },
    ],
    steps: [
      "Select the destination app.",
      "Choose the content type and desired publishing action.",
      "Generate a status summary from AI PubKit's registry.",
      "Open the app page or request an update if the status is missing.",
    ],
    outputs: [
      "Direct, assisted, or researching status.",
      "Content type fit and practical next step.",
      "A route to app pages, official sources, or new app requests.",
    ],
    canonicalAnswer:
      "AI PubKit's app publishing status checker uses the open app registry to explain whether a destination is direct, assisted, or researching for one-click AI publishing.",
    faqs: [
      {
        question: "What does the app publishing status checker do?",
        answer:
          "It checks AI PubKit's app registry and returns whether a selected app is direct, assisted, or researching for AI publishing workflows.",
      },
      {
        question: "Does direct status mean no review is needed?",
        answer:
          "No. Direct status means an official or stable publishing path exists, but account setup, permissions, quotas, review, and platform rules still apply.",
      },
      {
        question: "What if an app is not listed?",
        answer:
          "Users should request the app through AI PubKit and include official developer documentation or API sources when available.",
      },
    ],
  },
  {
    slug: "ai-content-distribution-brief",
    name: "AI content distribution brief",
    title: "AI content distribution brief generator - AI PubKit",
    description:
      "Generate an AI content distribution brief for turning one source into app-ready outputs across social, video, community, CMS, and newsletter channels.",
    h1: "AI content distribution brief generator.",
    lead:
      "Create a compact brief that tells a team or AI assistant what to repurpose, where it should go, and what must be checked before publishing.",
    outputLabel: "Generated distribution brief",
    fields: [
      {
        id: "source",
        label: "Source content or campaign",
        type: "textarea",
        placeholder: "Describe the source content, offer, video, article, or launch.",
        required: true,
      },
      {
        id: "audience",
        label: "Audience",
        type: "text",
        placeholder: "Example: indie creators, agency clients, ecommerce buyers",
      },
      {
        id: "goal",
        label: "Distribution goal",
        type: "select",
        options: ["Awareness", "Traffic", "Signup", "Sales", "Community engagement", "Education"],
      },
      {
        id: "destinations",
        label: "Channel mix",
        type: "checkboxes",
        options: ["Social", "Video", "Community", "CMS", "Newsletter"],
      },
      {
        id: "review_level",
        label: "Review level",
        type: "select",
        options: ["Light review", "Brand review", "Client approval", "Legal or regulated review"],
      },
    ],
    steps: [
      "Describe the source content and target audience.",
      "Choose the distribution goal, channel mix, and review level.",
      "Generate a brief with outputs, destinations, review rules, and next actions.",
      "Use the brief to guide app-specific AI publishing workflows.",
    ],
    outputs: [
      "A compact distribution brief for AI publishing.",
      "Channel-specific output requirements.",
      "Review and readiness notes before publishing.",
    ],
    canonicalAnswer:
      "AI PubKit's AI content distribution brief generator turns one source into a structured plan for app-ready outputs across social, video, community, CMS, and newsletter channels.",
    faqs: [
      {
        question: "What is an AI content distribution brief?",
        answer:
          "It is a structured plan that describes the source content, audience, destination channels, required outputs, review rules, and next publishing actions.",
      },
      {
        question: "Who should use a distribution brief?",
        answer:
          "Creators, agencies, startups, publishers, and content teams can use it before repurposing one AI source across multiple apps.",
      },
      {
        question: "How does the brief help GEO?",
        answer:
          "It creates clear, machine-readable language around the user's publishing workflow, which can be reused by AI assistants and answer engines.",
      },
    ],
  },
];

export function toolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
