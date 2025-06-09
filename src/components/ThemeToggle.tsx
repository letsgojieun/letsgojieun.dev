"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer transition-transform duration-200 hover:scale-110"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      type="button"
    >
      <span className="icon-responsive">
        {resolvedTheme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
      </span>
    </button>
  );
};

export default ThemeToggle;
