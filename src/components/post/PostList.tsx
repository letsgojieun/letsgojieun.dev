import { PostMeta } from "@/types/post";
import { PostItem } from "./PostItem";

export const PostList = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <>
      <div className="p-6 w-full">
        <h2 className="text-2xl font-bold">Posts</h2>
        <h2 className="text-sm text-subtitle">All posts</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center">
        {posts.map((post, idx) => (
          <PostItem key={post.slug} post={post} idx={idx} />
        ))}
      </div>
    </>
  );
};
