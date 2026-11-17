import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 produces a fully static site in ./dist (GitHub Pages, Netlify, S3, Nginx…).
 * NEXT_PUBLIC_BASE_PATH serves the site from a sub-path, e.g. "/portfolio" for
 * https://<user>.github.io/portfolio/. The GitHub Pages workflow sets both automatically.
 */
const isExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isExport
    ? {
        output: "export" as const,
        // static site goes to ./dist (separate from .next, so it never disturbs a running `next dev`)
        distDir: "dist",
        images: { unoptimized: true },
        ...(basePath ? { basePath } : {}),
      }
    : {}),
};

export default nextConfig;
