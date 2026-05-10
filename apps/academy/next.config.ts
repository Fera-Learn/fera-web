import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["@repo/docs", "@repo/ui"],
};

export default nextConfig;
