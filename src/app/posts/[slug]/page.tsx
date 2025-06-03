import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/post/PostHeader";
import { PostContent } from "@/components/post/PostContent";
import { PostSidebar } from "@/components/post/PostSidebar";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="flex flex-col gap-4 p-4">
      <PostHeader title={post.title} date={post.date} />
      <section className="flex sm:flex-row flex-col gap-8">
        <div className="sm:order-1 order-2 basis-3/4 flex-grow">
          <PostContent content={post.content} />
        </div>
        <div className="sm:order-2 order-1">
          <PostSidebar description={post.description} tags={post.tags} />
        </div>
      </section>
    </article>
  );
}
