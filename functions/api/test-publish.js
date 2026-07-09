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

    return json(400, { ok: false, error: "Choose telegram or wordpress as the test target." });
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
