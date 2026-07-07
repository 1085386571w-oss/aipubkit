export type SourceAppCategory =
  | "Video"
  | "Image and design"
  | "Design"
  | "Writing and research";

export type SourceAppDestination = {
  app: string;
  status: "Live path" | "Assisted" | "Researching";
  useCase: string;
};

export type SourceApp = {
  slug: string;
  name: string;
  category: SourceAppCategory;
  region: "Global" | "China and Asia" | "US/EU";
  title: string;
  description: string;
  h1: string;
  lead: string;
  sourceType: string;
  creates: string[];
  customerProblem: string;
  handoffFields: string[];
  aiPubKitOutputs: string[];
  destinations: SourceAppDestination[];
  examplePackage: {
    source: string;
    sourceApp: string;
    sourceType: string;
    handoffMode: string;
    mediaUrl: string;
    audience: string;
    destinations: string[];
    requestedOutputs: string[];
  };
  keywords: string[];
  officialSources: {
    name: string;
    url: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const sourceApps: SourceApp[] = [
  {
    slug: "seedance",
    name: "Seedance",
    category: "Video",
    region: "China and Asia",
    title: "Seedance to TikTok, YouTube Shorts, and Reels - AI PubKit",
    description:
      "Turn Seedance AI videos into TikTok, YouTube Shorts, Instagram Reels, Douyin, Bilibili, and community-ready publishing packages.",
    h1: "Publish Seedance videos to TikTok, YouTube Shorts, Reels, and more.",
    lead:
      "Seedance is a high-demand AI video source app. AI PubKit turns a generated Seedance clip, prompt, and reference context into platform-ready captions, titles, thumbnails, alt text, and review checks.",
    sourceType: "AI video",
    creates: [
      "Text-to-video clips",
      "Image-to-video clips",
      "Multimodal video with reference assets",
      "Short-form campaign videos",
      "Social-ready AI video assets",
    ],
    customerProblem:
      "A customer can generate a strong Seedance video, but still has to rewrite the caption, title, thumbnail text, hashtags, rights notes, and review checklist for every platform.",
    handoffFields: [
      "Generated video URL or file reference",
      "Original prompt and negative prompt if available",
      "Reference images, video clips, audio clips, or style notes",
      "Duration, aspect ratio, resolution, and language",
      "Rights, likeness, IP, and disclosure notes",
      "Destination list and requested outputs",
    ],
    aiPubKitOutputs: [
      "TikTok caption and cover text",
      "YouTube Shorts title, description, tags, and thumbnail note",
      "Instagram Reels caption, alt text, and safe-zone checks",
      "Douyin and Bilibili draft notes for assisted review",
      "Cross-platform review checklist",
    ],
    destinations: [
      {
        app: "TikTok",
        status: "Assisted",
        useCase: "Short video draft, caption, cover text, and posting checks.",
      },
      {
        app: "YouTube",
        status: "Live path",
        useCase: "Shorts title, description, tags, thumbnail text, and upload review.",
      },
      {
        app: "Instagram",
        status: "Assisted",
        useCase: "Reels caption, alt text, cover frame, and account checks.",
      },
      {
        app: "Douyin",
        status: "Assisted",
        useCase: "China-market short video package with manual review notes.",
      },
      {
        app: "Bilibili",
        status: "Assisted",
        useCase: "Title, description, tags, cover note, and publishing checklist.",
      },
      {
        app: "LinkedIn",
        status: "Live path",
        useCase: "B2B teaser copy, launch note, and review-ready post.",
      },
    ],
    examplePackage: {
      source: "A 12-second Seedance product teaser for a skincare launch.",
      sourceApp: "Seedance",
      sourceType: "Video or audio",
      handoffMode: "Stable media URL",
      mediaUrl: "https://cdn.example.com/seedance-launch.mp4",
      audience: "beauty creators and ecommerce buyers",
      destinations: ["TikTok", "YouTube", "Instagram", "LinkedIn"],
      requestedOutputs: [
        "Captions",
        "Titles and descriptions",
        "Hashtags",
        "Cover or thumbnail text",
        "Alt text",
        "Review checklist",
      ],
    },
    keywords: [
      "Seedance to TikTok",
      "Seedance to YouTube Shorts",
      "Seedance video distribution",
      "Seedance one-click publishing",
      "Seedance AI video publishing",
      "Seedance 一键发布",
      "AI视频多平台分发",
    ],
    officialSources: [
      {
        name: "ByteDance Seedance",
        url: "https://seed.bytedance.com/en/seedance",
      },
      {
        name: "Seedance 2.0 official launch",
        url: "https://seed.bytedance.com/en/blog/official-launch-of-seedance-2-0",
      },
    ],
    faqs: [
      {
        question: "Can AI PubKit publish Seedance videos in one click?",
        answer:
          "AI PubKit can prepare a Seedance video for multiple destinations from one workflow. Direct publishing depends on each destination, while TikTok, Instagram, Douyin, and Bilibili may require assisted drafts, account approval, or manual review.",
      },
      {
        question: "What should Seedance send to AI PubKit?",
        answer:
          "Seedance should send the generated video URL, prompt, reference assets, duration, aspect ratio, rights notes, destination list, and requested outputs.",
      },
    ],
  },
  {
    slug: "kling-ai",
    name: "Kling AI",
    category: "Video",
    region: "China and Asia",
    title: "Kling AI video distribution to TikTok and YouTube - AI PubKit",
    description:
      "Create a platform-ready publishing package from Kling AI videos for TikTok, YouTube Shorts, Instagram Reels, LinkedIn, Douyin, and Bilibili.",
    h1: "Turn Kling AI videos into multi-platform publishing packages.",
    lead:
      "Kling AI is a major AI video source app. AI PubKit helps convert generated Kling videos into destination-specific copy, metadata, thumbnail notes, and review steps.",
    sourceType: "AI video",
    creates: [
      "Text-to-video clips",
      "Image-to-video clips",
      "AI image and sound assets",
      "Campaign videos",
      "Short social clips",
    ],
    customerProblem:
      "Kling AI can create the video asset, but customers still need a clean way to move that asset into platform-specific publishing workflows.",
    handoffFields: [
      "Generated Kling video URL or file",
      "Prompt, reference image, audio, and style context",
      "Duration, aspect ratio, language, and cover frame",
      "Brand safety, disclosure, and rights notes",
      "Destination list and requested outputs",
    ],
    aiPubKitOutputs: [
      "TikTok and Reels captions",
      "YouTube Shorts title, description, and tags",
      "LinkedIn launch teaser",
      "Douyin and Bilibili review notes",
      "Cross-platform media checklist",
    ],
    destinations: [
      { app: "TikTok", status: "Assisted", useCase: "Caption, cover text, and account review." },
      { app: "YouTube", status: "Live path", useCase: "Shorts metadata and upload checklist." },
      { app: "Instagram", status: "Assisted", useCase: "Reels caption, alt text, and cover frame." },
      { app: "LinkedIn", status: "Live path", useCase: "Professional launch post and video notes." },
      { app: "Douyin", status: "Assisted", useCase: "Regional short video draft and review notes." },
      { app: "Bilibili", status: "Assisted", useCase: "Video title, tags, cover note, and description." },
    ],
    examplePackage: {
      source: "A Kling AI product demo clip showing a new travel backpack in motion.",
      sourceApp: "Kling AI",
      sourceType: "Video or audio",
      handoffMode: "Stable media URL",
      mediaUrl: "https://cdn.example.com/kling-backpack-demo.mp4",
      audience: "travel creators and ecommerce buyers",
      destinations: ["TikTok", "YouTube", "Instagram", "LinkedIn"],
      requestedOutputs: [
        "Captions",
        "Titles and descriptions",
        "Hashtags",
        "Cover or thumbnail text",
        "Review checklist",
      ],
    },
    keywords: [
      "Kling AI video distribution",
      "Kling AI to TikTok",
      "Kling AI to YouTube Shorts",
      "Kling AI one-click publishing",
      "AI video repurposing tool",
    ],
    officialSources: [
      {
        name: "Kling AI",
        url: "https://kling.ai/",
      },
    ],
    faqs: [
      {
        question: "Can Kling AI videos be distributed through AI PubKit?",
        answer:
          "Yes. AI PubKit can turn a Kling AI video into platform-ready publishing packages, while direct posting still depends on each destination's API, account permissions, and review rules.",
      },
      {
        question: "Which platforms fit Kling AI videos?",
        answer:
          "Kling AI videos fit TikTok, YouTube Shorts, Instagram Reels, LinkedIn, Douyin, Bilibili, and community channels when each destination gets adapted captions, metadata, and review checks.",
      },
    ],
  },
  {
    slug: "google-veo",
    name: "Google Veo",
    category: "Video",
    region: "Global",
    title: "Google Veo to Instagram Reels, Shorts, and TikTok - AI PubKit",
    description:
      "Prepare Google Veo and Gemini video outputs for Instagram Reels, YouTube Shorts, TikTok, LinkedIn, WordPress, and social distribution.",
    h1: "Publish Google Veo videos across social and CMS channels.",
    lead:
      "Google Veo and Gemini video workflows can produce high-quality video assets. AI PubKit turns those assets into destination-ready publishing copy, metadata, and review checks.",
    sourceType: "AI video",
    creates: [
      "Generated video from text prompts",
      "Generated video from image references",
      "Video assets with audio",
      "Campaign clips",
      "Short-form social video",
    ],
    customerProblem:
      "A team using Google Veo still needs a practical handoff from the generated video into Shorts, Reels, TikTok, LinkedIn, and CMS workflows.",
    handoffFields: [
      "Generated video URL or export",
      "Prompt, image reference, and generation settings",
      "Duration, aspect ratio, resolution, and audio notes",
      "Audience, campaign, language, and brand notes",
      "Destination list and requested outputs",
    ],
    aiPubKitOutputs: [
      "Instagram Reels caption and safe-zone checks",
      "YouTube Shorts title, description, tags, and thumbnail note",
      "TikTok caption and cover text",
      "LinkedIn post copy",
      "CMS article or landing-page draft notes",
    ],
    destinations: [
      { app: "YouTube", status: "Live path", useCase: "Shorts metadata and upload checklist." },
      { app: "Instagram", status: "Assisted", useCase: "Reels caption, alt text, and account review." },
      { app: "TikTok", status: "Assisted", useCase: "Short video draft, caption, and cover text." },
      { app: "LinkedIn", status: "Live path", useCase: "B2B video teaser and company update." },
      { app: "WordPress", status: "Live path", useCase: "Video landing page or article draft." },
    ],
    examplePackage: {
      source: "A Google Veo video showing a founder explaining a new AI publishing workflow.",
      sourceApp: "Google Veo / Gemini Omni",
      sourceType: "Video or audio",
      handoffMode: "Stable media URL",
      mediaUrl: "https://cdn.example.com/veo-founder-video.mp4",
      audience: "SaaS founders and content teams",
      destinations: ["YouTube", "Instagram", "TikTok", "LinkedIn", "WordPress"],
      requestedOutputs: [
        "Captions",
        "Titles and descriptions",
        "Hashtags",
        "Cover or thumbnail text",
        "CMS article draft",
        "Review checklist",
      ],
    },
    keywords: [
      "Google Veo to Instagram Reels",
      "Google Veo to YouTube Shorts",
      "Veo video distribution",
      "publish AI video to multiple platforms",
      "Gemini Omni video publishing",
    ],
    officialSources: [
      {
        name: "Google AI video generation",
        url: "https://ai.google.dev/gemini-api/docs/video",
      },
      {
        name: "Google Veo documentation",
        url: "https://ai.google.dev/gemini-api/docs/veo",
      },
    ],
    faqs: [
      {
        question: "Can AI PubKit publish Google Veo videos to Instagram Reels?",
        answer:
          "AI PubKit can prepare a Google Veo video for Instagram Reels with caption, alt text, cover frame, and review checks. Direct publishing still depends on Meta account setup and content publishing requirements.",
      },
      {
        question: "What does Google Veo need to send to AI PubKit?",
        answer:
          "A Veo workflow should send the exported video, prompt, reference assets, duration, aspect ratio, audio notes, destination list, and requested publishing outputs.",
      },
    ],
  },
  {
    slug: "runway",
    name: "Runway",
    category: "Video",
    region: "Global",
    title: "Runway AI video publishing workflow - AI PubKit",
    description:
      "Turn Runway AI videos into TikTok, YouTube Shorts, Instagram Reels, LinkedIn, WordPress, and community-ready publishing packages.",
    h1: "Move Runway videos into platform-ready publishing workflows.",
    lead:
      "Runway is a common AI video source for creators, agencies, and product teams. AI PubKit helps package the generated video for each destination instead of copy-pasting one caption everywhere.",
    sourceType: "AI video",
    creates: [
      "AI generated video",
      "Image-to-video assets",
      "Consistent character and scene clips",
      "Product demo clips",
      "Campaign video assets",
    ],
    customerProblem:
      "Runway can create the video, but customers still need captions, video metadata, review notes, thumbnail text, and platform-specific versions.",
    handoffFields: [
      "Runway video export URL or file",
      "Prompt, reference image, and generation notes",
      "Duration, aspect ratio, language, and cover frame",
      "Brand, rights, and disclosure notes",
      "Target platforms and output types",
    ],
    aiPubKitOutputs: [
      "Short video captions",
      "YouTube title and description",
      "Instagram Reels notes",
      "LinkedIn video post",
      "CMS draft or campaign summary",
    ],
    destinations: [
      { app: "TikTok", status: "Assisted", useCase: "Short video caption and cover text." },
      { app: "YouTube", status: "Live path", useCase: "Shorts metadata, tags, and thumbnail note." },
      { app: "Instagram", status: "Assisted", useCase: "Reels caption and account review." },
      { app: "LinkedIn", status: "Live path", useCase: "Video launch note and B2B context." },
      { app: "WordPress", status: "Live path", useCase: "Video article or campaign landing page." },
    ],
    examplePackage: {
      source: "A Runway product teaser showing an AI publishing workflow in motion.",
      sourceApp: "Runway",
      sourceType: "Video or audio",
      handoffMode: "Stable media URL",
      mediaUrl: "https://cdn.example.com/runway-publishing-teaser.mp4",
      audience: "marketers and creator teams",
      destinations: ["TikTok", "YouTube", "Instagram", "LinkedIn"],
      requestedOutputs: [
        "Captions",
        "Titles and descriptions",
        "Hashtags",
        "Cover or thumbnail text",
        "Review checklist",
      ],
    },
    keywords: [
      "Runway AI video publishing",
      "Runway to TikTok",
      "Runway to YouTube Shorts",
      "Runway video distribution",
      "AI video distribution",
    ],
    officialSources: [
      {
        name: "Runway Gen-4",
        url: "https://runwayml.com/research/introducing-runway-gen-4",
      },
    ],
    faqs: [
      {
        question: "Can AI PubKit distribute Runway videos?",
        answer:
          "Yes. AI PubKit can prepare Runway videos for multiple destinations with platform-specific captions, titles, descriptions, hashtags, thumbnail notes, and review checks.",
      },
      {
        question: "Is Runway a destination app or source app?",
        answer:
          "In AI PubKit, Runway is treated as a source app because the content starts there and then moves toward publishing destinations such as TikTok, YouTube, Instagram, LinkedIn, or WordPress.",
      },
    ],
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "Image and design",
    region: "Global",
    title: "Midjourney image publishing to Pinterest and Instagram - AI PubKit",
    description:
      "Turn Midjourney images into Pinterest, Instagram, Facebook Pages, WordPress, LinkedIn, and campaign-ready publishing packages.",
    h1: "Publish Midjourney images to Pinterest, Instagram, and campaign channels.",
    lead:
      "Midjourney is a source app for generated images. AI PubKit turns each image, prompt, and campaign note into platform-specific captions, alt text, pin descriptions, cover text, and review checks.",
    sourceType: "AI image",
    creates: [
      "Generated images",
      "Campaign visuals",
      "Concept art",
      "Product mood boards",
      "Social media creative",
    ],
    customerProblem:
      "Customers generate strong Midjourney visuals but still need alt text, Pinterest descriptions, Instagram captions, CMS image notes, rights notes, and platform-specific calls to action.",
    handoffFields: [
      "Image URL, exported file, or image collection",
      "Prompt, image prompt, style, and parameters",
      "Campaign, brand voice, audience, and language",
      "Rights, likeness, and usage notes",
      "Target platforms and requested outputs",
    ],
    aiPubKitOutputs: [
      "Instagram caption and alt text",
      "Pinterest pin title and description",
      "Facebook Page copy",
      "WordPress image note and article section",
      "LinkedIn visual post",
    ],
    destinations: [
      { app: "Instagram", status: "Assisted", useCase: "Caption, alt text, and media review." },
      { app: "Pinterest", status: "Live path", useCase: "Pin title, description, board fit, and link note." },
      { app: "Facebook Pages", status: "Live path", useCase: "Page post, image note, and CTA." },
      { app: "WordPress", status: "Live path", useCase: "Article image, alt text, and featured image note." },
      { app: "LinkedIn", status: "Live path", useCase: "Professional image post and campaign note." },
    ],
    examplePackage: {
      source: "A Midjourney image showing a premium cafe seasonal drink campaign.",
      sourceApp: "Midjourney",
      sourceType: "Image or design",
      handoffMode: "Stable media URL",
      mediaUrl: "https://cdn.example.com/midjourney-cafe-campaign.jpg",
      audience: "local customers and food creators",
      destinations: ["Instagram", "Pinterest", "Facebook Pages", "WordPress"],
      requestedOutputs: [
        "Captions",
        "Hashtags",
        "Cover or thumbnail text",
        "Alt text",
        "CMS article draft",
        "Review checklist",
      ],
    },
    keywords: [
      "Midjourney image publishing",
      "Midjourney to Pinterest",
      "Midjourney to Instagram",
      "AI image distribution",
      "AI image publishing workflow",
    ],
    officialSources: [
      {
        name: "Midjourney documentation",
        url: "https://docs.midjourney.com/hc/en-us/categories/32013335627533-Documentation",
      },
      {
        name: "Midjourney image prompts",
        url: "https://docs.midjourney.com/hc/en-us/articles/32040250122381-Image-Prompts",
      },
    ],
    faqs: [
      {
        question: "Can AI PubKit publish Midjourney images?",
        answer:
          "AI PubKit can prepare Midjourney images for publishing by generating captions, alt text, Pinterest pin descriptions, CMS notes, and review checks. Direct publishing depends on each destination.",
      },
      {
        question: "What should Midjourney content include before handoff?",
        answer:
          "A Midjourney handoff should include the image URL or export, prompt, parameters, campaign context, usage rights notes, target destinations, and requested outputs.",
      },
    ],
  },
  {
    slug: "canva",
    name: "Canva",
    category: "Design",
    region: "Global",
    title: "Canva design distribution to social platforms - AI PubKit",
    description:
      "Turn Canva designs and AI-generated social assets into publishing packages for Instagram, Pinterest, Facebook Pages, LinkedIn, WordPress, Slack, and more.",
    h1: "Distribute Canva designs through AI PubKit publishing workflows.",
    lead:
      "Canva already helps users design and plan content. AI PubKit complements that by turning Canva designs into open, destination-aware publishing packages for teams, source apps, and AI answer workflows.",
    sourceType: "Design",
    creates: [
      "Social media designs",
      "Campaign graphics",
      "Presentations and posters",
      "Short video or design exports",
      "AI-generated layouts and social posts",
    ],
    customerProblem:
      "A Canva user may have the finished design but still needs destination-specific captions, alt text, posting notes, CMS context, approval checks, and open app routing outside a single planning tool.",
    handoffFields: [
      "Canva design export URL or public asset URL",
      "Visible text, campaign goal, and brand voice",
      "Design type, aspect ratio, and language",
      "Destination list and requested outputs",
      "Review, approval, and rights notes",
    ],
    aiPubKitOutputs: [
      "Instagram and Facebook captions",
      "Pinterest pin title and description",
      "LinkedIn post copy",
      "WordPress campaign draft",
      "Slack or Discord approval handoff",
    ],
    destinations: [
      { app: "Instagram", status: "Assisted", useCase: "Caption, alt text, visual review, and account checks." },
      { app: "Pinterest", status: "Live path", useCase: "Pin title, description, board fit, and link." },
      { app: "Facebook Pages", status: "Live path", useCase: "Page post, image note, and CTA." },
      { app: "LinkedIn", status: "Live path", useCase: "Business post and campaign context." },
      { app: "WordPress", status: "Live path", useCase: "Article image, featured image, and CMS notes." },
      { app: "Slack", status: "Live path", useCase: "Internal approval handoff." },
    ],
    examplePackage: {
      source: "A Canva carousel design for a product update campaign.",
      sourceApp: "Canva",
      sourceType: "Image or design",
      handoffMode: "Stable media URL",
      mediaUrl: "https://cdn.example.com/canva-product-carousel.png",
      audience: "SaaS users and product teams",
      destinations: ["Instagram", "Pinterest", "Facebook Pages", "LinkedIn", "Slack"],
      requestedOutputs: [
        "Captions",
        "Hashtags",
        "Alt text",
        "CMS article draft",
        "Review checklist",
      ],
    },
    keywords: [
      "Canva design distribution",
      "Canva to Instagram",
      "Canva to Pinterest",
      "Canva social media publishing",
      "AI design distribution",
    ],
    officialSources: [
      {
        name: "Canva social media design",
        url: "https://www.canva.com/social-media/",
      },
      {
        name: "Canva Content Planner",
        url: "https://www.canva.com/learn/using-canva-content-planner-social-content/",
      },
      {
        name: "Canva Magic Design",
        url: "https://www.canva.com/magic-design/",
      },
    ],
    faqs: [
      {
        question: "Does AI PubKit replace Canva Content Planner?",
        answer:
          "No. Canva is a strong design and planning app. AI PubKit focuses on open source-app handoff, destination-aware publishing packages, and app status data for workflows that extend beyond one tool.",
      },
      {
        question: "What should Canva send to AI PubKit?",
        answer:
          "A Canva handoff should include the design export URL, visible text, campaign goal, brand notes, aspect ratio, destination list, and requested outputs such as captions, alt text, pin descriptions, and approval checks.",
      },
    ],
  },
];
