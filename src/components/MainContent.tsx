"use client";

import { usePathname } from "next/navigation";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      style={{
        paddingBottom: isHome ? 0 : "calc(var(--dockbar-height) + 16px)",
      }}
      className="font-solway min-h-screen overflow-y-auto no-scrollbar"
    >
      {children}
    </main>
  );
};

