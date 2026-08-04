// OG/social share image, one per post — docs/design-system/Social Share Image.dc.html.
import { getCollection, type CollectionEntry } from "astro:content";
import { pillars } from "../../lib/pillars";
import { renderOgImage, PILLAR_ACCENT } from "../../lib/ogImage";

type OgEntry = CollectionEntry<"posts"> | CollectionEntry<"newsletter">;

export async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => data.status === "published");
  const issues = await getCollection("newsletter", ({ data }) => data.status === "published");
  return [...posts, ...issues].map((post) => ({ params: { id: post.id }, props: { post } }));
}

export async function GET({ props }: { props: { post: OgEntry } }) {
  const { post } = props;
  const pillarLabel = pillars.find((p) => p.id === post.data.pillar)?.label ?? post.data.pillar;
  const accent = PILLAR_ACCENT[post.data.pillar] ?? PILLAR_ACCENT["legal-tech"];
  const formatLabel = post.data.newsletter ? `${post.data.format} · issue ${post.data.newsletter}` : post.data.format;

  const png = await renderOgImage({
    title: post.data.title,
    titleFontSize: post.data.title.length > 55 ? 52 : 64,
    metaLine: `zack glaser · ${pillarLabel}`,
    accent,
    tagLabel: pillarLabel,
    eyebrow: formatLabel,
  });

  return new Response(png, { headers: { "Content-Type": "image/png" } });
}
