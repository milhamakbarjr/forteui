/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include ForteUI components
    "../../packages/core/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    // Use the shared Tailwind config with design tokens
    require("../../configs/tailwind.config.js")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
