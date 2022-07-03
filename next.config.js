/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/lisa-website" : undefined,
  env: {
    BASE_PATH: process.env.NODE_ENV === "production" ? "/lisa-website" : "",
  },
};

module.exports = nextConfig;
