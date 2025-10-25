/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#a16207', // Použijeme barvu z rodiny "amber"
          light: '#ca8a04',
          dark: '#854d0e',
        }
      }
    }
  },
  plugins: []
};