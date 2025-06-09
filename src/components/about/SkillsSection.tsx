import { SKILLS } from "@/data/about";

export function SkillsSection() {
  return (
    <section
      aria-labelledby="about-skills"
      className="flex flex-col gap-10 items-start"
    >
      <div>
        <h2 id="about-skills" className="section-title">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="
              border-rounded font-gaegu divider-theme border-b button-hover
              hover:bg-content-light dark:hover:bg-content-dark
              "
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
