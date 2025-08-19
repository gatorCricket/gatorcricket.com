import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false, // hides the little “N” build bubble in dev
  },
};

export default nextConfig;
