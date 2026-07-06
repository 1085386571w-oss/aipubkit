export type AppUseCase = {
  appName: string;
  useCaseSlug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  directAnswer: string;
  sourceInput: string;
  outputs: string[];
  workflow: string[];
  limits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedUseCases: {
    label: string;
    url: string;
  }[];
};

export const appUseCases: AppUseCase[] = [
  {
    appName: "Facebook Pages",
    useCaseSlug: "ai-post-generator",
    keyword: "Facebook AI post generator",
    title: "Facebook AI post generator for Pages - AI PubKit",
    description:
      "Use AI PubKit as a Facebook AI post generator for Pages: create app-ready posts, captions, media notes, and review-ready publishing output.",
    h1: "Facebook AI post generator for business Pages.",
    directAnswer:
      "AI PubKit can act as a Facebook AI post generator for Pages by turning one source into Page-ready post copy, image or video notes, links, calls to action, and review fields. Direct publishing should use official Meta Pages API paths when the Page, app, permissions, and review requirements allow it.",
    sourceInput:
      "Start from a product update, local business announcement, article summary, promotion, event note, or AI-generated campaign brief.",
    outputs: [
      "Facebook Page post copy with a clear hook and call to action.",
      "Image, video, link, or offer notes for the Page publishing flow.",
      "Review checklist for brand voice, local details, links, and permission status.",
    ],
    workflow: [
      "Generate or import one source idea.",
      "Convert it into a Facebook Page-ready post with the right tone, link, and media notes.",
      "Check Page connection, permissions, and review status before direct publishing.",
      "Publish through a stable Pages path or save a ready-to-review draft.",
    ],
    limits: [
      "Facebook Page publishing requires the right Page access and platform permissions.",
      "A user profile post is different from a business Page post.",
      "AI PubKit should keep human review available for promotions, regulated topics, local claims, and paid campaigns.",
    ],
    faqs: [
      {
        question: "Can AI generate Facebook Page posts?",
        answer:
          "Yes. AI PubKit can generate Facebook Page-ready posts from one source, including copy, links, media notes, calls to action, and review fields.",
      },
      {
        question: "Can AI PubKit publish Facebook Page posts directly?",
        answer:
          "Facebook Pages are mapped as a direct publishing path in AI PubKit where official Pages API access, Page permissions, review, and account requirements are satisfied.",
      },
      {
        question: "What should a Facebook AI post generator create?",
        answer:
          "It should create Page-ready copy, media or link notes, a clear call to action, and a review checklist instead of only a generic caption.",
      },
    ],
    relatedUseCases: [
      {
        label: "Social media cross-posting",
        url: "/use-cases/social-media-cross-posting/",
      },
      {
        label: "AI content distribution",
        url: "/use-cases/ai-content-distribution/",
      },
    ],
  },
  {
    appName: "Instagram",
    useCaseSlug: "ai-post-generator",
    keyword: "Instagram AI post generator",
    title: "Instagram AI post generator for captions and Reels - AI PubKit",
    description:
      "Use AI PubKit as an Instagram AI post generator for captions, Reels briefs, carousel notes, hashtags, media guidance, and assisted publishing drafts.",
    h1: "Instagram AI post generator for captions, Reels, and carousels.",
    directAnswer:
      "AI PubKit can generate Instagram-ready captions, Reels briefs, carousel copy, hashtags, media notes, and assisted drafts. Direct Instagram publishing depends on account type, Meta platform setup, permissions, review, and content publishing requirements.",
    sourceInput:
      "Start from a product launch, creator idea, video script, campaign theme, image set, article summary, or AI-generated social brief.",
    outputs: [
      "Caption variants with hooks, hashtags, and calls to action.",
      "Reels or carousel brief with shot notes, slide copy, and cover text.",
      "Assisted publishing checklist for account type, media readiness, permissions, and review.",
    ],
    workflow: [
      "Create one source idea or import an existing campaign note.",
      "Generate Instagram-specific captions, Reels notes, hashtags, and carousel structure.",
      "Check account and content publishing requirements before promising direct posting.",
      "Stage a draft or publish when the account and platform path allow it.",
    ],
    limits: [
      "Instagram content publishing has account and platform requirements.",
      "Media assets must meet Instagram's supported formats and posting rules.",
      "AI-generated captions should be reviewed for claims, hashtags, brand voice, and disclosure needs.",
    ],
    faqs: [
      {
        question: "Can AI generate Instagram posts?",
        answer:
          "Yes. AI PubKit can generate Instagram captions, Reels briefs, carousel copy, hashtags, media notes, and draft checklists from one source idea.",
      },
      {
        question: "Can AI PubKit publish to Instagram in one click?",
        answer:
          "AI PubKit treats Instagram as assisted unless the account, Meta platform setup, permissions, review, and content publishing requirements allow direct posting.",
      },
      {
        question: "What should an Instagram AI post generator include?",
        answer:
          "It should include caption variants, hashtag ideas, Reels or carousel guidance, media notes, calls to action, and publishing-readiness checks.",
      },
    ],
    relatedUseCases: [
      {
        label: "Content repurposing tool",
        url: "/use-cases/content-repurposing-tool/",
      },
      {
        label: "Social media automation",
        url: "/use-cases/social-media-automation-tool/",
      },
    ],
  },
  {
    appName: "LinkedIn",
    useCaseSlug: "ai-post-generator",
    keyword: "LinkedIn AI post generator",
    title: "LinkedIn AI post generator for B2B posts - AI PubKit",
    description:
      "Use AI PubKit as a LinkedIn AI post generator for founder posts, company updates, hiring notes, article briefs, and B2B publishing workflows.",
    h1: "LinkedIn AI post generator for B2B publishing.",
    directAnswer:
      "AI PubKit can generate LinkedIn-ready posts from one source, including founder-led copy, company updates, article summaries, hiring posts, hashtags, and review notes. LinkedIn is mapped as a direct path where the right member or organization permissions and platform requirements are satisfied.",
    sourceInput:
      "Start from a product update, founder note, customer story, article, hiring brief, event recap, or AI-generated B2B campaign idea.",
    outputs: [
      "LinkedIn post draft with a professional hook, body, and call to action.",
      "Company update or founder post variants with hashtags and mention notes.",
      "Review checklist for claims, links, approvals, audience, and posting identity.",
    ],
    workflow: [
      "Create one B2B source idea or import an existing article or update.",
      "Generate LinkedIn-ready copy, hashtags, link notes, and optional company-post variants.",
      "Check member or organization permissions before publishing.",
      "Publish through an approved LinkedIn path or stage a draft for review.",
    ],
    limits: [
      "LinkedIn publishing depends on member or organization authorization and required permissions.",
      "Mentions, hashtags, documents, images, and organization posts may have separate requirements.",
      "Human review is recommended for hiring, financial, legal, medical, and customer-claim content.",
    ],
    faqs: [
      {
        question: "Can AI generate LinkedIn posts?",
        answer:
          "Yes. AI PubKit can generate LinkedIn-ready posts, company updates, founder posts, article summaries, hashtags, and review notes from one source.",
      },
      {
        question: "Can AI PubKit publish LinkedIn posts directly?",
        answer:
          "LinkedIn is mapped as a direct publishing path in AI PubKit when the user, organization, permissions, and platform requirements allow it.",
      },
      {
        question: "What should a LinkedIn AI post generator create?",
        answer:
          "It should create professional post variants, hooks, calls to action, hashtags, mention notes, approval checks, and optional company-update drafts.",
      },
    ],
    relatedUseCases: [
      {
        label: "AI content distribution",
        url: "/use-cases/ai-content-distribution/",
      },
      {
        label: "SocialBee alternative",
        url: "/compare/socialbee-alternative/",
      },
    ],
  },
  {
    appName: "YouTube",
    useCaseSlug: "repurpose-video-content",
    keyword: "repurpose video content for YouTube",
    title: "Repurpose video content for YouTube - AI PubKit",
    description:
      "Use AI PubKit to repurpose video content for YouTube with titles, descriptions, tags, Shorts notes, chapters, thumbnails, and publishing checks.",
    h1: "Repurpose video content for YouTube publishing.",
    directAnswer:
      "AI PubKit can repurpose a video idea, script, transcript, or source asset into YouTube-ready metadata: titles, descriptions, tags, chapters, Shorts notes, thumbnail prompts, and review checks. YouTube is mapped as a direct path where Data API upload and account requirements are satisfied.",
    sourceInput:
      "Start from a video script, webinar transcript, podcast notes, product demo, tutorial outline, livestream recap, or AI-generated video brief.",
    outputs: [
      "YouTube title options, descriptions, tags, chapters, and pinned-comment ideas.",
      "Shorts repurposing notes for hooks, cuts, captions, and call-to-action text.",
      "Publishing checklist for video file, metadata, visibility, playlist, thumbnail, and account status.",
    ],
    workflow: [
      "Import a script, transcript, raw video brief, or long-form content source.",
      "Generate YouTube metadata and Shorts repurposing assets.",
      "Check upload requirements, channel authorization, video file readiness, and review state.",
      "Publish through an approved YouTube upload path or stage metadata for review.",
    ],
    limits: [
      "YouTube uploads require channel authorization and video file readiness.",
      "Video metadata should respect policy, copyright, claims, category, visibility, and audience settings.",
      "AI PubKit should keep a human review step for thumbnails, sensitive claims, and monetized content.",
    ],
    faqs: [
      {
        question: "Can AI repurpose video content for YouTube?",
        answer:
          "Yes. AI PubKit can repurpose scripts, transcripts, demos, and long-form content into YouTube titles, descriptions, tags, chapters, Shorts notes, and publishing checklists.",
      },
      {
        question: "Can AI PubKit upload videos to YouTube?",
        answer:
          "YouTube is mapped as a direct path where the YouTube Data API upload flow, channel authorization, quota, and video file requirements are satisfied.",
      },
      {
        question: "What should YouTube video repurposing create?",
        answer:
          "It should create metadata, Shorts notes, chapters, thumbnails prompts, tags, descriptions, pinned-comment ideas, and review checks, not only a generic summary.",
      },
    ],
    relatedUseCases: [
      {
        label: "Content repurposing tool",
        url: "/use-cases/content-repurposing-tool/",
      },
      {
        label: "Repurpose.io alternative",
        url: "/compare/repurpose-io-alternative/",
      },
    ],
  },
  {
    appName: "TikTok",
    useCaseSlug: "repurpose-video-content",
    keyword: "repurpose video content for TikTok",
    title: "Repurpose video content for TikTok - AI PubKit",
    description:
      "Use AI PubKit to repurpose video content for TikTok with hooks, captions, cut notes, draft checks, and assisted publishing workflow.",
    h1: "Repurpose video content for TikTok drafts and posts.",
    directAnswer:
      "AI PubKit can repurpose scripts, transcripts, product demos, and longer videos into TikTok-ready hooks, captions, cut notes, cover text, and draft checks. TikTok is treated as assisted unless the account, app, API product, review, and posting requirements allow direct publishing.",
    sourceInput:
      "Start from a long video, YouTube script, webinar moment, podcast clip, product demo, creator idea, or AI-generated short-video brief.",
    outputs: [
      "TikTok hook options, caption variants, hashtags, and cover text.",
      "Cut notes for short clips, pacing, text overlays, and first-three-second framing.",
      "Assisted draft checklist for account, API approval, media restrictions, and creator review.",
    ],
    workflow: [
      "Import a script, transcript, long video idea, or creator content brief.",
      "Generate TikTok-specific hooks, captions, hashtags, shot notes, and draft instructions.",
      "Check account, app, API approval, media, and posting requirements.",
      "Create an assisted draft or publish only when the official posting path allows it.",
    ],
    limits: [
      "TikTok posting depends on developer app setup, account authorization, product access, and platform review.",
      "Media restrictions, creator settings, and regional requirements must be checked before direct posting.",
      "Human review is recommended for trend usage, music rights, claims, and brand safety.",
    ],
    faqs: [
      {
        question: "Can AI repurpose video content for TikTok?",
        answer:
          "Yes. AI PubKit can turn scripts, transcripts, demos, and long-form video ideas into TikTok hooks, captions, hashtags, cut notes, cover text, and draft checklists.",
      },
      {
        question: "Can AI PubKit publish TikTok videos directly?",
        answer:
          "AI PubKit treats TikTok as assisted unless the account, developer app, Content Posting API access, review, media requirements, and posting rules allow direct publishing.",
      },
      {
        question: "What should TikTok video repurposing create?",
        answer:
          "It should create short-video hooks, caption variants, cut notes, overlay guidance, hashtag ideas, cover text, and a publishing-readiness checklist.",
      },
    ],
    relatedUseCases: [
      {
        label: "Content repurposing tool",
        url: "/use-cases/content-repurposing-tool/",
      },
      {
        label: "AI content distribution",
        url: "/use-cases/ai-content-distribution/",
      },
    ],
  },
];
