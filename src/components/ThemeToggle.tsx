"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [rotation, setRotation] = useState(0);

  const handleThemeChange = () => {
    setRotation((prev) => prev + 360);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="flex flex-col items-center justify-center p-2.5 sm:px-4 sm:py-2 rounded-xl
        cursor-pointer transition-all duration-200 ease-out
        hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle theme"
      onClick={handleThemeChange}
      type="button"
      suppressHydrationWarning
    >
      <span
        className="text-xl transition-transform duration-500 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
        suppressHydrationWarning
      >
        <BiSolidSun className="block dark:hidden" />
        <BiSolidMoon className="hidden dark:block" />
      </span>
      <span className="hidden sm:block text-[10px] font-solway mt-0.5">
        Theme
      </span>
    </button>
  );
};

export default ThemeToggle;
