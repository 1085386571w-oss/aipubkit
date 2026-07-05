export type ConnectorStatus = "Live path" | "Assisted" | "Researching";

export type Connector = {
  name: string;
  category: "Video" | "Social" | "Community" | "CMS" | "China";
  region: "Global" | "US/EU" | "China" | "Regional";
  status: ConnectorStatus;
  content: string[];
  notes: string;
  sourceName?: string;
  sourceUrl?: string;
};

export function appSlug(name: string) {
  return name.toLowerCase().replaceAll(" ", "-");
}

export function statusSummary(status: ConnectorStatus, appName: string) {
  if (status === "Live path") {
    return `AI PubKit maps ${appName} as a direct publishing destination where stable publishing paths are available.`;
  }

  if (status === "Assisted") {
    return `AI PubKit can prepare ${appName}-ready content, but direct publishing may require review, account approval, or platform-specific limits.`;
  }

  return `AI PubKit is tracking demand for ${appName}, but the publishing path needs more research before direct support is promised.`;
}

export function customerProblem(connector: Connector) {
  if (connector.category === "Video") {
    return `Creators do not want to rewrite the same video idea for every short-form and long-form destination. AI PubKit should turn one source into ${connector.name}-ready titles, captions, metadata, and review notes.`;
  }

  if (connector.category === "Social") {
    return `Teams do not want to copy-paste the same post into every social app. AI PubKit should adapt one message into a ${connector.name}-ready version with the right format and publishing status.`;
  }

  if (connector.category === "Community") {
    return `Community managers need fast updates without losing context. AI PubKit should prepare ${connector.name}-ready messages that are easy to review before sending.`;
  }

  if (connector.category === "CMS") {
    return `Content teams need to repurpose social content into articles and evergreen pages. AI PubKit should prepare ${connector.name}-ready drafts with titles, tags, and publishing notes.`;
  }

  return `Operators need one workflow for global and regional publishing. AI PubKit should prepare ${connector.name}-ready content while respecting platform limits and review requirements.`;
}

