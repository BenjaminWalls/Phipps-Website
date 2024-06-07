/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./public/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363'
      },

      fontFamily: {
        jakarta: ['Plus Jakarta Sans'],
        garamond: ['EB Garamond'],
        roboto: ['Roboto']
        
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.4s ease-out forwards',
        'close-menu': 'open-menu 0.4s ease-out reverse'
      }
    },
  },
  plugins: [],
}