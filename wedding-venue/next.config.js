/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hymora-studios-templates/wedding-venue",
  assetPrefix: "/hymora-studios-templates/wedding-venue/",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;
