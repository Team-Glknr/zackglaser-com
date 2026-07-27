// OG/social share image — docs/design-system/Social Share Image.dc.html.
// One PNG per published post, generated at build time via satori (renders a
// React-like element tree to SVG — no browser needed, safe in Vercel's build
// environment) + resvg (SVG → PNG). Colors/fonts are the dark-theme values
// from theme.css, copied literally since satori can't resolve CSS variables.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { pillars } from "../../lib/pillars";

// Read directly from the source tree by cwd, not by import.meta.url — the
// compiled module gets relocated under dist/.prerender/chunks/ at build
// time, which breaks any path resolved relative to the module's own location.
const fontsDir = join(process.cwd(), "src/assets/og-fonts");
const literataItalic500 = readFileSync(join(fontsDir, "literata-italic-500.woff"));
const spaceMonoBold = readFileSync(join(fontsDir, "space-mono-bold.woff"));

const NEUTRAL = { raised: "#1f242a", ink: "#edf0f2", inkSoft: "#98a2ac" };
const PILLAR_ACCENT: Record<string, string> = {
  "legal-tech": "#7c9bdb",
  running: "#e1726c",
  workshop: "#d9a857",
  "field-notes": "#6fbb94",
};

export async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => data.status === "published");
  return posts.map((post) => ({ params: { id: post.id }, props: { post } }));
}

export async function GET({ props }: { props: { post: Awaited<ReturnType<typeof getCollection>>[number] } }) {
  const { post } = props;
  const pillarLabel = pillars.find((p) => p.id === post.data.pillar)?.label ?? post.data.pillar;
  const accent = PILLAR_ACCENT[post.data.pillar] ?? PILLAR_ACCENT["legal-tech"];
  const formatLabel = post.data.newsletter ? `${post.data.format} · issue ${post.data.newsletter}` : post.data.format;
  const titleFontSize = post.data.title.length > 55 ? 52 : 64;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 1200,
          height: 630,
          padding: 64,
          background: NEUTRAL.raised,
          position: "relative",
        },
        children: [
          {
            type: "div",
            props: {
              style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
              children: [
                {
                  type: "div",
                  props: {
                    style: { display: "flex", fontSize: 28 },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: { fontFamily: "Literata", fontStyle: "italic", fontWeight: 500, color: NEUTRAL.ink },
                          children: "zack",
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: { fontFamily: "Space Mono", fontWeight: 700, color: NEUTRAL.ink },
                          children: "glaser",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Space Mono",
                      fontSize: 20,
                      color: NEUTRAL.ink,
                      border: `2px solid ${accent}`,
                      borderRadius: 999,
                      padding: "8px 20px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: { width: 12, height: 12, borderRadius: "50%", background: accent, marginRight: 12 },
                        },
                      },
                      pillarLabel,
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: 20, maxWidth: 950 },
              children: [
                { type: "div", props: { style: { fontFamily: "Space Mono", fontSize: 18, color: accent }, children: formatLabel } },
                {
                  type: "div",
                  props: {
                    style: {
                      fontFamily: "Literata",
                      fontStyle: "italic",
                      fontWeight: 500,
                      fontSize: titleFontSize,
                      lineHeight: 1.15,
                      color: NEUTRAL.ink,
                    },
                    children: post.data.title,
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" },
              children: [
                {
                  type: "div",
                  props: { style: { fontFamily: "Space Mono", fontSize: 18, color: NEUTRAL.inkSoft }, children: `zack glaser · ${pillarLabel}` },
                },
                { type: "div", props: { style: { fontFamily: "Space Mono", fontSize: 18, color: NEUTRAL.inkSoft }, children: "zackglaser.com" } },
              ],
            },
          },
          {
            type: "div",
            props: { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 10, background: accent } },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Literata", data: literataItalic500, weight: 500, style: "italic" },
        { name: "Space Mono", data: spaceMonoBold, weight: 700, style: "normal" },
      ],
    },
  );

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
}
