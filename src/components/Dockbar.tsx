"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { BiLogoBlogger } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { MdWork } from "react-icons/md";

const navs = [
  {
    href: "/",
    label: "Home",
    icon: <GoHomeFill />,
    ariaLabel: "Home page",
  },
  {
    href: "/about",
    label: "About",
    icon: <BsFillPersonFill />,
    ariaLabel: "About page",
  },
  {
    href: "/posts",
    label: "Posts",
    icon: <BiLogoBlogger />,
    ariaLabel: "Posts page",
  },
  {
    href: "/work",
    label: "Work",
    icon: <MdWork />,
    ariaLabel: "Work page",
  },
];

export const Dockbar = () => {
  const pathname = usePathname();
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const themeRef = useRef<HTMLDivElement>(null);
  const [scales, setScales] = useState<number[]>(navs.map(() => 1));
  const [themeScale, setThemeScale] = useState(1);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const newScales = navRefs.current.map((ref) => {
      if (!ref) return 1;
      const rect = ref.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distance = Math.abs(e.clientX - centerX);
      const maxDistance = 80;
      const scale = Math.max(1, 1.3 - (distance / maxDistance) * 0.3);
      return Math.min(scale, 1.3);
    });
    setScales(newScales);

    // Theme toggle scale
    if (themeRef.current) {
      const rect = themeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distance = Math.abs(e.clientX - centerX);
      const maxDistance = 80;
      const scale = Math.max(1, 1.3 - (distance / maxDistance) * 0.3);
      setThemeScale(Math.min(scale, 1.3));
    }
  };

  const handleMouseLeave = () => {
    setScales(navs.map(() => 1));
    setThemeScale(1);
  };

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        flex items-end gap-2 px-3 py-2
        bg-header/90 backdrop-blur-xl
        rounded-2xl shadow-lg
        border divider-theme
      "
      role="navigation"
      aria-label="main navigation"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {navs.map((nav, index) => (
        <Link
          key={nav.href}
          href={nav.href}
          ref={(el) => {
            navRefs.current[index] = el;
          }}
          className="relative flex flex-col items-center justify-center
            p-2.5 sm:px-4 sm:py-2 rounded-xl
            transition-transform duration-75 ease-out origin-bottom"
          style={{ transform: `scale(${scales[index]})` }}
          aria-label={nav.ariaLabel}
          aria-current={isActive(nav.href) ? "page" : undefined}
        >
          <span className="relative text-xl">
            {nav.icon}
            {isActive(nav.href) && (
              <span className="absolute -top-1 -right-1.5 w-1.5 h-1.5 rounded-full bg-project-accent border border-project-primary" />
            )}
          </span>
          <span className="hidden sm:block text-[10px] font-solway mt-0.5">
            {nav.label}
          </span>
        </Link>
      ))}
      <div className="w-px h-8 bg-divider mx-2 self-center" />
      <div
        ref={themeRef}
        style={{ transform: `scale(${themeScale})` }}
        className="transition-transform duration-75 ease-out origin-bottom"
      >
        <ThemeToggle />
      </div>
    </nav>
  );
};
