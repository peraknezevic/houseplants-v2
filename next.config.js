/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/peraknezevic/houseplants-v2/main/public/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
