module.exports = {
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
      }]
    }
  }
};
