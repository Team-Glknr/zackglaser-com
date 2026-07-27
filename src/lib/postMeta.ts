import type { CollectionEntry } from "astro:content";
import { pillars } from "./pillars";

function formattedDate(post: CollectionEntry<"posts">) {
  return post.data.date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

// Cross-pillar contexts (e.g. the Hub's "latest"), where the pillar itself needs naming.
export function postMetaCrossPillar(post: CollectionEntry<"posts">) {
  const pillarLabel = pillars.find((p) => p.id === post.data.pillar)?.label ?? post.data.pillar;
  return post.data.newsletter ? `${pillarLabel} · issue ${post.data.newsletter}` : `${pillarLabel} · ${post.data.format}`;
}

// Within-pillar contexts (pillar pages), where the pillar is already implied by the page.
export function postMetaWithinPillar(post: CollectionEntry<"posts">) {
  const date = formattedDate(post);
  if (post.data.newsletter) return `issue ${post.data.newsletter} · ${date}`;
  if (post.data.series) return `${post.data.series} · ${date}`;
  return date;
}
