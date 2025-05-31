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
      
      // Colors from your design tokens
      colors: {
        // Base colors
        white: '#ffffff',
        black: '#0B0C0E',
        transparent: 'transparent',
        
        // Primary brand colors
        primary: {
          lighter: '#D2F5FE',
          light: '#6BCEFA',
          DEFAULT: '#0690F4',
          main: '#0690F4',
          dark: '#0253B1',
          darker: '#012C7A',
        },
        
        // Secondary colors
        secondary: {
          lighter: '#F1DBFF',
          light: '#C98AFF',
          DEFAULT: '#9138FF',
          main: '#9138FF',
          dark: '#5319BE',
          darker: '#290981',
        },
        
        // Semantic colors
        info: {
          lighter: '#CEFDF6',
          light: '#66F4F4',
          DEFAULT: '#00BEE0',
          main: '#00BEE0',
          dark: '#0071A3',
          darker: '#00396B',
        },
        
        success: {
          lighter: '#D4F5E0',
          light: '#7BD895',
          DEFAULT: '#22B954',
          main: '#22B954',
          dark: '#0F6A30',
          darker: '#063317',
        },
        
        warning: {
          lighter: '#FFF8CC',
          light: '#FFEC66',
          DEFAULT: '#FFAD05',
          main: '#FFAD05',
          dark: '#B76600',
          darker: '#7A3300',
        },
        
        error: {
          lighter: '#FFE8E0',
          light: '#FF9980',
          DEFAULT: '#FF5833',
          main: '#FF5833',
          dark: '#CC2200',
          darker: '#800F00',
        },
        
        // Grey scale
        grey: {
          100: '#FCFCFD',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
        
        // Action states
        action: {
          hover: 'rgba(145, 158, 171, 0.08)',
          selected: 'rgba(145, 158, 171, 0.12)',
          disabled: 'rgba(145, 158, 171, 0.80)',
          disabledBackground: 'rgba(145, 158, 171, 0.24)',
          focus: 'rgba(145, 158, 171, 0.24)',
        },
        
        // Text colors
        text: {
          primary: 'rgba(33, 43, 54, 0.87)',
          secondary: 'rgba(33, 43, 54, 0.60)',
          disabled: 'rgba(33, 43, 54, 0.38)',
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
