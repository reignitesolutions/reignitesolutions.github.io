// functions/get-location.ts

export const onRequest: PagesFunction = async ({ request }) => {
  try {
    // Cloudflare adds geo info to the request headers
    const country = request.headers.get("cf-ipcountry") || null;
    const region = request.headers.get("cf-region") || null;
    const city = request.headers.get("cf-ipcity") || null;

    return new Response(
      JSON.stringify({
        ok: true,
        country,
        region,
        city,
      }),
      {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false }),
      {
        status: 500,
        headers: { "content-type": "application/json; charset=utf-8" },
      }
    );
  }
};
