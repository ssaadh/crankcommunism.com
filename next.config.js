/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["scontent-lga3-2.cdninstagram.com", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "buddyhead-app-xvgeb.ondigitalocean.app",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "live.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
