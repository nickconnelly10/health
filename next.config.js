/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig

