import { PostList } from "@/components/post/PostList";
import { getAllPostsMeta } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getAllPostsMeta();
  return <PostList posts={posts} />;
}
