import { MDXRemote } from "next-mdx-remote/rsc";

export const PostContent = ({ content }: { content: string }) => {
  return (
    <div className="border dark:border-divider-dark border-divider-light dark:bg-content-dark rounded-xl p-4 flex-1">
      <span className="px-4 block">📖 Readme</span>
      <hr className="border-t border-divider-light dark:border-divider-dark my-4" />
      <div className="px-4 h-full">
        <MDXRemote source={content} />
      </div>
    </div>
  );
};
