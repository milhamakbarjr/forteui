import StyleDictionary from 'style-dictionary';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const styleDictionary = new StyleDictionary({
  source: [
    "./src/colors.json",
    "./src/effects.json", 
    "./src/typography.json",
    "./src/spacing.json"
  ],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "./dist/",
      files: [{
        destination: "variables.css",
        format: "css/variables",
        options: {
          outputReferences: true
        }
      }]
    },
    js: {
      transformGroup: "js",
      buildPath: "./dist/",
      files: [{
        destination: "tokens.js",
        format: "javascript/es6"
      }, {
        destination: "tokens.d.ts",
        format: "typescript/es6-declarations"
      }]
    }
  }
});

await styleDictionary.buildAllPlatforms();

// Copy font files to dist
try {
  mkdirSync('./dist/fonts', { recursive: true });
  copyFileSync('./fonts/plus-jakarta-sans.css', './dist/fonts/plus-jakarta-sans.css');
  console.log('✔︎ ./dist/fonts/plus-jakarta-sans.css');
} catch (error) {
  console.error('Error copying font files:', error);
}
