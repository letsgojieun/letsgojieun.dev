import Link from "next/link";
import { PostMeta } from "@/types/post";
import Image from "next/image";
import { TagBadge } from "./TagBadge";

interface PostItemProps {
  post: PostMeta;
  idx: number;
}

export const PostItem = ({ post, idx }: PostItemProps) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className=" hover:bg-content  p-4 flex sm:flex-row flex-col justify-between sm:items-center"
      aria-label={`${post.title} post`}
    >
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-blue">
            {post.title}
          </h1>
          <p className="text-md md:text-base">{post.description}</p>
        </div>
        <div>
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <p className="text-gray-500 font-gaegu ">posted on {post.date}</p>
      </div>
      <div className="flex-shrink-0 w-full sm:w-auto">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={200}
          height={120}
          quality={60}
          className="object-cover rounded-md w-full h-48 sm:w-60 sm:h-36 md:w-72 md:h-40"
          priority={idx < 3}
        />
      </div>
    </Link>
  );
};
