/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363'
      },

      fontFamily: {
        body: ['Nunito']
      }

    },
  },
  plugins: [],
}