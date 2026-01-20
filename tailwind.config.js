/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These match the gold and dark grey in your screenshot
        eflyerGold: '#f3a619', 
        eflyerDark: '#2b2e34',
        eflyerButton: '#303030',
      },
    },
  },
  plugins: [],
}