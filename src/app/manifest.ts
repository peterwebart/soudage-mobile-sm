import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description:
      "Industrial & commercial mobile welding contractor serving Greater Montréal and Québec.",
    start_url: "/fr",
    scope: "/",
    display: "standalone",
    background_color: "#0E141F",
    theme_color: "#0E141F",
    lang: "fr-CA",
    dir: "ltr",
    categories: ["business", "industrial", "utilities"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
