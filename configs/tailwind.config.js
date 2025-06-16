import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Include all packages and apps
    './packages/*/src/**/*.{js,ts,jsx,tsx}',
    './apps/*/src/**/*.{js,ts,jsx,tsx}',
    './apps/*/**/*.{js,ts,jsx,tsx}',
  ],
  // Production optimizations
  mode: 'jit', // Just-in-time compilation
  important: false, // Avoid !important cascade issues
  theme: {
    extend: {
      // Font families with CSS variable integration
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', ...fontFamily.sans],
        mono: ['JetBrains Mono', 'Monaco', 'Cascadia Code', ...fontFamily.mono],
      },
      
      // Colors from your design tokens with full opacity support
      colors: {
        // Base colors
        white: '#ffffff',
        black: '#0B0C0E',
        transparent: 'transparent',
        
        // Primary brand colors with opacity variants - mapped to CSS variables
        primary: {
          lighter: 'var(--color-primary-lighter, #D2F5FE)',
          light: 'var(--color-primary-light, #6BCEFA)',
          DEFAULT: 'var(--color-primary-main, #0690F4)',
          main: 'var(--color-primary-main, #0690F4)',
          dark: 'var(--color-primary-dark, #0253B1)',
          darker: 'var(--color-primary-darker, #012C7A)',
          // Opacity variants
          '8': 'var(--color-primary-8, rgba(6, 144, 244, 0.08))',
          '12': 'var(--color-primary-12, rgba(6, 144, 244, 0.12))',
          '16': 'var(--color-primary-16, rgba(6, 144, 244, 0.16))',
          '20': 'var(--color-primary-20, rgba(6, 144, 244, 0.20))',
          '24': 'var(--color-primary-24, rgba(6, 144, 244, 0.24))',
          '32': 'var(--color-primary-32, rgba(6, 144, 244, 0.32))',
          '40': 'var(--color-primary-40, rgba(6, 144, 244, 0.40))',
          '48': 'var(--color-primary-48, rgba(6, 144, 244, 0.48))',
        },
        
        // Secondary colors with opacity variants - mapped to CSS variables
        secondary: {
          lighter: 'var(--color-secondary-lighter, #F1DBFF)',
          light: 'var(--color-secondary-light, #C98AFF)',
          DEFAULT: 'var(--color-secondary-main, #9138FF)',
          main: 'var(--color-secondary-main, #9138FF)',
          dark: 'var(--color-secondary-dark, #5319BE)',
          darker: 'var(--color-secondary-darker, #290981)',
          // Opacity variants
          '8': 'var(--color-secondary-8, rgba(145, 56, 255, 0.08))',
          '12': 'var(--color-secondary-12, rgba(145, 56, 255, 0.12))',
          '16': 'var(--color-secondary-16, rgba(145, 56, 255, 0.16))',
          '20': 'var(--color-secondary-20, rgba(145, 56, 255, 0.20))',
          '24': 'var(--color-secondary-24, rgba(145, 56, 255, 0.24))',
          '32': 'var(--color-secondary-32, rgba(145, 56, 255, 0.32))',
          '40': 'var(--color-secondary-40, rgba(145, 56, 255, 0.40))',
          '48': 'var(--color-secondary-48, rgba(145, 56, 255, 0.48))',
        },
        
        // Info semantic colors with opacity variants - mapped to CSS variables
        info: {
          lighter: 'var(--color-info-lighter, #CEFDF6)',
          light: 'var(--color-info-light, #66F4F4)',
          DEFAULT: 'var(--color-info-main, #00BEE0)',
          main: 'var(--color-info-main, #00BEE0)',
          dark: 'var(--color-info-dark, #0071A3)',
          darker: 'var(--color-info-darker, #00396B)',
          // Opacity variants
          '8': 'var(--color-info-8, rgba(0, 190, 224, 0.08))',
          '12': 'var(--color-info-12, rgba(0, 190, 224, 0.12))',
          '16': 'var(--color-info-16, rgba(0, 190, 224, 0.16))',
          '20': 'var(--color-info-20, rgba(0, 190, 224, 0.20))',
          '24': 'var(--color-info-24, rgba(0, 190, 224, 0.24))',
          '32': 'var(--color-info-32, rgba(0, 190, 224, 0.32))',
          '40': 'var(--color-info-40, rgba(0, 190, 224, 0.40))',
          '48': 'var(--color-info-48, rgba(0, 190, 224, 0.48))',
        },
        
        // Success semantic colors with opacity variants - mapped to CSS variables
        success: {
          lighter: 'var(--color-success-lighter, #C4E9CC)',
          light: 'var(--color-success-light, #74CD8A)',
          DEFAULT: 'var(--color-success-main, #22B954)',
          main: 'var(--color-success-main, #22B954)',
          dark: 'var(--color-success-dark, #03963E)',
          darker: 'var(--color-success-darker, #006620)',
          // Opacity variants
          '8': 'var(--color-success-8, rgba(34, 185, 84, 0.08))',
          '12': 'var(--color-success-12, rgba(34, 185, 84, 0.12))',
          '16': 'var(--color-success-16, rgba(34, 185, 84, 0.16))',
          '20': 'var(--color-success-20, rgba(34, 185, 84, 0.20))',
          '24': 'var(--color-success-24, rgba(34, 185, 84, 0.24))',
          '32': 'var(--color-success-32, rgba(34, 185, 84, 0.32))',
          '40': 'var(--color-success-40, rgba(34, 185, 84, 0.40))',
          '48': 'var(--color-success-48, rgba(34, 185, 84, 0.48))',
        },
        
        // Warning semantic colors with opacity variants - mapped to CSS variables
        warning: {
          lighter: 'var(--color-warning-lighter, #FFF6D1)',
          light: 'var(--color-warning-light, #FFD76B)',
          DEFAULT: 'var(--color-warning-main, #FFAD05)',
          main: 'var(--color-warning-main, #FFAD05)',
          dark: 'var(--color-warning-dark, #BD7100)',
          darker: 'var(--color-warning-darker, #804400)',
          // Opacity variants
          '8': 'var(--color-warning-8, rgba(255, 173, 5, 0.08))',
          '12': 'var(--color-warning-12, rgba(255, 173, 5, 0.12))',
          '16': 'var(--color-warning-16, rgba(255, 173, 5, 0.16))',
          '20': 'var(--color-warning-20, rgba(255, 173, 5, 0.20))',
          '24': 'var(--color-warning-24, rgba(255, 173, 5, 0.24))',
          '32': 'var(--color-warning-32, rgba(255, 173, 5, 0.32))',
          '40': 'var(--color-warning-40, rgba(255, 173, 5, 0.40))',
          '48': 'var(--color-warning-48, rgba(255, 173, 5, 0.48))',
        },
        
        // Error semantic colors with opacity variants - mapped to CSS variables
        error: {
          lighter: 'var(--color-error-lighter, #FFECDB)',
          light: 'var(--color-error-light, #FFAE85)',
          DEFAULT: 'var(--color-error-main, #FF5833)',
          main: 'var(--color-error-main, #FF5833)',
          dark: 'var(--color-error-dark, #BF1D18)',
          darker: 'var(--color-error-darker, #810917)',
          // Opacity variants
          '8': 'var(--color-error-8, rgba(255, 88, 51, 0.08))',
          '12': 'var(--color-error-12, rgba(255, 88, 51, 0.12))',
          '16': 'var(--color-error-16, rgba(255, 88, 51, 0.16))',
          '20': 'var(--color-error-20, rgba(255, 88, 51, 0.20))',
          '24': 'var(--color-error-24, rgba(255, 88, 51, 0.24))',
          '32': 'var(--color-error-32, rgba(255, 88, 51, 0.32))',
          '40': 'var(--color-error-40, rgba(255, 88, 51, 0.40))',
          '48': 'var(--color-error-48, rgba(255, 88, 51, 0.48))',
        },
        
        // Grey scale with opacity variants - mapped to CSS variables
        grey: {
          50: 'var(--color-gray-50, #FAFAFA)',
          100: 'var(--color-gray-100, #F5F5F5)',
          200: 'var(--color-gray-200, #E5E5E5)',
          300: 'var(--color-gray-300, #D4D4D4)',
          400: 'var(--color-gray-400, #A3A3A3)',
          500: 'var(--color-gray-500, #737373)',
          600: 'var(--color-gray-600, #525252)',
          700: 'var(--color-gray-700, #404040)',
          800: 'var(--color-gray-800, #262626)',
          900: 'var(--color-gray-900, #171717)',
          950: 'var(--color-gray-950, #0A0A0A)',
          // Common grey shades used by components
          20: 'rgba(115, 115, 115, 0.20)',
          // Opacity variants using gray-500 as base
          '4': 'rgba(115, 115, 115, 0.04)',
          '8': 'rgba(115, 115, 115, 0.08)',
          '12': 'rgba(115, 115, 115, 0.12)',
          '16': 'rgba(115, 115, 115, 0.16)',
          '24': 'rgba(115, 115, 115, 0.24)',
          '32': 'rgba(115, 115, 115, 0.32)',
          '40': 'rgba(115, 115, 115, 0.40)',
          '48': 'rgba(115, 115, 115, 0.48)',
          '56': 'rgba(115, 115, 115, 0.56)',
          '64': 'rgba(115, 115, 115, 0.64)',
          '72': 'rgba(115, 115, 115, 0.72)',
          '80': 'rgba(115, 115, 115, 0.80)',
        },
        
        // Text colors - mapped to CSS variables
        text: {
          primary: 'var(--color-gray-900, #171717)',
          secondary: 'var(--color-gray-600, #525252)',
          disabled: 'var(--color-action-disabled, rgba(115, 115, 115, 0.38))',
        },
        
        // Action states - mapped to CSS variables
        action: {
          hover: 'rgba(115, 115, 115, 0.08)',
          selected: 'rgba(115, 115, 115, 0.12)',
          disabled: 'var(--color-action-disabled, rgba(115, 115, 115, 0.80))',
          disabledBackground: 'rgba(115, 115, 115, 0.24)',
          focus: 'rgba(115, 115, 115, 0.24)',
        },
      },
      
      // Box shadows from your effects.json
      boxShadow: {
        sm: '0 1px 1px 0 rgb(145 158 171 / 0.08)',
        DEFAULT: '0 1px 2px 0 rgb(145 158 171 / 0.16)',
        md: '0 4px 8px 0 rgb(145 158 171 / 0.16)',
        lg: '0 8px 16px 0 rgb(145 158 171 / 0.16)',
        xl: '0 12px 24px -4px rgb(145 158 171 / 0.16)',
        '2xl': '0 20px 40px -4px rgb(145 158 171 / 0.16)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
        
        // Semantic shadows
        primary: '0 8px 16px rgba(6, 144, 244, 0.24)',
        secondary: '0 8px 16px rgba(145, 56, 255, 0.24)',
        info: '0 8px 16px rgba(0, 190, 224, 0.24)',
        success: '0 8px 16px rgba(34, 185, 84, 0.24)',
        warning: '0 8px 16px rgba(255, 173, 5, 0.24)',
        error: '0 8px 16px rgba(255, 88, 51, 0.24)',
      },
      
      // Typography scale
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.25' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.25' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.25' }],
      },
      
      // Line heights
      lineHeight: {
      },
      
      // Font weights
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      // Custom background utilities for animations
      backgroundSize: {
        '200': '200% 100%',
      },
      backgroundPosition: {
        '0': '0%',
        '100': '100%',
      },
    },
  },
  plugins: [
    // Add custom utilities plugin
    function({ addUtilities }) {
      addUtilities({
        '.bg-size-200': {
          'background-size': '200% 100%',
        },
        '.bg-pos-0': {
          'background-position': '0%',
        },
        '.bg-pos-100': {
          'background-position': '100%',
        },
      });
    },
  ],
};
