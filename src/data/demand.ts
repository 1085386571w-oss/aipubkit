export type DemandStage = "Requested" | "Researching" | "Ready to map";

export type DemandItem = {
  name: string;
  category: "App request" | "Platform research" | "Registry";
  region: string;
  stage: DemandStage;
  customerNeed: string;
  issueUrl: string;
  pageUrl?: string;
};

export const demandItems: DemandItem[] = [
  {
    name: "Shopify Blog",
    category: "App request",
    region: "Global",
    stage: "Ready to map",
    customerNeed:
      "Ecommerce teams need AI-generated buying guides, launch posts, and product education inside Shopify.",
    issueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/1",
    pageUrl: "/apps/shopify-blog/",
  },
  {
    name: "Notion",
    category: "App request",
    region: "Global",
    stage: "Ready to map",
    customerNeed:
      "Teams need AI drafts moved into Notion pages, databases, and content calendars without manual copy-paste.",
    issueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/2",
    pageUrl: "/apps/notion/",
  },
  {
    name: "Ghost",
    category: "App request",
    region: "Global",
    stage: "Ready to map",
    customerNeed:
      "Publishers need AI articles and newsletters turned into Ghost posts with tags, authors, and publish status.",
    issueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/3",
    pageUrl: "/apps/ghost/",
  },
  {
    name: "Google Business Profile",
    category: "App request",
    region: "Global",
    stage: "Ready to map",
    customerNeed:
      "Local businesses need AI-generated updates, events, offers, and CTA posts for Google Search and Maps.",
    issueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/4",
    pageUrl: "/apps/google-business-profile/",
  },
  {
    name: "LINE Official Account",
    category: "App request",
    region: "Regional",
    stage: "Requested",
    customerNeed:
      "Brands in LINE-heavy markets need campaign updates adapted into LINE-ready messages.",
    issueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/5",
    pageUrl: "/apps/line-official-account/",
  },
  {
    name: "Substack",
    category: "Platform research",
    region: "US/EU",
    stage: "Researching",
    customerNeed:
      "Creators want AI newsletter drafts for Substack, but the official publishing path needs verification.",
    issueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/6",
    pageUrl: "/apps/substack/",
  },
  {
    name: "Machine-readable app registry JSON",
    category: "Registry",
    region: "Global",
    stage: "Ready to map",
    customerNeed:
      "AI assistants and external builders should read app support data without scraping HTML.",
    issueUrl: "https://github.com/1085386571w-oss/aipubkit/issues/7",
    pageUrl: "/apps.json",
  },
];
