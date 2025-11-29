import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://img.daisyui.com/**'), new URL('https://ik.imagekit.io/angara/**')],

  },
};

export default nextConfig;
