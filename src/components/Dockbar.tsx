"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SettingsToggle from "./SettingsToggle";
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-2 px-3 py-2
        bg-header/90 backdrop-blur-xl
        rounded-2xl shadow-lg
        border divider-theme
      "
      role="navigation"
      aria-label="main navigation"
    >
      {navs.map((nav) => (
        <Link
          key={nav.href}
          href={nav.href}
          className={`
            relative flex flex-col items-center justify-center
            p-2.5 sm:px-4 sm:py-2 rounded-xl
            transition-all duration-200 ease-out
            ${
              isActive(nav.href)
                ? "dockbar-active scale-105"
                : "hover:bg-black/5 dark:hover:bg-white/10"
            }
          `}
          aria-label={nav.ariaLabel}
          aria-current={isActive(nav.href) ? "page" : undefined}
        >
          <span className="text-xl">{nav.icon}</span>
          <span className="hidden sm:block text-[10px] font-solway mt-0.5">
            {nav.label}
          </span>
        </Link>
      ))}
      <div className="w-px h-8 bg-divider mx-2" />
      <SettingsToggle />
    </nav>
  );
};
