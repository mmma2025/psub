export default {
  async fetch(request, env, ctx) {
    const url = "https://raw.githubusercontent.com/mmma2025/psub/main/index.txt";

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Cloudflare-Worker"
      }
    });

    const text = await res.text();

    return new Response(text, {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }
};
