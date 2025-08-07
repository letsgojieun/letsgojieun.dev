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
      className="cursor-pointer transition-transform duration-200 hover:scale-110"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      onClick={handleThemeChange}
      type="button"
    >
      <span className="icon-responsive">
        {resolvedTheme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
      </span>
    </button>
  );
};

export default ThemeToggle;
