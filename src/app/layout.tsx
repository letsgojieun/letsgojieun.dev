import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { gaegu, solway } from "@/fonts";
import { Dockbar } from "@/components/Dockbar";
import { MainContent } from "@/components/MainContent";

export const metadata: Metadata = {
  title: "letsgojieun.dev | Jieun Go's Front-end Blog & Portfolio",
  description:
    "letsgojieun.dev is a portfolio and blog of Jieun Go, a front-end developer.",
  openGraph: {
    title: "letsgojieun.dev",
    description:
      "letsgojieun.dev is a portfolio and blog of Jieun Go, a front-end developer.",
    url: "https://letsgojieun.dev/",
    siteName: "letsgojieun.dev",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "letsgojieun.dev",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${solway.variable} ${gaegu.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainContent>{children}</MainContent>
          <Dockbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
