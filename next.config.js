/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
}

module.exports = nextConfig
