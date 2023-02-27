/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lcw.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig
