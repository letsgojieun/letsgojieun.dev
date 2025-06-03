import { TagBadge } from "./TagBadge";

export const PostSidebar = ({
  description,
  tags,
}: {
  description: string;
  tags: string[];
}) => {
  return (
    <aside className="flex flex-col gap-2 basis-1/4">
      <div>
        <h2 className="text-xl font-semibold">Description</h2>
        <p>{description}</p>
      </div>
      <div>
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </aside>
  );
};
