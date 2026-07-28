import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { postMetaCrossPillar } from "../lib/postMeta";

export async function GET(context) {
  const posts = (await getCollection("posts", ({ data }) => data.status === "published")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "zackglaser.com",
    description: "Taking things apart to see how they work — legal tech, running, the workshop, and field notes.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/${post.id}`,
      description: postMetaCrossPillar(post),
      categories: [post.data.pillar, post.data.format],
    })),
  });
}
