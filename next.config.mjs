/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // distDir: 'dist',
  // assetPrefix: isProd ? 'https://reachcreativestudio.com/cmspecs/' : undefined
};

export default nextConfig;
