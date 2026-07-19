/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hymora-studios-templates/premium-salon",
  assetPrefix: "/hymora-studios-templates/premium-salon/",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;
