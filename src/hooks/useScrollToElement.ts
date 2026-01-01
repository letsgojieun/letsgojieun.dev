import { Project } from "@/types/work";
import { useRef, useEffect } from "react";

interface UseScrollToElementProps {
  isDesktop: boolean;
  dependency?: Project | null;
}

export function useScrollToElement({
  isDesktop,
  dependency,
}: UseScrollToElementProps) {
  const topRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dependency) {
      const timeoutId = setTimeout(() => {
        if (isDesktop) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          if (topRef.current) {
            topRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          if (targetRef.current) {
            targetRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }
        }
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [dependency, isDesktop]);

  return { topRef, targetRef };
}
