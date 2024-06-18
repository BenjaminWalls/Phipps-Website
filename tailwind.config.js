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
          '0%': {transform: 'translateY(-20px)', opacity:'0'},
          '100%': {transform: 'translateY(0px)', opacity:'100'}
        },
        'open-menu-icons': {
          '0%': {transform: 'translateY(40px)', opacity:'0'},
          '100%': {transform: 'translateY(0px)', opacity:'100'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-out',
        'open-menu-icons': 'open-menu-icons 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}