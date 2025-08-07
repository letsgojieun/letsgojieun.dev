import { useState, useCallback } from "react";

type AspectRatio = "portrait" | "landscape" | null;

export function useAspectRatio<
  T extends HTMLImageElement | HTMLVideoElement
>() {
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(null);

  const handleLoad = useCallback((e: React.SyntheticEvent<T>) => {
    const el = e.currentTarget;
    let ratio = 1;
    if (el instanceof HTMLImageElement) {
      ratio = el.naturalWidth / el.naturalHeight;
    } else if (el instanceof HTMLVideoElement) {
      ratio = el.videoWidth / el.videoHeight;
    }
    if (ratio > 1.3) setAspectRatio("landscape");
    else if (ratio < 0.7) setAspectRatio("portrait");
  }, []);

  const reset = useCallback(() => setAspectRatio(null), []);

  return { aspectRatio, handleLoad, reset };
}
