# App Registry

This registry tracks app destinations for one-click AI publishing.

The goal is not to claim that every platform allows full automation. The goal is
to give users a practical answer: direct publishing, assisted draft, or needs
research.

## Status Levels

| Status | Meaning |
| --- | --- |
| `Live path` | Official or stable publishing path exists and can be mapped for direct publishing after account connection and user confirmation. |
| `Assisted` | AI PubKit can prepare app-ready content, but publishing may require manual review, account approval, API tier checks, or platform-specific setup. |
| `Researching` | There is demand, but the publishing path is not clear enough to promise support. |

## Current Apps

| App | Region | Category | Status | Content | Reference |
| --- | --- | --- | --- | --- | --- |
| YouTube | Global | Video | Live path | Video, Shorts, Metadata | [YouTube Data API videos.insert](https://developers.google.com/youtube/v3/docs/videos/insert) |
| TikTok | Global | Video | Assisted | Short video, Caption, Schedule | [TikTok Content Posting API](https://developers.tiktok.com/products/content-posting-api/) |
| Instagram | Global | Social | Assisted | Image, Reels, Carousel | [Instagram Content Publishing API](https://developers.facebook.com/documentation/instagram-platform/content-publishing) |
| Facebook Pages | Global | Social | Live path | Post, Image, Video | [Meta Pages API posts](https://developers.facebook.com/documentation/pages-api/posts) |
| X | Global | Social | Assisted | Post, Thread, Media | [X API create post](https://docs.x.com/x-api/posts/create-post) |
| LinkedIn | Global | Social | Live path | Post, Article brief, Company update | [LinkedIn Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api) |
| Threads | Global | Social | Assisted | Post, Thread, Media | [Threads API posts](https://developers.facebook.com/documentation/threads/posts) |
| Pinterest | Global | Social | Live path | Pin, Image, Link | [Pinterest Create Pin API](https://developers.pinterest.com/docs/api/v5/pins-create/) |
| Reddit | Global | Community | Assisted | Post, Link, Comment draft | [Reddit API docs](https://www.reddit.com/dev/api/) |
| WordPress | Global | CMS | Live path | Article, Image, SEO fields | [WordPress REST API posts](https://developer.wordpress.org/rest-api/reference/posts/) |
| Shopify Blog | Global | CMS | Live path | Blog article, SEO post, Product education | [Shopify GraphQL Admin API articleCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate) |
| Notion | Global | CMS | Live path | Page, Database item, Content calendar | [Notion create page API](https://developers.notion.com/reference/post-page) |
| Ghost | Global | CMS | Live path | Blog post, Newsletter post, Page draft | [Ghost Admin API create post](https://docs.ghost.org/admin-api/posts/creating-a-post) |
| Google Business Profile | Global | Social | Live path | Local post, Event, Offer | [Google Business Profile create posts guide](https://developers.google.com/my-business/content/posts-data) |
| Medium | Global | CMS | Assisted | Article, Canonical link, Tags | [Medium API docs](https://github.com/Medium/medium-api-docs) |
| Bluesky | Global | Social | Live path | Post, Thread, Link | [Bluesky API create post guide](https://docs.bsky.app/docs/get-started) |
| Mastodon | Global | Social | Live path | Status, Media, Thread | [Mastodon statuses API](https://docs.joinmastodon.org/methods/statuses/) |
| Substack | US/EU | CMS | Researching | Newsletter, Post, Draft | [Substack Developer API Terms](https://substack.com/api-tos) |
| Webflow CMS | Global | CMS | Live path | CMS item, Article, Landing page | [Webflow CMS create items API](https://developers.webflow.com/data/reference/cms/collection-items/staged-items/create-items) |
| Telegram Channel | Global | Community | Live path | Message, Image, Link | [Telegram Bot API](https://core.telegram.org/bots/api) |
| LINE Official Account | Regional | Community | Assisted | Text message, Image message, Broadcast | [LINE Messaging API send messages](https://developers.line.biz/en/docs/messaging-api/sending-messages/) |
| Discord | Global | Community | Live path | Channel post, Announcement, Webhook | [Discord Webhook Resource](https://docs.discord.com/developers/resources/webhook) |
| Slack | Global | Community | Live path | Channel post, Announcement, Internal update | [Slack chat.postMessage API](https://docs.slack.dev/reference/methods/chat.postMessage) |
| Xiaohongshu | China | China | Assisted | Note, Image, Caption | Needs official publishing-path research |
| Douyin | China | China | Assisted | Short video, Caption, Schedule | Needs official publishing-path research |
| Bilibili | China | China | Assisted | Video, Title, Description | Needs official publishing-path research |
| WeChat Official Account | China | China | Assisted | Article, Draft, Media | Needs official publishing-path research |

## Contribution Notes

When proposing a new app or a status change, include:

- official API documentation link
- supported content types
- authentication and account requirements
- app review or approval requirements
- rate limits, media limits, and quota notes if known
- whether the safest workflow is direct publishing or assisted draft creation

Do not mark an app as `Live path` only because automation is possible through a
browser or unofficial workaround. A live path should be based on an official or
stable publishing mechanism.
