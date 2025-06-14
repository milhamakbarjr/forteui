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
    // ForteUI color variants (matching your actual color system)
    {
      pattern: /(bg|text|border)-(primary|secondary|info|success|warning|error)-(lighter|light|main|dark|darker)/,
    },
    // ForteUI opacity variants  
    {
      pattern: /(bg|text|border)-(primary|secondary|info|success|warning|error)-(8|12|16|20|24|32|40|48)/,
    },
    // Grey scale variants
    {
      pattern: /(bg|text|border)-grey-(100|200|300|400|500|600|700|800|900)/,
    },
    // Backdrop blur variants
    {
      pattern: /backdrop-blur-(sm|md|lg|xl)/,
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

