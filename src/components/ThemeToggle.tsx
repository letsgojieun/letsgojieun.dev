"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer transition-transform duration-200 hover:scale-110"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      <span className="icon-responsive">
        {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
      </span>
    </button>
  );
};

export default ThemeToggle;
