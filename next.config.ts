import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      new URL("https://img.daisyui.com/**"),
      new URL("https://ik.imagekit.io/angara/**"),
    ],
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
};

export default nextConfig;
