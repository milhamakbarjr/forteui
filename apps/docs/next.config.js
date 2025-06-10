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
  
  // Performance optimizations
  compress: true,
  
  // Static export optimization
  output: 'export',
  trailingSlash: true,
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Transpile workspace packages
  transpilePackages: ['forteui-core', 'forteui-tokens'],
  
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['@forteui/core', 'react-live', 'tailwind-merge'],
  },
  
  // Enhanced webpack configuration for monorepo
  webpack: (config, { dev, isServer }) => {
    // Handle workspace protocol imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@forteui/core': require.resolve('forteui-core'),
      '@forteui/tokens': require.resolve('forteui-tokens'),
    };
    
    // Optimize for smaller bundles in production
    if (!dev) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Split chunks for better caching
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
    
    // No need for custom CSS loader - Next.js handles this
    
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
