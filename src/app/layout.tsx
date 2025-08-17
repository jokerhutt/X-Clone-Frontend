import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X",

  openGraph: {
    siteName: "X",
  },
  icons: {
    shortcut: "/x.32x32.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000000" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="mask-icon" href="/maskicon/icon.svg" color="#1D9BF0" />

      <body className={`antialiased bg-black text-white text-sm`}>{children}</body>
    </html>
  );
}
