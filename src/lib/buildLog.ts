import { getCollection, type CollectionEntry } from "astro:content";

// Entry files are numbered NNN-slug.md; numbers, not dates, drive order (docs/02).
export function entryNumber(post: CollectionEntry<"posts">): number | null {
  const match = post.id.match(/(\d+)-[^/]+$/);
  return match ? parseInt(match[1], 10) : null;
}

export async function getProjectEntries(series: string) {
  return (await getCollection("posts", ({ data }) => data.series === series)).sort(
    (a, b) => (entryNumber(a) ?? 0) - (entryNumber(b) ?? 0)
  );
}

export async function getProjectChapters(series: string) {
  return (await getCollection("chapters", ({ data }) => data.project === series)).sort(
    (a, b) => a.data.order - b.data.order
  );
}

export function getChapterEntries(
  chapter: CollectionEntry<"chapters">,
  projectEntries: CollectionEntry<"posts">[]
) {
  return projectEntries.filter((post) => {
    const n = entryNumber(post);
    return n !== null && n >= chapter.data.entryStart && n <= chapter.data.entryEnd;
  });
}

export function chapterRange(chapter: CollectionEntry<"chapters">) {
  const pad = (n: number) => String(n).padStart(3, "0");
  return chapter.data.entryStart === chapter.data.entryEnd
    ? pad(chapter.data.entryStart)
    : `${pad(chapter.data.entryStart)}–${pad(chapter.data.entryEnd)}`;
}

export async function getProjectStats(project: CollectionEntry<"projects">) {
  const entries = await getProjectEntries(project.data.series);
  const projectChapters = await getProjectChapters(project.data.series);
  const published = entries.filter((e) => e.data.status === "published");
  return {
    entries,
    chapters: projectChapters,
    totalEntries: entries.length,
    publishedEntries: published.length,
    totalChapters: projectChapters.length,
    percentDone: entries.length > 0 ? Math.round((published.length / entries.length) * 100) : 0,
  };
}
