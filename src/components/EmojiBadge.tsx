"use client";

import { useState } from "react";
import WavingHand from "./WavingHand";

export default function EmojiBadge() {
  const [showWave, setShowWave] = useState(false);

  const handleClick = () => {
    setShowWave(true);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="
        absolute bottom-5 right-5 cursor-pointer
        flex items-center justify-center
        w-10 h-10 rounded-full bg-white 
        text-lg
        border border-divider-light
        z-10
        pt-1
        "
        aria-label="emoji badge"
        onClick={handleClick}
      >
        👋🏻
      </button>
      {showWave && <WavingHand onEnd={() => setShowWave(false)} />}
    </div>
  );
}
