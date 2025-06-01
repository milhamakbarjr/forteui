import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Include all packages and apps
    './packages/*/src/**/*.{js,ts,jsx,tsx}',
    './apps/*/src/**/*.{js,ts,jsx,tsx}',
    './apps/*/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Font families with Plus Jakarta Sans
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...fontFamily.sans],
        mono: ['JetBrains Mono', 'Monaco', 'Cascadia Code', ...fontFamily.mono],
      },
      
      // Colors from your design tokens with full opacity support
      colors: {
        // Base colors
        white: '#ffffff',
        black: '#0B0C0E',
        transparent: 'transparent',
        
        // Primary brand colors with opacity variants
        primary: {
          lighter: '#D2F5FE',
          light: '#6BCEFA',
          DEFAULT: '#0690F4',
          main: '#0690F4',
          dark: '#0253B1',
          darker: '#012C7A',
          // Opacity variants
          '8': 'rgba(6, 144, 244, 0.08)',
          '12': 'rgba(6, 144, 244, 0.12)',
          '16': 'rgba(6, 144, 244, 0.16)',
          '20': 'rgba(6, 144, 244, 0.20)',
          '24': 'rgba(6, 144, 244, 0.24)',
          '32': 'rgba(6, 144, 244, 0.32)',
          '40': 'rgba(6, 144, 244, 0.40)',
          '48': 'rgba(6, 144, 244, 0.48)',
        },
        
        // Secondary colors with opacity variants
        secondary: {
          lighter: '#F1DBFF',
          light: '#C98AFF',
          DEFAULT: '#9138FF',
          main: '#9138FF',
          dark: '#5319BE',
          darker: '#290981',
          // Opacity variants
          '8': 'rgba(145, 56, 255, 0.08)',
          '12': 'rgba(145, 56, 255, 0.12)',
          '16': 'rgba(145, 56, 255, 0.16)',
          '20': 'rgba(145, 56, 255, 0.20)',
          '24': 'rgba(145, 56, 255, 0.24)',
          '32': 'rgba(145, 56, 255, 0.32)',
          '40': 'rgba(145, 56, 255, 0.40)',
          '48': 'rgba(145, 56, 255, 0.48)',
        },
        
        // Info semantic colors with opacity variants
        info: {
          lighter: '#CEFDF6',
          light: '#66F4F4',
          DEFAULT: '#00BEE0',
          main: '#00BEE0',
          dark: '#0071A3',
          darker: '#00396B',
          // Opacity variants
          '8': 'rgba(0, 190, 224, 0.08)',
          '12': 'rgba(0, 190, 224, 0.12)',
          '16': 'rgba(0, 190, 224, 0.16)',
          '20': 'rgba(0, 190, 224, 0.20)',
          '24': 'rgba(0, 190, 224, 0.24)',
          '32': 'rgba(0, 190, 224, 0.32)',
          '40': 'rgba(0, 190, 224, 0.40)',
          '48': 'rgba(0, 190, 224, 0.48)',
        },
        
        // Success semantic colors with opacity variants
        success: {
          lighter: '#C4E9CC',
          light: '#74CD8A',
          DEFAULT: '#22B954',
          main: '#22B954',
          dark: '#03963E',
          darker: '#006620',
          // Opacity variants
          '8': 'rgba(34, 185, 84, 0.08)',
          '12': 'rgba(34, 185, 84, 0.12)',
          '16': 'rgba(34, 185, 84, 0.16)',
          '20': 'rgba(34, 185, 84, 0.20)',
          '24': 'rgba(34, 185, 84, 0.24)',
          '32': 'rgba(34, 185, 84, 0.32)',
          '40': 'rgba(34, 185, 84, 0.40)',
          '48': 'rgba(34, 185, 84, 0.48)',
        },
        
        // Warning semantic colors with opacity variants
        warning: {
          lighter: '#FFF6D1',
          light: '#FFD76B',
          DEFAULT: '#FFAD05',
          main: '#FFAD05',
          dark: '#BD7100',
          darker: '#804400',
          // Opacity variants
          '8': 'rgba(255, 173, 5, 0.08)',
          '12': 'rgba(255, 173, 5, 0.12)',
          '16': 'rgba(255, 173, 5, 0.16)',
          '20': 'rgba(255, 173, 5, 0.20)',
          '24': 'rgba(255, 173, 5, 0.24)',
          '32': 'rgba(255, 173, 5, 0.32)',
          '40': 'rgba(255, 173, 5, 0.40)',
          '48': 'rgba(255, 173, 5, 0.48)',
        },
        
        // Error semantic colors with opacity variants
        error: {
          lighter: '#FFECDB',
          light: '#FFAE85',
          DEFAULT: '#FF5833',
          main: '#FF5833',
          dark: '#BF1D18',
          darker: '#810917',
          // Opacity variants
          '8': 'rgba(255, 88, 51, 0.08)',
          '12': 'rgba(255, 88, 51, 0.12)',
          '16': 'rgba(255, 88, 51, 0.16)',
          '20': 'rgba(255, 88, 51, 0.20)',
          '24': 'rgba(255, 88, 51, 0.24)',
          '32': 'rgba(255, 88, 51, 0.32)',
          '40': 'rgba(255, 88, 51, 0.40)',
          '48': 'rgba(255, 88, 51, 0.48)',
        },
        
        // Grey scale with opacity variants
        grey: {
          100: '#FCFCFD',
          200: '#F6F7F9',
          300: '#E1E5EA',
          400: '#C6CFD7',
          500: '#93A1AE',
          600: '#657686',
          700: '#45505E',
          800: '#1F2933',
          900: '#151B23',
          // Opacity variants
          '4': 'rgba(147, 161, 174, 0.04)',
          '8': 'rgba(147, 161, 174, 0.08)',
          '12': 'rgba(147, 161, 174, 0.12)',
          '16': 'rgba(147, 161, 174, 0.16)',
          '20': 'rgba(147, 161, 174, 0.20)',
          '24': 'rgba(147, 161, 174, 0.24)',
          '32': 'rgba(147, 161, 174, 0.32)',
          '40': 'rgba(147, 161, 174, 0.40)',
          '48': 'rgba(147, 161, 174, 0.48)',
          '56': 'rgba(147, 161, 174, 0.56)',
          '64': 'rgba(147, 161, 174, 0.64)',
          '72': 'rgba(147, 161, 174, 0.72)',
          '80': 'rgba(147, 161, 174, 0.80)',
        },
        
        // Text colors
        text: {
          primary: '#1F2933',
          secondary: 'rgba(33, 43, 54, 0.60)',
          disabled: 'rgba(33, 43, 54, 0.38)',
        },
        
        // Action states
        action: {
          hover: 'rgba(145, 158, 171, 0.08)',
          selected: 'rgba(145, 158, 171, 0.12)',
          disabled: 'rgba(145, 158, 171, 0.80)',
          disabledBackground: 'rgba(145, 158, 171, 0.24)',
          focus: 'rgba(145, 158, 171, 0.24)',
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
      
      // Font weights
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
    },
  },
  plugins: [],
};
