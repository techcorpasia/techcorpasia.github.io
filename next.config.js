/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  assetPrefix: isGithubPages ? '/techcorpasia.github.io/' : '/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 