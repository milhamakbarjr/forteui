/**
 * Style Dictionary Configuration for ForteUI
 * Transforms design tokens into CSS variables and Tailwind tokens
 */

export default {
  source: [
    './colors.json',
    './effects.json', 
    './typography.json',
    './spacing.json'
  ],
  platforms: {
    // CSS Custom Properties
    css: {
      transformGroup: 'css',
      buildPath: './packages/tokens/dist/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: {
          outputReferences: true
        }
      }]
    },
    
    // JavaScript/TypeScript tokens
    js: {
      transformGroup: 'js',
      buildPath: './packages/tokens/dist/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }, {
        destination: 'tokens.d.ts',
        format: 'typescript/es6-declarations'
      }]
    },

    // Tailwind Config Integration
    tailwind: {
      transformGroup: 'js',
      buildPath: './configs/',
      files: [{
        destination: 'tailwind-tokens.js',
        format: 'javascript/es6',
        filter: (token) => {
          // Include all tokens for Tailwind config
          return true;
        }
      }]
    }
  }
};
