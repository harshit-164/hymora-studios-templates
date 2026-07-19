/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hymora-studios-templates/export",
  assetPrefix: "/hymora-studios-templates/export/",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;
