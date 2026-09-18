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
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
