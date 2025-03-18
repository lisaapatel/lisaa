/** @type {import('next').NextConfig} */
console.log("Next.js configuration loaded");

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Ensure static export
  trailingSlash: true,
  images: {
    unoptimized: true,  // THIS IS CRUCIAL
  },
  basePath: '/lisaa',        // Adjust for your GitHub repository
  assetPrefix: '/lisaa/',    // Adjust for your GitHub repository
};

module.exports = nextConfig;
