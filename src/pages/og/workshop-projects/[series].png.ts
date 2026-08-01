// OG/social share image, one per workshop project — mirrors /og/[...id].png
// for posts (src/pages/og/[...id].png.ts). Projects have no pillar field of
// their own; they're workshop-only for now, so the accent is always gold.
import { getCollection } from "astro:content";
import { renderOgImage, DEFAULT_ACCENT } from "../../../lib/ogImage";
import { getProjectStats } from "../../../lib/buildLog";

export async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({ params: { series: project.data.series }, props: { project } }));
}

export async function GET({ props }: { props: { project: Awaited<ReturnType<typeof getCollection<"projects">>>[number] } }) {
  const { project } = props;
  const stats = await getProjectStats(project);

  const png = await renderOgImage({
    title: project.data.title,
    titleFontSize: project.data.title.length > 55 ? 52 : 64,
    metaLine: `zack glaser · ${stats.totalChapters} chapters, ${stats.totalEntries} entries`,
    accent: DEFAULT_ACCENT,
    tagLabel: "workshop",
    eyebrow: "project",
  });

  return new Response(png, { headers: { "Content-Type": "image/png" } });
}
