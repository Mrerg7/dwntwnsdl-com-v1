/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: { 600: '#d97706', 700: '#B45309', 800: '#92400e' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: { widestx: '0.2em' },
      animation: {
        'pulse-price': 'pulse-price 2.4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-price': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
