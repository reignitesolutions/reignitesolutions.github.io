export const onRequest = async ({ request }) => {
  const { cf } = request as any;

  const country = cf?.country || "unknown";
  const city = cf?.city || "unknown";
  const region = cf?.region || "unknown";
  const postalCode = cf?.postalCode || "unknown";

  return new Response(
    JSON.stringify({ country, city, region, postalCode }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
};