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
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        // pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        // pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig
