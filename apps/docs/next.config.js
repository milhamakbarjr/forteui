/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@forteui/core', '@forteui/tokens', '@forteui/utils'],
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig
