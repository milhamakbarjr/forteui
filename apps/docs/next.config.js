/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['forteui-core', 'forteui-tokens'],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig
