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
    ],
  },
  experimental: {
    reactCompiler: true,
    // ppr: 'incremental'
  },
};

export default nextConfig;
