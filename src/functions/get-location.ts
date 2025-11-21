export const onRequest = async ({ request }) => {
  const { cf } = request as any;

  const country = cf?.country || "unknown";
  const city = cf?.city || "unknown";
  const region = cf?.region || "unknown"; // UK county / US state etc.
  const postalCode = cf?.postalCode || "unknown";

  return new Response(
    JSON.stringify({ country, city, region, postalCode }),
    {
      headers: {
        "Content-Type": "application/json",
        // keep it cheap and fast, but not stale forever
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
};
