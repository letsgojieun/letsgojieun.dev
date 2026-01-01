"use client";

import { useState, useEffect, useCallback } from "react";

type Lang = "en" | "ko";

const LangToggle = () => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang) setLang(savedLang);
  }, []);

  const handleLangToggle = useCallback(() => {
    const newLang = lang === "en" ? "ko" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  }, [lang]);

  return (
    <button
      className="flex flex-col items-center justify-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ease-out hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle language"
      onClick={handleLangToggle}
      type="button"
    >
      <span className="text-sm font-bold">{lang === "en" ? "EN" : "KO"}</span>
      <span className="text-[10px] font-solway mt-0.5">Lang</span>
    </button>
  );
};

export default LangToggle;
