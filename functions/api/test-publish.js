const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function json(status, body) {
  return new Response(JSON.stringify(body), { status, headers });
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function required(body, key, label, maxLength = 2000) {
  const value = cleanText(body[key], maxLength);
  if (!value) {
    throw new Error(`${label} is required.`);
  }
  return value;
}

async function sendTelegram(body) {
  const botToken = required(body, "botToken", "Telegram bot token", 256).replace(/\s+/g, "");
  const chatId = required(body, "chatId", "Telegram channel or chat ID", 128);
  const message = required(body, "message", "Test message", 4000);

  if (!/^\d+:[A-Za-z0-9_-]+$/.test(botToken)) {
    return json(400, {
      ok: false,
      error: "Telegram bot token format looks wrong. Use a temporary test bot token from BotFather.",
    });
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      disable_web_page_preview: false,
    }),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.ok === false) {
    return json(502, {
      ok: false,
      error: cleanText(result.description, 500) || "Telegram rejected the test message.",
    });
  }

  return json(200, {
    ok: true,
    target: "telegram",
    messageId: result.result?.message_id,
    chatId,
  });
}

async function createWordPressDraft(body) {
  const siteUrl = required(body, "siteUrl", "WordPress site URL", 500);
  const username = required(body, "username", "WordPress username", 120);
  const applicationPassword = required(body, "applicationPassword", "WordPress application password", 256)
    .replace(/\s+/g, "");
  const title = required(body, "title", "Post title", 200);
  const content = required(body, "content", "Post content", 20000);
  const status = cleanText(body.status, 20) === "pending" ? "pending" : "draft";

  let base;
  try {
    base = new URL(siteUrl);
  } catch {
    return json(400, { ok: false, error: "WordPress site URL is invalid." });
  }

  if (base.protocol !== "https:") {
    return json(400, {
      ok: false,
      error: "Use an HTTPS WordPress test site before sending an application password.",
    });
  }

  const basePath = base.pathname === "/" ? "" : base.pathname.replace(/\/$/, "");
  const endpoint = `${base.origin}${basePath}/wp-json/wp/v2/posts`;
  const credentials = btoa(`${username}:${applicationPassword}`);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      status,
    }),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    return json(502, {
      ok: false,
      error:
        cleanText(result.message, 500) ||
        `WordPress returned HTTP ${response.status}. Check the site URL, user role, and application password.`,
    });
  }

  return json(200, {
    ok: true,
    target: "wordpress",
    id: result.id,
    status: result.status,
    link: result.link,
  });
}

function splitTags(value) {
  return String(value || "")
    .split(/[,，#\s]+/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function firstSentence(value, maxLength) {
  const text = String(value || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "";
  if (text.length <= maxLength) {
    return text.replace(/[，。,.!！?？、：:;；-]+$/g, "");
  }
  return `${text.slice(0, Math.max(1, maxLength - 1)).replace(/[，。,.!！?？、：:;；-]+$/g, "")}…`;
}

function createXiaohongshuPackage(body) {
  const sourceApp = cleanText(body.sourceApp, 80) || "AI source app";
  const assetType = cleanText(body.assetType, 80) || "AI content";
  const hook = required(body, "hook", "Core selling point", 160);
  const brief = required(body, "brief", "Content brief", 1200);
  const audience = cleanText(body.audience, 160) || "对这个主题感兴趣的人";
  const mediaNote = cleanText(body.mediaNote, 500);
  const inputTags = splitTags(body.tags);
  const tags = [
    ...inputTags,
    assetType.includes("视频") ? "AI视频" : "AI内容",
    "小红书运营",
    "内容分发",
    "一键发布",
  ]
    .filter(Boolean)
    .filter((tag, index, list) => list.indexOf(tag) === index)
    .slice(0, 8);

  const title = firstSentence(hook, 28);
  const opening = firstSentence(brief, 140);
  const bodyText = [
    opening,
    "",
    `来源：${sourceApp}`,
    `内容类型：${assetType}`,
    `适合人群：${audience}`,
    mediaNote ? `素材备注：${mediaNote}` : null,
    "",
    "发布前检查：封面文字清楚、首图/首帧能说明结果、正文不要夸大承诺，商业合作或 AI 生成内容按账号规则标注。",
    "",
    tags.map((tag) => `#${tag.replace(/^#/, "")}`).join(" "),
  ]
    .filter((line) => line !== null)
    .join("\n");

  return json(200, {
    ok: true,
    target: "xiaohongshu",
    mode: "assisted",
    title,
    body: bodyText,
    tags,
    checklist: [
      "当前是 Assisted 测试：生成发布稿，不登录、不代发小红书账号。",
      "如需官方直发，需要小红书开放平台资质、应用类目和相应权限。",
      "先把这份发布稿复制到测试账号或创作服务平台，再人工确认发布。",
    ],
    copyText: `标题：${title}\n\n正文：\n${bodyText}`,
  });
}

export async function onRequestPost({ request }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: "Request body must be JSON." });
  }

  try {
    if (body.target === "telegram") {
      return sendTelegram(body);
    }

    if (body.target === "wordpress") {
      return createWordPressDraft(body);
    }

    if (body.target === "xiaohongshu") {
      return createXiaohongshuPackage(body);
    }

    return json(400, { ok: false, error: "Choose telegram, wordpress, or xiaohongshu as the test target." });
  } catch (error) {
    return json(400, {
      ok: false,
      error: error instanceof Error ? error.message : "The test publish request is invalid.",
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers });
}
