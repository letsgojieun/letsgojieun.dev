export const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <span className="text-blue bg-blue/20 rounded-lg p-1 text-sm font-gaegu inline-block button-hover">
      {tag}
    </span>
  );
};
