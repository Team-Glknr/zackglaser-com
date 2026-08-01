// OG/social share image, one per workshop chapter — mirrors /og/[...id].png
// for posts and /og/workshop-projects/[series].png for project rollups.
// Route params match the page route (src/pages/workshop/[series]/chapters/[chapter].astro).
import { getCollection } from "astro:content";
import { renderOgImage, DEFAULT_ACCENT } from "../../../../lib/ogImage";
import { chapterRange } from "../../../../lib/buildLog";

export async function getStaticPaths() {
  const chapters = await getCollection("chapters");
  const projects = await getCollection("projects");

  return chapters.map((chapter) => {
    const project = projects.find((p) => p.data.series === chapter.data.project)!;
    return {
      params: { series: chapter.data.project, chapter: String(chapter.data.order) },
      props: { chapter, project },
    };
  });
}

export async function GET({
  props,
}: {
  props: {
    chapter: Awaited<ReturnType<typeof getCollection<"chapters">>>[number];
    project: Awaited<ReturnType<typeof getCollection<"projects">>>[number];
  };
}) {
  const { chapter, project } = props;

  const png = await renderOgImage({
    title: chapter.data.title,
    titleFontSize: chapter.data.title.length > 55 ? 52 : 64,
    metaLine: `zack glaser · ${project.data.title}`,
    accent: DEFAULT_ACCENT,
    tagLabel: "workshop",
    eyebrow: `chapter · entries ${chapterRange(chapter)}`,
  });

  return new Response(png, { headers: { "Content-Type": "image/png" } });
}
