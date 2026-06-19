import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // No `output: "standalone"`: Coolify deploys this via Nixpacks, which runs
  // `next start` against the regular `.next` build. Standalone output is only
  // needed when launching `node .next/standalone/server.js` from a custom
  // minimal Docker image — not the case here. (If you later switch to a custom
  // Dockerfile, re-add `output: "standalone"`.)
  poweredByHeader: false,
  images: {
    // Local assets only; modern formats for performance.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Locale-neutral entry point → primary locale.
    return [{ source: "/", destination: "/fr", permanent: false }];
  },
};

export default nextConfig;
