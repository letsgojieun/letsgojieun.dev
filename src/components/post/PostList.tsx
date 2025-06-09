import { PostMeta } from "@/types/post";
import { PostItem } from "./PostItem";

export const PostList = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <>
      {posts.map((post, idx) => (
        <div key={post.slug}>
          <PostItem key={post.slug} post={post} idx={idx} />
          <div className=" divider-theme border-b" />
        </div>
      ))}
    </>
  );
};
