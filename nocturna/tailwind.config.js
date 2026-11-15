/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        farol: "#FFD166",
        noche: "#14213D",
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}