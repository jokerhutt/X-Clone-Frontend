import type { Metadata } from "next";
import "./layout.stylesheet.css";

import { Chirp } from "@/shared/assets/fonts/Chirp";

export const metadata: Metadata = {
  title: "X",
  openGraph: { siteName: "X" },
  icons: {
    shortcut: "/x.32x32.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-black">
      <link rel="mask-icon" href="/maskicon/icon.svg" color="#1D9BF0" />
      <body className={` ${Chirp.className}`}>{children}</body>
    </html>
  );
}
