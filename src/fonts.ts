import localFont from "next/font/local";

export const gaegu = localFont({
  src: [
    {
      path: "./fonts/Gaegu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gaegu",
  display: "swap",
});

export const solway = localFont({
  src: [
    {
      path: "./fonts/Solway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Solway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-solway",
  display: "swap",
});
