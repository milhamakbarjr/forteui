module.exports = {
  plugins: {
    // Process imports first (this is critical for production)
    'postcss-import': {
      // Resolve imports from workspace packages
      resolve: (id, basedir) => {
        // Handle workspace protocol imports
        if (id.startsWith('forteui-')) {
          return require.resolve(`${id}/src/styles.css`);
        }
        return id;
      },
    },
    // Then process Tailwind
    tailwindcss: {},
    // Finally add autoprefixer
    autoprefixer: {},
  },
}
