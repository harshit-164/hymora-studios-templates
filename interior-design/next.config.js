/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hymora-studios-templates/interior-design",
  assetPrefix: "/hymora-studios-templates/interior-design/",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;