export const connectors: Connector[] = [
  {
    name: "YouTube",
    category: "Video",
    region: "Global",
    status: "Live path",
    content: ["Video", "Shorts", "Metadata"],
    notes: "Best for long-form video, Shorts, titles, descriptions, and publishing checklists.",
    sourceName: "YouTube Data API videos.insert",
    sourceUrl: "https://developers.google.com/youtube/v3/docs/videos/insert",
  },
  {
    name: "TikTok",
    category: "Video",
    region: "Global",
    status: "Assisted",
    content: ["Short video", "Caption", "Schedule"],
    notes: "Strong demand, but production publishing depends on account/API approval.",
    sourceName: "TikTok Content Posting API",
    sourceUrl: "https://developers.tiktok.com/products/content-posting-api/",
  },
  {
    name: "Instagram",
    category: "Social",
    region: "Global",
    status: "Assisted",
    content: ["Image", "Reels", "Carousel"],
    notes: "Good fit for brand and creator workflows with account type requirements.",
    sourceName: "Instagram Content Publishing API",
    sourceUrl: "https://developers.facebook.com/documentation/instagram-platform/content-publishing",
  },
  {
    name: "Facebook Pages",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Post", "Image", "Video"],
    notes: "Useful for business pages, local services, and cross-posting workflows.",
    sourceName: "Meta Pages API posts",
    sourceUrl: "https://developers.facebook.com/documentation/pages-api/posts",
  },
  {
    name: "X",
    category: "Social",
    region: "Global",
    status: "Assisted",
    content: ["Post", "Thread", "Media"],
    notes: "Powerful for launch and update workflows; API plan limits must be checked.",
    sourceName: "X API create post",
    sourceUrl: "https://docs.x.com/x-api/posts/create-post",
  },
  {
    name: "LinkedIn",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Post", "Article brief", "Company update"],
    notes: "Best for B2B, founder-led content, hiring, and product education.",
    sourceName: "LinkedIn Posts API",
    sourceUrl:
      "https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api",
  },
  {
    name: "Threads",
    category: "Social",
    region: "Global",
    status: "Assisted",
    content: ["Post", "Thread", "Media"],
    notes: "Useful for short-form distribution and community conversation.",
    sourceName: "Threads API posts",
    sourceUrl: "https://developers.facebook.com/documentation/threads/posts",
  },
  {
    name: "Pinterest",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Pin", "Image", "Link"],
    notes: "Strong fit for evergreen tutorials, shopping, design, food, and lifestyle content.",
    sourceName: "Pinterest Create Pin API",
    sourceUrl: "https://developers.pinterest.com/docs/api/v5/pins-create/",
  },
  {
    name: "Reddit",
    category: "Community",
    region: "Global",
    status: "Assisted",
    content: ["Post", "Link", "Comment draft"],
    notes: "Needs community-specific rules and human review before publishing.",
    sourceName: "Reddit API submit",
    sourceUrl: "https://www.reddit.com/dev/api/",
  },
  {
    name: "WordPress",
    category: "CMS",
    region: "Global",
    status: "Live path",
    content: ["Article", "Image", "SEO fields"],
    notes: "Good first CMS destination for tutorials, landing pages, and programmatic SEO.",
    sourceName: "WordPress REST API posts",
    sourceUrl: "https://developer.wordpress.org/rest-api/reference/posts/",
  },
  {
    name: "Medium",
    category: "CMS",
    region: "Global",
    status: "Assisted",
    content: ["Article", "Canonical link", "Tags"],
    notes: "Useful for thought leadership and republishing workflows.",
    sourceName: "Medium API docs",
    sourceUrl: "https://github.com/Medium/medium-api-docs",
  },
  {
    name: "Bluesky",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Post", "Thread", "Link"],
    notes: "Good fit for developer, creator, and open social publishing workflows.",
    sourceName: "Bluesky API create post guide",
    sourceUrl: "https://docs.bsky.app/docs/get-started",
  },
  {
    name: "Mastodon",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Status", "Media", "Thread"],
    notes: "Useful for open social, community, and developer audience publishing.",
    sourceName: "Mastodon statuses API",
    sourceUrl: "https://docs.joinmastodon.org/methods/statuses/",
  },
  {
    name: "Substack",
    category: "CMS",
    region: "US/EU",
    status: "Researching",
    content: ["Newsletter", "Post", "Draft"],
    notes: "High creator demand; support depends on available publishing paths.",
  },
  {
    name: "Webflow CMS",
    category: "CMS",
    region: "Global",
    status: "Live path",
    content: ["CMS item", "Article", "Landing page"],
    notes: "Good fit for marketing sites that need AI-generated drafts moved into CMS collections.",
    sourceName: "Webflow CMS create items API",
    sourceUrl:
      "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/create-items",
  },
  {
    name: "Telegram Channel",
    category: "Community",
    region: "Global",
    status: "Live path",
    content: ["Message", "Image", "Link"],
    notes: "Fast path for community broadcasts and launch updates.",
    sourceName: "Telegram Bot API",
    sourceUrl: "https://core.telegram.org/bots/api",
  },
  {
    name: "Discord",
    category: "Community",
    region: "Global",
    status: "Live path",
    content: ["Channel post", "Announcement", "Webhook"],
    notes: "Good for communities, release notes, and support updates.",
    sourceName: "Discord Webhook Resource",
    sourceUrl: "https://docs.discord.com/developers/resources/webhook",
  },
  {
    name: "Slack",
    category: "Community",
    region: "Global",
    status: "Live path",
    content: ["Channel post", "Announcement", "Internal update"],
    notes: "Useful for team announcements, launch updates, support handoffs, and internal publishing.",
    sourceName: "Slack chat.postMessage API",
    sourceUrl: "https://docs.slack.dev/reference/methods/chat.postMessage",
  },
  {
    name: "Xiaohongshu",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Note", "Image", "Caption"],
    notes: "Useful for China-market lifestyle, ecommerce, and creator campaigns.",
  },
  {
    name: "Douyin",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Short video", "Caption", "Schedule"],
    notes: "Important for China short-video workflows; account/API constraints apply.",
  },
  {
    name: "Bilibili",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Video", "Title", "Description"],
    notes: "Good fit for tutorials, product demos, and long-form creator content.",
  },
  {
    name: "WeChat Official Account",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Article", "Draft", "Media"],
    notes: "Useful for brand publishing and private-domain content operations.",
  },
];

export const topConnectors = connectors.slice(0, 12);
