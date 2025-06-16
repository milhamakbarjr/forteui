import withMDXPlugin from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';

const withMDX = withMDXPlugin({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core configuration
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // CRITICAL: Fix for CSS loading issues in production
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // IMPORTANT: Ensure proper static generation and CSS inclusion
  trailingSlash: true,
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  
  // CRITICAL: Transpile workspace packages (this is essential for monorepos)
  transpilePackages: ['forteui-core', 'forteui-tokens'],
  
  // CSS-specific configuration for production
  experimental: {
    optimizePackageImports: [
      'forteui-core', 
      'forteui-tokens',
      'react-live', 
      'tailwind-merge',
      '@tabler/icons-react'
    ],
    // IMPORTANT: Ensure CSS is properly handled in server components
    serverComponentsExternalPackages: [],
    // Remove optimizeCss due to critters dependency issues
  },
  
  // Enhanced webpack configuration for monorepo
  webpack: (config, { dev, isServer }) => {
    // Handle workspace protocol imports and fix package resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@forteui/core': 'forteui-core',
      '@forteui/tokens': 'forteui-tokens',
      // Add fallback for when packages are not found
      'forteui-core': 'forteui-core',
      'forteui-tokens': 'forteui-tokens',
    };
    
    return config;
  },
  
  // TypeScript optimization
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint optimization
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Environment variables for build optimization
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
};

export default withMDX(nextConfig);
