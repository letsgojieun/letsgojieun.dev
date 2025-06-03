import { CAREERS } from "@/data/about";

export function CareersSection() {
  return (
    <section className="flex flex-col gap-10 items-start">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <ul className="space-y-6">
          {CAREERS.map((career) => (
            <li key={career.company}>
              <strong>{career.company}</strong>
              <span className="text-gray-500 ml-2 font-gaegu">
                {career.period}
              </span>
              <br />
              <span className="font-gaegu">{career.role}</span>
              <br />
              <span className="text-gray-500">{career.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
