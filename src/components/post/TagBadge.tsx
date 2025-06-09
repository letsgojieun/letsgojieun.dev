export const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <span
      className="text-blue bg-blue/20 rounded-full px-2 py-1 mr-2
    font-gaegu font-semibold inline-block button-hover"
    >
      {tag}
    </span>
  );
};
