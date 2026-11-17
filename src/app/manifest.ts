import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kyaw Kyaw Hsan — Portfolio",
    short_name: "Kyaw Portfolio",
    description:
      "Portfolio of Kyaw Kyaw Hsan, a junior full-stack developer building practical web and mobile products.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B0F19",
    theme_color: "#0B0F19",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
