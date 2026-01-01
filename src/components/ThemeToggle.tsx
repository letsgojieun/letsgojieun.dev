"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleThemeChange = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!mounted) return null;

  return (
    <button
      className="flex flex-col items-center justify-center px-4 py-2 rounded-xl
        cursor-pointer transition-all duration-200 ease-out
        hover:bg-black/5 dark:hover:bg-white/10"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      onClick={handleThemeChange}
      type="button"
    >
      <span className="text-xl">
        {resolvedTheme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
      </span>
      <span className="text-[10px] font-solway mt-0.5">Theme</span>
    </button>
  );
};

export default ThemeToggle;
