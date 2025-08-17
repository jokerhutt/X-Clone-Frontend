import LocalFont from "next/font/local";

export const Chirp = LocalFont({
  src: [
    { path: "./woff2/Chirp-Light.woff2", weight: "300", style: "normal" },
    { path: "./woff2/Chirp-Regular.woff2", weight: "400", style: "normal" },
    { path: "./woff2/Chirp-Medium.woff2", weight: "500", style: "normal" },
    { path: "./woff2/Chirp-Bold.woff2", weight: "700", style: "normal" },
    { path: "./woff2/Chirp-Heavy.woff2", weight: "800", style: "normal" },
    {
      path: "./woff2/chirp-extended-heavy-web.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-chirp",
});
