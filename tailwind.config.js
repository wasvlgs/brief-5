/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./pages/**/*.html","./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        mainColor: '#134B70',
        titleColor: '#0F67B1',
      },
    },
  },
  plugins: [],
}