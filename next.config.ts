/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external domains you need to load images from
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
