import Link from "next/link";
import { PostMeta } from "@/types/post";
import Image from "next/image";
import { TagBadge } from "./TagBadge";

interface PostItemProps {
  post: PostMeta;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className=" hover:bg-content-light dark:hover:bg-content-dark  p-4 flex sm:flex-row flex-col justify-between sm:items-center"
      aria-label={`${post.title} post`}
    >
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-xl font-semibold text-blue">{post.title}</h2>
          <p>{post.description}</p>
        </div>
        <div>
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <p className="text-gray-500 font-gaegu ">posted on {post.date}</p>
      </div>
      <Image
        src={post.thumbnail}
        alt={post.title}
        width={320}
        height={160}
        quality={60}
        sizes="(max-width: 640px) 80vw, 320px"
        className="object-cover rounded-md w-auto h-auto"
      />
    </Link>
  );
};
