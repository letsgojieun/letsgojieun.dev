import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

export const PostContent = ({ content }: { content: string }) => {
  return (
    <div className="border divider-theme dark:bg-content rounded-xl p-4 flex-1">
      <span className="px-4 block">📖 Readme</span>
      <hr className="divider-theme mt-4 mb-12" />
      <div className="max-w-3xl mx-auto w-full h-full prose post-content">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypePrism],
            },
          }}
        />
      </div>
    </div>
  );
};
