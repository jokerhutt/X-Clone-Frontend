import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  const locale;

  return {
    name: "Social Network",
    short_name: "Social Network",
    description: "Read fresh news and chat with friends.",
    start_url: "/?utm_source=pwa",
    scope: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
