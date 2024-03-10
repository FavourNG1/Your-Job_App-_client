/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images.himalayas.app",
      },
    ],
  },
};

module.exports = nextConfig;
