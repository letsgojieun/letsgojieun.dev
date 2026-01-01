"use client";

import { useTheme } from "next-themes";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="flex flex-col items-center justify-center px-4 py-2 rounded-xl
        cursor-pointer transition-all duration-200 ease-out
        hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle theme"
      onClick={handleThemeChange}
      type="button"
    >
      <span className="text-xl">
        <BiSolidMoon className="dark:hidden" />
        <BiSolidSun className="hidden dark:block" />
      </span>
      <span className="hidden sm:block text-[10px] font-solway mt-0.5">
        Theme
      </span>
    </button>
  );
};

export default ThemeToggle;
