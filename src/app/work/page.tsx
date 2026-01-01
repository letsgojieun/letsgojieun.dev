"use client";

import { useState } from "react";
import { WorkDetail } from "@/components/work/WorkDetail";
import { useResponsive } from "@/hooks/useResponsive";
import { useScrollToElement } from "@/hooks/useScrollToElement";
import { WORK } from "@/data/work";
import type { Work } from "@/types/work";
import { WorkList } from "@/components/work/WorkList";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(
    WORK[0] || null
  );

  const { isDesktop } = useResponsive();
  const { topRef, targetRef } = useScrollToElement({
    isDesktop,
    dependency: selectedWork,
  });

  const handleWorkSelect = (work: Work) => {
    setSelectedWork(work);
  };

  return (
    <div className="w-full px-2 py-6 font-solway" ref={topRef}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <WorkList
            works={WORK}
            selectedWork={selectedWork}
            onWorkSelect={handleWorkSelect}
          />
        </div>

        <div className="lg:col-span-3">
          <WorkDetail ref={targetRef} work={selectedWork} />
        </div>
      </div>
    </div>
  );
}
