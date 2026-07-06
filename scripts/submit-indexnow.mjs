const siteUrl = "https://aipubkit.com";
const host = "aipubkit.com";
const key = "d5efc19a72392815f9582565de0435d3";
const keyLocation = `${siteUrl}/${key}.txt`;
const endpoint = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const response = await fetch(`${siteUrl}/sitemap.xml`, {
    headers: {
      "Cache-Control": "no-cache",
      "User-Agent": "AI PubKit IndexNow submitter",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status}`);
  }

  const sitemap = await response.text();
  return [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(siteUrl));
}

async function submitUrls(urlList) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "AI PubKit IndexNow submitter",
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  });

  const text = await response.text();
  return {
    status: response.status,
    ok: response.ok || response.status === 202,
    text,
  };
}

const urls = await fetchSitemapUrls();
if (urls.length === 0) {
  throw new Error("No URLs found in sitemap.");
}

const result = await submitUrls(urls);
console.log(
  JSON.stringify(
    {
      endpoint,
      host,
      keyLocation,
      submittedUrlCount: urls.length,
      status: result.status,
      ok: result.ok,
      response: result.text,
    },
    null,
    2,
  ),
);

if (!result.ok) {
  process.exit(1);
}
