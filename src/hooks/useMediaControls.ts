import { useState, useRef, useCallback, useEffect } from "react";

export function useMediaControls(hideDelay = 3000) {
  const [showControls, setShowControls] = useState(false);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
  }, []);

  const hide = useCallback(() => {
    setShowControls(false);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
  }, []);

  const touch = useCallback(() => {
    show();
    hideControlsTimeout.current = setTimeout(
      () => setShowControls(false),
      hideDelay
    );
  }, [show, hideDelay]);

  useEffect(() => {
    return () => {
      if (hideControlsTimeout.current)
        clearTimeout(hideControlsTimeout.current);
    };
  }, []);

  return { showControls, show, hide, touch };
}
