import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: false },
      { source: "/insights", destination: "/portfolio", permanent: false },
    ];
  },
};

export default nextConfig;
