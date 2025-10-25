/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#0b362a', // Použijeme barvu z rodiny "amber"
          light: '#39af8eff',
          dark: '#082a20ff',
        }
        /*'brand': {
          DEFAULT: '#a16207', // Použijeme barvu z rodiny "amber"
          light: '#ca8a04',
          dark: '#854d0e',
        }*/
      }
    }
  },
  plugins: []
};