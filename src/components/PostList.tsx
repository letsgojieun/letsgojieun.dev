import { PostMeta } from "@/types/post";
import { PostItem } from "./PostItem";

export const PostList = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <div>
      <div className="divide-y divide-divider-light dark:divide-divider-dark">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
      <hr className="border-t border-divider-light dark:border-divider-dark" />
    </div>
  );
};
