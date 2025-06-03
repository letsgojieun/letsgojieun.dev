import { getAllPostsMeta } from "@/lib/posts";
import { PostList } from "@/components/PostList";

export default async function PostsPage() {
  const posts = await getAllPostsMeta();
  return <PostList posts={posts} />;
}
