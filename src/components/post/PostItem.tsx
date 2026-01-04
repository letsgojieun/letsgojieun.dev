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
      className="group flex flex-col rounded-xl overflow-hidden border divider-theme bg-header hover-shadow-primary transition-all duration-300"
      aria-label={`${post.title} post`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-2/1 overflow-hidden">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          quality={60}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={idx < 3}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h1 className="text-lg font-semibold text-blue line-clamp-2">
          {post.title}
        </h1>
        <p className="text-sm text-subtitle line-clamp-2">{post.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {post.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <p className="text-xs text-gray-500 font-gaegu">{post.date}</p>
      </div>
    </Link>
  );
};
