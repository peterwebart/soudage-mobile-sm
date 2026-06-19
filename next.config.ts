import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Self-contained output: smaller, faster container builds on Coolify.
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
