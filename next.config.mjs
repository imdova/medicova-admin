/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["mui-tel-input"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
