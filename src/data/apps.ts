export type ConnectorStatus = "Live path" | "Assisted" | "Researching";

export type Connector = {
  name: string;
  category: "Video" | "Social" | "Community" | "CMS" | "China";
  region: "Global" | "US/EU" | "China" | "Regional";
  status: ConnectorStatus;
  content: string[];
  notes: string;
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

export const connectors: Connector[] = [
  {
    name: "YouTube",
    category: "Video",
    region: "Global",
    status: "Live path",
    content: ["Video", "Shorts", "Metadata"],
    notes: "Best for long-form video, Shorts, titles, descriptions, and publishing checklists.",
  },
  {
    name: "TikTok",
    category: "Video",
    region: "Global",
    status: "Assisted",
    content: ["Short video", "Caption", "Schedule"],
    notes: "Strong demand, but production publishing depends on account/API approval.",
  },
  {
    name: "Instagram",
    category: "Social",
    region: "Global",
    status: "Assisted",
    content: ["Image", "Reels", "Carousel"],
    notes: "Good fit for brand and creator workflows with account type requirements.",
  },
  {
    name: "Facebook Pages",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Post", "Image", "Video"],
    notes: "Useful for business pages, local services, and cross-posting workflows.",
  },
  {
    name: "X",
    category: "Social",
    region: "Global",
    status: "Assisted",
    content: ["Post", "Thread", "Media"],
    notes: "Powerful for launch and update workflows; API plan limits must be checked.",
  },
  {
    name: "LinkedIn",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Post", "Article brief", "Company update"],
    notes: "Best for B2B, founder-led content, hiring, and product education.",
  },
  {
    name: "Threads",
    category: "Social",
    region: "Global",
    status: "Assisted",
    content: ["Post", "Thread", "Media"],
    notes: "Useful for short-form distribution and community conversation.",
  },
  {
    name: "Pinterest",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Pin", "Image", "Link"],
    notes: "Strong fit for evergreen tutorials, shopping, design, food, and lifestyle content.",
  },
  {
    name: "Reddit",
    category: "Community",
    region: "Global",
    status: "Assisted",
    content: ["Post", "Link", "Comment draft"],
    notes: "Needs community-specific rules and human review before publishing.",
  },
  {
    name: "WordPress",
    category: "CMS",
    region: "Global",
    status: "Live path",
    content: ["Article", "Image", "SEO fields"],
    notes: "Good first CMS destination for tutorials, landing pages, and programmatic SEO.",
  },
  {
    name: "Medium",
    category: "CMS",
    region: "Global",
    status: "Assisted",
    content: ["Article", "Canonical link", "Tags"],
    notes: "Useful for thought leadership and republishing workflows.",
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
    name: "Telegram Channel",
    category: "Community",
    region: "Global",
    status: "Live path",
    content: ["Message", "Image", "Link"],
    notes: "Fast path for community broadcasts and launch updates.",
  },
  {
    name: "Discord",
    category: "Community",
    region: "Global",
    status: "Live path",
    content: ["Channel post", "Announcement", "Webhook"],
    notes: "Good for communities, release notes, and support updates.",
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
