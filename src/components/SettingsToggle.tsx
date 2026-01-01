"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

type Lang = "en" | "ko";

const SettingsToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const { setTheme, resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleLangToggle = () => {
    const newLang = lang === "en" ? "ko" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        className="flex flex-col items-center justify-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ease-out hover:bg-black/5 dark:hover:bg-white/10"
        aria-label="Settings"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="text-xl">
          <IoSettingsSharp
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-6 flex flex-col gap-2 p-3 bg-header/95 backdrop-blur-xl rounded-xl shadow-lg border divider-theme min-w-[120px]">
          {/* Theme Toggle */}
          <button
            className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm font-solway transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={handleThemeChange}
          >
            <span>Theme</span>
            <span className="text-lg">
              <BiSolidMoon className="dark:hidden" />
              <BiSolidSun className="hidden dark:block" />
            </span>
          </button>

          {/* Lang Toggle */}
          <button
            className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm font-solway transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={handleLangToggle}
          >
            <span>Lang</span>
            <span className="text-sm font-bold">
              {lang === "en" ? "EN" : "KO"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingsToggle;
