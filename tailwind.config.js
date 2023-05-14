/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary":"#1d9bf0",
        "borderColor": "#2f3336"
      }
    },
  },
  plugins: [],
};
