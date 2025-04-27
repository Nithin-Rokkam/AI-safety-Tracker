/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        expand: 'expand 0.3s ease-out forwards',
        slideUp: 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        expand: {
          '0%': { opacity: 0, transform: 'translateY(-10px)', maxHeight: 0 },
          '100%': { opacity: 1, transform: 'translateY(0)', maxHeight: '1000px' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};