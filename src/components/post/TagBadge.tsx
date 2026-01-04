export const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <span className="project-badge-accent inline-block button-hover">
      {tag}
    </span>
  );
};
