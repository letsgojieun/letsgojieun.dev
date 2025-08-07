"use client";

import { Project } from "@/types/portfolio";

interface ProjectListProps {
  projects: Project[];
  selectedProject: Project | null;
  onProjectSelect: (project: Project) => void;
}

export function ProjectList({
  projects,
  selectedProject,
  onProjectSelect,
}: ProjectListProps) {
  return (
    <div className="px-4 space-y-4">
      <h2 className="project-list-title">Projects</h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className={`
              project-card
              ${
                selectedProject?.id === project.id
                  ? "project-card-selected"
                  : "hover:border-gray-300 dark:hover:border-gray-600"
              }
            `}
          >
            <div className="space-y-2">
              <h3 className="font-semibold text-lg project-text">
                {project.title}
              </h3>

              <p className="project-text-muted font-gaegu">
                {project.period}
              </p>

              <p className="text-sm project-text line-clamp-2">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-1 mt-3">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="project-badge-primary"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-1 project-text-muted font-gaegu">
                    +{project.techStack.length - 4} more
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
