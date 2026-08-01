// Shared renderer for /og/*.png — docs/design-system/Social Share Image.dc.html.
// Satori (layout tree → SVG, no browser) + resvg (SVG → PNG). Colors/fonts are
// the dark-theme values from theme.css, copied literally — satori can't
// resolve CSS custom properties, so there's no automatic link to keep in sync.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

// Read directly from the source tree by cwd, not by import.meta.url — the
// compiled module gets relocated under dist/.prerender/chunks/ at build
// time, which breaks any path resolved relative to the module's own location.
const fontsDir = join(process.cwd(), "src/assets/og-fonts");
const literataItalic500 = readFileSync(join(fontsDir, "literata-italic-500.woff"));
const spaceMonoBold = readFileSync(join(fontsDir, "space-mono-bold.woff"));

export const NEUTRAL = { raised: "#211E1B", ink: "#edf0f2", inkSoft: "#a0a9b3" };
export const PILLAR_ACCENT: Record<string, string> = {
  "legal-tech": "#8C97BE",
  running: "#DE8F6C",
  workshop: "#d9a857",
  "field-notes": "#7FC2B2",
};
// "Default accent = workshop gold" — docs/05-favicon-marks.md §4.
export const DEFAULT_ACCENT = PILLAR_ACCENT.workshop;

interface OgImageParams {
  title: string;
  titleFontSize?: number;
  metaLine: string;
  accent: string;
  tagLabel?: string;
  eyebrow?: string;
}

export async function renderOgImage({
  title,
  titleFontSize = 64,
  metaLine,
  accent,
  tagLabel,
  eyebrow,
}: OgImageParams): Promise<Buffer> {
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
                        props: { style: { fontFamily: "Space Mono", fontWeight: 700, color: NEUTRAL.ink }, children: "glaser" },
                      },
                    ],
                  },
                },
                ...(tagLabel
                  ? [
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
                            tagLabel,
                          ],
                        },
                      },
                    ]
                  : []),
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: 20, maxWidth: 950 },
              children: [
                ...(eyebrow
                  ? [{ type: "div", props: { style: { fontFamily: "Space Mono", fontSize: 18, color: accent }, children: eyebrow } }]
                  : []),
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
                    children: title,
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
                { type: "div", props: { style: { fontFamily: "Space Mono", fontSize: 18, color: NEUTRAL.inkSoft }, children: metaLine } },
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

  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}
