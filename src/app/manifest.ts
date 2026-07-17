import type { MetadataRoute } from "next";
import { SITE_URL, BUSINESS } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: "H2 Sport",
    description: `Supplier Lantai Olahraga di Surabaya`,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#16a34a",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}