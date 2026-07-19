/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hymora-studios-templates/coaching",
  assetPrefix: "/hymora-studios-templates/coaching/",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;
