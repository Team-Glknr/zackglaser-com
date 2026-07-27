// Fallback OG image for pages without a specific one (Hub, pillar pages,
// /about, /now, etc.) — no mockup covers this case, so no pillar tag or
// format eyebrow; copy is the brief's own tagline (§6/§12), not invented.
import { renderOgImage, DEFAULT_ACCENT } from "../../lib/ogImage";

export async function GET() {
  const png = await renderOgImage({
    title: "Taking things apart to see how they work.",
    metaLine: "zack glaser · legal tech advisor, runner, tinkerer",
    accent: DEFAULT_ACCENT,
  });

  return new Response(png, { headers: { "Content-Type": "image/png" } });
}
