const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
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
      '@forteui/core': require.resolve('forteui-core'),
      '@forteui/tokens': require.resolve('forteui-tokens'),
      // Add fallback for when packages are not found
      'forteui-core': require.resolve('forteui-core'),
      'forteui-tokens': require.resolve('forteui-tokens'),
    };
    
    // Optimize for smaller bundles in production
    if (!dev) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Enhanced chunk splitting for better caching and animation libraries
      if (!isServer) {
        config.optimization.splitChunks = {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            forteui: {
              test: /[\\/]node_modules[\\/](forteui-core|forteui-tokens)[\\/]/,
              name: 'forteui',
              chunks: 'all',
              priority: 10,
            },
            animations: {
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              name: 'animations',
              chunks: 'all',
              priority: 8,
            },
            icons: {
              test: /[\\/]node_modules[\\/](@tabler\/icons-react)[\\/]/,
              name: 'icons',
              chunks: 'all',
              priority: 7,
            },
            ui: {
              test: /[\\/]node_modules[\\/](fumadocs-ui|fumadocs-core)[\\/]/,
              name: 'ui-framework',
              chunks: 'all',
              priority: 6,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 5,
            },
          },
        };
      }
    }
    
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

module.exports = withMDX(nextConfig);
