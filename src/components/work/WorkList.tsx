"use client";

import { Work } from "@/types/work";

interface WorkListProps {
  works: Work[];
  selectedWork: Work | null;
  onWorkSelect: (work: Work) => void;
}

export function WorkList({ works, selectedWork, onWorkSelect }: WorkListProps) {
  return (
    <div className="px-4 space-y-4">
      <h2 className="project-list-title">Work</h2>

      <div className="space-y-3">
        {works.map((work) => (
          <div
            key={work.id}
            onClick={() => onWorkSelect(work)}
            className={`
              project-card
              ${
                selectedWork?.id === work.id
                  ? "project-card-selected"
                  : "hover:border-gray-300 dark:hover:border-gray-600"
              }
            `}
          >
            <div className="space-y-2">
              <h3 className="font-semibold text-lg project-text">
                {work.title}
              </h3>

              <p className="project-text-muted font-gaegu">{work.period}</p>

              <p className="text-sm project-text line-clamp-2">
                {work.subtitle}
              </p>

              <div className="flex flex-wrap gap-1 mt-3">
                {work.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="project-badge-primary">
                    {tech}
                  </span>
                ))}
                {work.techStack.length > 4 && (
                  <span className="px-2 py-1 project-text-muted font-gaegu">
                    +{work.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
