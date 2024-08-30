/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.reservoir.tools",
        port: "",
      },
    ],
  },
};

export default nextConfig;
