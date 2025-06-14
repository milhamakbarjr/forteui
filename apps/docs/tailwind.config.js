import baseConfig from '../../configs/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Include ForteUI components for documentation
    "../../packages/core/src/**/*.{js,ts,jsx,tsx}",
  ],
  // Safelist important classes that might be used dynamically
  safelist: [
    // Animation and gradient classes
    'bg-size-200',
    'bg-pos-0',
    // Opacity variants for all colors
    {
      pattern: /(bg|text|border)-(primary|secondary|info|success|warning|error|gray)-(8|12|16|20|24|32|40|48)/,
    },
    // Backdrop blur variants
    {
      pattern: /backdrop-blur-(sm|md|lg|xl|2xl|3xl)/,
    },
    // Transform and animation classes
    {
      pattern: /(scale|rotate|translate)-(x|y)?-\d+/,
    },
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      // Additional customizations for docs site
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.sans'),
          },
        },
      }),
    },
  },
  plugins: [
    ...baseConfig.plugins || [],
    require('@tailwindcss/typography'),
  ],
}

