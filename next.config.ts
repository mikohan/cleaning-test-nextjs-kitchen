import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/angara/**",
      },
    ],
  },
  // 'swcMinify' is now default, so we just remove the line
  experimental: {
    optimizeCss: true,
    // nextScriptWorkers: true,
  },
  async rewrites() {
    return [
      {
        source: "/proxy/gtm/:path*",
        destination: "https://www.googletagmanager.com/:path*",
      },
      {
        source: "/proxy/fb/:path*",
        destination: "https://connect.facebook.net/:path*",
      },
    ];
  },
};
export default nextConfig;
