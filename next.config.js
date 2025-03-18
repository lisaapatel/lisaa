/** @type {import('next').NextConfig} */
console.log("Next.js configuration loaded");

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/lisaa',
  assetPrefix: '/lisaa/',
  trailingSlash: true,
};

module.exports = nextConfig;
