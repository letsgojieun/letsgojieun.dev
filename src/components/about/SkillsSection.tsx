import { SKILLS } from "@/data/about";

export function SkillsSection() {
  return (
    <section
      aria-labelledby="about-skills"
      className="flex flex-col gap-10 items-start"
    >
      <div>
        <h2 id="about-skills" className="text-2xl font-semibold mb-4">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 rounded border-border-light border-1 dark:border-white font-gaegu"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
