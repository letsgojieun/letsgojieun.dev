export const PostHeader = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <section
      className="flex flex-row justify-between items-center border divider-theme bg-content-light dark:bg-content-dark rounded-xl p-4"
      aria-labelledby="post-title"
    >
      <h1 id="post-title" className="text-2xl font-semibold text-blue">
        {title}
      </h1>
      <p className="text-gray-500 font-gaegu">posted on {date}</p>
    </section>
  );
};
