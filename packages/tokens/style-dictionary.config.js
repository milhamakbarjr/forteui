module.exports = {
  source: [
    "../../colors.json",
    "../../effects.json", 
    "../../typography.json",
    "../../spacing.json"
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
