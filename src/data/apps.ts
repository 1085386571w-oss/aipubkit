export type ConnectorStatus = "Live path" | "Assisted" | "Researching";

export type ConnectorSource = {
  name: string;
  url: string;
};

export type Connector = {
  name: string;
  category:
    | "Video"
    | "Social"
    | "Community"
    | "CMS"
    | "Newsletter"
    | "Ecommerce"
    | "China";
  region: "Global" | "US/EU" | "China" | "Regional";
  status: ConnectorStatus;
  content: string[];
  notes: string;
  sourceName?: string;
  sourceUrl?: string;
  officialSources?: ConnectorSource[];
  userProblem?: string;
  workflow?: string[];
  limits?: string[];
  githubIssueUrl?: string;
  lastReviewed?: string;
};

export function appSlug(name: string) {
  return name
    .toLowerCase()
    .replaceAll("&", "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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
  if (connector.userProblem) {
    return connector.userProblem;
  }

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
    name: "Shopify Blog",
    category: "CMS",
    region: "Global",
    status: "Live path",
    content: ["Blog article", "SEO post", "Product education"],
    notes:
      "Useful for ecommerce teams that need AI-generated buying guides, launch posts, and product education inside Shopify.",
    sourceName: "Shopify GraphQL Admin API articleCreate",
    sourceUrl: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate",
    officialSources: [
      {
        name: "Shopify GraphQL Admin API articleCreate",
        url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate",
      },
      {
        name: "Shopify REST Admin API Article resource",
        url: "https://shopify.dev/docs/api/admin-rest/latest/resources/article",
      },
    ],
    userProblem:
      "Ecommerce teams need product education, launch posts, and SEO articles in Shopify, but copying one AI draft into the store blog still wastes time.",
    workflow: [
      "Create a source article, product update, or buying guide.",
      "Adapt the draft into a Shopify Blog article with title, body, summary, handle, tags, and image notes.",
      "Publish or schedule through the Admin API after the merchant account and app scopes are approved.",
    ],
    limits: [
      "A Shopify store and Admin API access token are required.",
      "The GraphQL articleCreate path should be preferred for new public app work.",
      "Required scopes and publish permissions must be checked before direct publishing.",
    ],
    githubIssueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/1",
    lastReviewed: "2026-07-05",
  },
  {
    name: "Notion",
    category: "CMS",
    region: "Global",
    status: "Live path",
    content: ["Page", "Database item", "Content calendar"],
    notes:
      "Good fit for teams that use Notion as a content workspace, knowledge base, or editorial planning system.",
    sourceName: "Notion create page API",
    sourceUrl: "https://developers.notion.com/reference/post-page",
    officialSources: [
      {
        name: "Notion create page API",
        url: "https://developers.notion.com/reference/post-page",
      },
      {
        name: "Notion working with page content guide",
        url: "https://developers.notion.com/guides/data-apis/working-with-page-content",
      },
    ],
    userProblem:
      "Teams use Notion for docs, content calendars, client notes, and internal knowledge, but AI-generated work often has to be pasted into pages or databases manually.",
    workflow: [
      "Start with an AI-generated brief, article, launch note, or content calendar item.",
      "Create a Notion page or database item under the selected parent page or data source.",
      "Append structured blocks and properties so the draft is ready for team review.",
    ],
    limits: [
      "A Notion integration and workspace permissions are required.",
      "Internal integrations need a parent page or data source.",
      "This is strongest for workspace draft creation, not public social publishing.",
    ],
    githubIssueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/2",
    lastReviewed: "2026-07-05",
  },
  {
    name: "Ghost",
    category: "CMS",
    region: "Global",
    status: "Live path",
    content: ["Blog post", "Newsletter post", "Page draft"],
    notes:
      "Useful for independent publishers, SaaS teams, and newsletters that need AI drafts moved into Ghost posts.",
    sourceName: "Ghost Admin API create post",
    sourceUrl: "https://docs.ghost.org/admin-api/posts/creating-a-post",
    officialSources: [
      {
        name: "Ghost Admin API create post",
        url: "https://docs.ghost.org/admin-api/posts/creating-a-post",
      },
      {
        name: "Ghost Admin API overview",
        url: "https://docs.ghost.org/admin-api",
      },
    ],
    userProblem:
      "Publishers and newsletters need AI drafts turned into Ghost posts with tags, authors, excerpts, and publish status without rebuilding the post manually.",
    workflow: [
      "Generate the source article, newsletter, or page copy.",
      "Convert it into Ghost-ready content with title, lexical or source HTML, tags, and publish status.",
      "Create a draft or published post through the Ghost Admin API after authentication is configured.",
    ],
    limits: [
      "Admin API credentials are required.",
      "HTML conversion to Ghost's editor format can be lossy, so important formatting needs review.",
      "Newsletter delivery and publish status should be confirmed before direct sending.",
    ],
    githubIssueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/3",
    lastReviewed: "2026-07-05",
  },
  {
    name: "Google Business Profile",
    category: "Social",
    region: "Global",
    status: "Live path",
    content: ["Local post", "Event", "Offer"],
    notes:
      "Useful for local businesses that need fresh Google Search and Maps updates from one AI publishing workflow.",
    sourceName: "Google Business Profile create posts guide",
    sourceUrl: "https://developers.google.com/my-business/content/posts-data",
    officialSources: [
      {
        name: "Google Business Profile create posts guide",
        url: "https://developers.google.com/my-business/content/posts-data",
      },
      {
        name: "Google Business Profile API help",
        url: "https://support.google.com/business/answer/6333473",
      },
    ],
    userProblem:
      "Local businesses need to keep Google Search and Maps profiles active with updates, offers, and events, but owners rarely want to write each post from scratch.",
    workflow: [
      "Create one local update, offer, event, or call-to-action message.",
      "Adapt it into a Google Business Profile post with text, image, schedule, offer, or CTA details.",
      "Create, edit, or delete posts through the Business Profile API after OAuth and location access are set up.",
    ],
    limits: [
      "OAuth credentials and Business Profile API access are required.",
      "Product posts cannot be created through the Google My Business API at this time.",
      "Location ownership, verification, and policy review can affect publishing.",
    ],
    githubIssueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/4",
    lastReviewed: "2026-07-05",
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
    notes:
      "High creator demand, but official publishing or draft-creation access still needs verification before direct support is promised.",
    sourceName: "Substack Developer API Terms",
    sourceUrl: "https://substack.com/api-tos",
    officialSources: [
      {
        name: "Substack Developer API Terms",
        url: "https://substack.com/api-tos",
      },
    ],
    userProblem:
      "Creators want one AI draft to become a Substack newsletter or post, but AI PubKit should not promise direct publishing until official technical access is clear.",
    workflow: [
      "Prepare a Substack-ready newsletter draft with title, subtitle, body, and publication notes.",
      "Track demand and official documentation for API access or draft creation.",
      "Keep direct one-click publishing marked as research until a stable official path is verified.",
    ],
    limits: [
      "The public API terms focus on authorized public data and permitted uses.",
      "A public official post publishing endpoint still needs verification.",
      "Unofficial APIs should not be treated as a reliable live path.",
    ],
    githubIssueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/6",
    lastReviewed: "2026-07-05",
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
    name: "LINE Official Account",
    category: "Community",
    region: "Regional",
    status: "Assisted",
    content: ["Text message", "Image message", "Broadcast"],
    notes:
      "Important for Japan, Taiwan, Thailand, and other LINE-heavy markets, with account setup and message quota checks.",
    sourceName: "LINE Messaging API send messages",
    sourceUrl: "https://developers.line.biz/en/docs/messaging-api/sending-messages/",
    officialSources: [
      {
        name: "LINE Messaging API setup",
        url: "https://developers.line.biz/en/docs/messaging-api/getting-started/",
      },
      {
        name: "LINE Messaging API send messages",
        url: "https://developers.line.biz/en/docs/messaging-api/sending-messages/",
      },
      {
        name: "LINE Messaging API pricing",
        url: "https://developers.line.biz/en/docs/messaging-api/pricing/",
      },
    ],
    userProblem:
      "Brands and communities in LINE-heavy markets need campaign updates turned into LINE-ready messages without manually rewriting every announcement.",
    workflow: [
      "Create one campaign update, launch note, service alert, or community message.",
      "Adapt it into LINE-ready text, image, or rich message content.",
      "Send through reply, push, multicast, narrowcast, or broadcast workflows when account setup and quotas allow it.",
    ],
    limits: [
      "A LINE Official Account and Messaging API channel are required.",
      "Push, multicast, broadcast, and narrowcast messages count against regional plan limits.",
      "Audience setup, user IDs, and user consent determine what can be sent safely.",
    ],
    githubIssueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/5",
    lastReviewed: "2026-07-05",
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
    name: "WhatsApp Business",
    category: "Community",
    region: "Global",
    status: "Assisted",
    content: ["Business message", "Template", "Media"],
    notes:
      "Important for customer communication, but sending requires opt-in, approved templates, and WhatsApp Business Platform setup.",
    sourceName: "WhatsApp Cloud API send messages",
    sourceUrl: "https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages",
  },
  {
    name: "Snapchat",
    category: "Social",
    region: "Global",
    status: "Researching",
    content: ["Spotlight brief", "Story copy", "Creative note"],
    notes:
      "Relevant for youth and creator campaigns, but direct general-purpose publishing needs more verification before it should be promised.",
  },
  {
    name: "Tumblr",
    category: "CMS",
    region: "Global",
    status: "Live path",
    content: ["Post", "Image", "Link"],
    notes:
      "Useful for fandom, visual posts, blogs, and niche communities that still need quick draft creation.",
    sourceName: "Tumblr API create post",
    sourceUrl: "https://www.tumblr.com/docs/en/api/v2",
  },
  {
    name: "Vimeo",
    category: "Video",
    region: "Global",
    status: "Live path",
    content: ["Video", "Description", "Privacy"],
    notes:
      "Useful for professional video hosting, portfolios, product demos, and client review libraries.",
    sourceName: "Vimeo API upload videos",
    sourceUrl: "https://developer.vimeo.com/api/upload/videos",
  },
  {
    name: "Mailchimp",
    category: "Newsletter",
    region: "Global",
    status: "Live path",
    content: ["Campaign", "Email draft", "Audience"],
    notes:
      "Useful when AI content should become an email campaign or newsletter draft, not only a social post.",
    sourceName: "Mailchimp Marketing API campaigns",
    sourceUrl: "https://mailchimp.com/developer/marketing/api/campaigns/",
  },
  {
    name: "Beehiiv",
    category: "Newsletter",
    region: "Global",
    status: "Assisted",
    content: ["Newsletter post", "Draft", "Audience"],
    notes:
      "Important for creator newsletters, but publication-specific API access and account setup should be checked before direct publishing.",
    sourceName: "Beehiiv API documentation",
    sourceUrl: "https://developers.beehiiv.com/docs/v2",
  },
  {
    name: "Amazon Seller Central",
    category: "Ecommerce",
    region: "Global",
    status: "Assisted",
    content: ["Product listing", "Marketplace copy", "A+ content"],
    notes:
      "High-value ecommerce destination for product copy, but listings require seller approval, catalog rules, compliance review, and SP-API setup.",
    sourceName: "Amazon Selling Partner API",
    sourceUrl: "https://developer-docs.amazon.com/sp-api/",
  },
  {
    name: "TikTok Shop",
    category: "Ecommerce",
    region: "Global",
    status: "Assisted",
    content: ["Product listing", "Shop video", "Commerce caption"],
    notes:
      "Strong social-commerce fit for short video and product listings, with seller, region, product, and policy checks.",
  },
  {
    name: "Etsy",
    category: "Ecommerce",
    region: "Global",
    status: "Assisted",
    content: ["Listing draft", "Product copy", "Tags"],
    notes:
      "Good fit for handmade, digital, and creator products; direct listing creation still needs shop authorization and review.",
    sourceName: "Etsy API create draft listing",
    sourceUrl: "https://developers.etsy.com/documentation/reference/#operation/createDraftListing",
  },
  {
    name: "eBay",
    category: "Ecommerce",
    region: "Global",
    status: "Assisted",
    content: ["Listing", "Inventory item", "Product copy"],
    notes:
      "Useful for marketplace sellers, but product data, inventory, shipping, category, and policy fields need careful review.",
    sourceName: "eBay Sell Inventory API",
    sourceUrl:
      "https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/createOrReplaceInventoryItem",
  },
  {
    name: "Walmart Marketplace",
    category: "Ecommerce",
    region: "US/EU",
    status: "Assisted",
    content: ["Item setup", "Product copy", "Marketplace feed"],
    notes:
      "Important for U.S. marketplace sellers, but item setup needs seller account, category, compliance, and feed validation.",
    sourceName: "Walmart Marketplace items API",
    sourceUrl: "https://developer.walmart.com/us-marketplace/docs/items",
  },
  {
    name: "WooCommerce",
    category: "Ecommerce",
    region: "Global",
    status: "Live path",
    content: ["Product", "Blog post", "Store copy"],
    notes:
      "Useful for independent ecommerce stores that need product pages, product updates, and blog drafts.",
    sourceName: "WooCommerce REST API products",
    sourceUrl: "https://woocommerce.github.io/woocommerce-rest-api-docs/#create-a-product",
  },
  {
    name: "BigCommerce",
    category: "Ecommerce",
    region: "Global",
    status: "Live path",
    content: ["Product", "Category page", "Store content"],
    notes:
      "Good fit for merchants that need AI-generated product content moved into a structured commerce catalog.",
    sourceName: "BigCommerce products API",
    sourceUrl: "https://developer.bigcommerce.com/docs/rest-catalog/products",
  },
  {
    name: "Shopee",
    category: "Ecommerce",
    region: "Regional",
    status: "Assisted",
    content: ["Product listing", "Shop copy", "Campaign copy"],
    notes:
      "Important for Southeast Asia ecommerce; seller authorization, category rules, and regional platform limits apply.",
  },
  {
    name: "Lazada",
    category: "Ecommerce",
    region: "Regional",
    status: "Assisted",
    content: ["Product listing", "Campaign copy", "Store update"],
    notes:
      "Useful for Southeast Asia marketplace workflows, with seller, catalog, and regional compliance checks.",
  },
  {
    name: "Mercado Libre",
    category: "Ecommerce",
    region: "Regional",
    status: "Assisted",
    content: ["Listing", "Product copy", "Catalog update"],
    notes:
      "Important for Latin America sellers; publishing should respect marketplace categories, shipping, and seller rules.",
    sourceName: "Mercado Libre API documentation",
    sourceUrl: "https://developers.mercadolibre.com.ar/en_us/api-docs",
  },
  {
    name: "AliExpress",
    category: "Ecommerce",
    region: "Global",
    status: "Researching",
    content: ["Product copy", "Marketplace listing", "Campaign copy"],
    notes:
      "Demand is clear for cross-border ecommerce content, but direct publishing support needs official seller API verification.",
  },
  {
    name: "Temu",
    category: "Ecommerce",
    region: "Global",
    status: "Researching",
    content: ["Product copy", "Marketplace content", "Campaign copy"],
    notes:
      "Important marketplace by traffic, but AI PubKit should validate merchant-side publishing access before promising direct support.",
  },
  {
    name: "SHEIN Marketplace",
    category: "Ecommerce",
    region: "Global",
    status: "Researching",
    content: ["Product listing", "Fashion copy", "Campaign copy"],
    notes:
      "Useful for fashion ecommerce demand tracking, with direct support dependent on seller program access and official documentation.",
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
  {
    name: "WeChat Channels",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Short video", "Caption", "Private-domain traffic"],
    notes:
      "Useful for China video and private-domain distribution, with account and platform review requirements.",
  },
  {
    name: "Weibo",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Post", "Campaign copy", "Trend topic"],
    notes:
      "Important for public conversation, announcements, and campaign amplification in China.",
  },
  {
    name: "Kuaishou",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Short video", "Live commerce copy", "Caption"],
    notes:
      "Important China short-video and live-commerce destination, especially outside only top-tier city audiences.",
  },
  {
    name: "Zhihu",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Answer", "Article", "Q&A draft"],
    notes:
      "Useful for long-form expertise, product education, and Chinese search/discovery questions.",
  },
  {
    name: "Toutiao",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Article", "Short post", "Headline"],
    notes:
      "Useful for newsfeed-style distribution and article repurposing in China's ByteDance ecosystem.",
  },
  {
    name: "Baidu Baijiahao",
    category: "China",
    region: "China",
    status: "Assisted",
    content: ["Article", "Video", "Search content"],
    notes:
      "Useful for Baidu-facing content distribution, article publishing, and search visibility in China.",
  },
  {
    name: "Taobao Tmall",
    category: "Ecommerce",
    region: "China",
    status: "Assisted",
    content: ["Product copy", "Store campaign", "Commerce content"],
    notes:
      "Important for China ecommerce, but publishing must respect merchant access, product compliance, and store rules.",
  },
  {
    name: "JD.com",
    category: "Ecommerce",
    region: "China",
    status: "Assisted",
    content: ["Product copy", "Store campaign", "Marketplace content"],
    notes:
      "Important for China marketplace sellers and brand stores, with catalog and merchant permission checks.",
  },
  {
    name: "Dewu Poizon",
    category: "Ecommerce",
    region: "China",
    status: "Researching",
    content: ["Product copy", "Lifestyle content", "Marketplace content"],
    notes:
      "Relevant for fashion, sneaker, beauty, and youth commerce content, but direct support needs official path validation.",
  },
];

export const connectorCount = connectors.length;
export const topConnectors = connectors;
