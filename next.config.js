/** @type {import('next').NextConfig} */

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