/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  basePath: '/lisaa',
  assetPrefix: '/lisaa/',
  trailingSlash: true,
};

module.exports = nextConfig;