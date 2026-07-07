# Customer UX Benchmark

Last reviewed: 2026-07-07

AI PubKit should be optimized from the customer's publishing job, not from the
site's internal data model.

## Sources Reviewed

- Buffer AI Assistant: https://buffer.com/ai-assistant
- Canva Content Planner: https://www.canva.com/pro/content-planner/
- Later content calendar: https://later.com/social-media-content-calendar/
- SocialBee Copilot: https://help.socialbee.com/hc/en-us/articles/29979132682391-Social-Media-Copilot-All-You-Need-to-Know
- Repurpose.io content distribution tool: https://repurpose.io/content-distribution-tool/
- Hootsuite social media management: https://www.hootsuite.com/
- Hootsuite approval workflow guide: https://blog.hootsuite.com/social-media-approval-workflow/
- Zapier Forms: https://zapier.com/forms
- TikTok Content Posting API: https://developers.tiktok.com/products/content-posting-api/
- YouTube Data API videos.insert: https://developers.google.com/youtube/v3/docs/videos/insert
- LinkedIn Posts API: https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api
- X API create post: https://docs.x.com/x-api/posts/create-post
- WordPress REST API posts: https://developer.wordpress.org/rest-api/reference/posts/
- ByteDance Seedance: https://seed.bytedance.com/en/seedance
- Google Gemini API video generation: https://ai.google.dev/gemini-api/docs/video
- Kling AI: https://kling.ai/
- Luma AI: https://luma.ai/
- OpenAI Sora status: https://openai.com/index/sora-2/

## Patterns Worth Copying

1. Start from a user job or template.
   - Buffer emphasizes brainstorming, rewriting, and platform-specific posts.
   - SocialBee Copilot starts from a strategy flow and generates platform
     recommendations, plans, and ready-to-edit posts.
   - AI PubKit should show quick-start templates before asking for manual input.

2. Give customers defaults.
   - Later and Canva reduce planning friction by centering the calendar and
     common social destinations.
   - AI PubKit should preselect common destinations and outputs for the
     composer while still letting users change them.

3. Show platform-specific previews.
   - Later emphasizes visual planning and previews.
   - Hootsuite and Buffer emphasize customized captions per platform.
   - AI PubKit should show scan-friendly destination cards, not only a long
     textarea.

4. Keep review and approval visible.
   - Hootsuite treats approval as a process before posts go live.
   - SocialBee lets users approve, draft, tag teammates, and leave notes.
   - AI PubKit should show direct, assisted, or researching status with the next
     action for each destination.

5. Treat media as a workflow input.
   - Repurpose.io makes video/audio distribution easier with workflow planning,
     resizing, templates, and automatic distribution.
   - AI PubKit should accept media URLs and generate the publishing package
     around those assets before building native media generation.

6. Explain connection readiness before asking for account access.
   - Official destination APIs differ sharply by account type, OAuth scope,
     approval, quota, media upload, and publishing limit.
   - AI PubKit should tell customers whether a destination is direct, assisted,
     or still researching before it asks them to connect an account.

7. Cover source apps by category and region, not only by one famous tool.
   - Seedance is important for AI video, especially because of ByteDance and
     TikTok adjacency, but it is not the only source app customers will use.
   - AI PubKit should also cover Google Veo/Gemini Omni, Kling AI, Luma, Pika,
     Runway, Hailuo, Vidu, Wan, Midjourney, Seedream, Adobe Firefly, Ideogram,
     Leonardo AI, FLUX/Stable Diffusion, ChatGPT, Claude, Gemini, Perplexity,
     HeyGen, Synthesia, ElevenLabs, Descript, Jasper, Copy.ai, and Notion AI.
   - Sora should be treated carefully as legacy or imported media unless an
     official path is available for the customer account.

## Implemented In This Iteration

- Quick-start workflow templates for short video launches, product updates,
  article repurposing, and image campaigns.
- Default destination and output selections in the AI publishing composer.
- Platform preview cards with app status, draft copy, metadata, checks, and
  next action.
- Expanded destination options for Threads, Pinterest, Reddit, Discord, and
  Slack.
- More concrete generated copy instead of only generic publishing advice.
- Source-app handoff fields for where the content starts and how it is sent to
  AI PubKit.
- Source app playbooks for writing, design, video, transcript, and media
  generator workflows.
- Source app cluster cards for global video, China/Asia video, image/design,
  writing/research, and avatar/audio workflows.
- Seedance was added as a first-class source app, alongside Kling AI, Google
  Veo/Gemini Omni, Luma AI, Hailuo, Vidu, Wan, Seedream, Adobe Firefly,
  Ideogram, Leonardo AI, FLUX/Stable Diffusion, Claude, Perplexity, HeyGen,
  Synthesia, Copy.ai, and Notion AI.
- Destination readiness cards for YouTube, TikTok, Instagram, LinkedIn, X, and
  WordPress.
