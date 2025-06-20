import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { BiLogoBlogger } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";

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
];

export const Header = () => {
  return (
    <header
      className="w-full flex justify-between sticky top-0 z-10 p-2 
      bg-header divider-theme border-b
    "
      role="banner"
    >
      <nav
        className="flex gap-4"
        aria-label="main navigation"
        aria-current="page"
      >
        {navs.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={`
              flex items-center gap-2
            `}
            aria-label={nav.ariaLabel}
          >
            <span className="icon-responsive">{nav.icon}</span>
            <span className="hidden sm:inline font-gaegu text-xl">
              {nav.label}
            </span>
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
};
