import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMeta, Post } from "@/types/post";

const POSTS_DIR = path.join(process.cwd(), "src/posts");

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(POSTS_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title,
        description: data.description,
        date: data.date,
        thumbnail: data.thumbnail,
        tags: data.tags || [],
      };
    });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    thumbnail: data.thumbnail,
    tags: data.tags || [],
    content,
  };
}
