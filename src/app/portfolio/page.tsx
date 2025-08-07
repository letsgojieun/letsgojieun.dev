"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import { ProjectList } from "@/components/portfolio/ProjectList";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { useResponsive } from "@/hooks/useResponsive";
import { useScrollToElement } from "@/hooks/useScrollToElement";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    PROJECTS[0] || null
  );

  const { isDesktop } = useResponsive();
  const { topRef, targetRef } = useScrollToElement({
    isDesktop,
    dependency: selectedProject,
  });

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="w-full px-2 py-6 font-solway" ref={topRef}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <ProjectList
            projects={PROJECTS}
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
          />
        </div>

        <div className="lg:col-span-3">
          <ProjectDetail ref={targetRef} project={selectedProject} />
        </div>
      </div>
    </div>
  );
}
