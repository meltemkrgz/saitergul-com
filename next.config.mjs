// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'server',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
