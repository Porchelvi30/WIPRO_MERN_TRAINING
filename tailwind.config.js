/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f9e29d',
          DEFAULT: '#d4af37',
          dark: '#aa771c',
        }
      }
    },
  },
  plugins: [],
}