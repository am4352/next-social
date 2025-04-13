/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['encrypted-tbn3.gstatic.com'],
  },
  experimental: {
    reactCompiler: true,
    //ppr: 'incremental'
  },
};

export default nextConfig;





