/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn3.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'picjumbo.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com', // ✅ properly wrapped and specified
      },
      {
        protocol: 'https',
        hostname: 'fea9-103-4-221-252.ngrok-free.app',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
