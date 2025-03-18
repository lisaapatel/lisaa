/** @type {import('next').NextConfig} */
console.log("Next.js configuration loaded");

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,  // Disable image optimization for export
  },
  basePath: '/lisaa',
  assetPrefix: '/lisaa/',
  trailingSlash: true,
};

module.exports = nextConfig;
