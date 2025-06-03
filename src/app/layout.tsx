import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "letsgojieun.dev",
  description:
    "welcome to jieun go's website. which is front-end developer's portfolio.",
  openGraph: {
    title: "letsgojieun.dev",
    description: "A front-end developer in Australia.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main
            style={{ height: "calc(100vh - var(--header-height))" }}
            className="font-solway overflow-y-auto no-scrollbar"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
