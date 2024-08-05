/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363'
      },

      // Import custom fonts into classes
      fontFamily: {
        jakarta: ['Plus Jakarta Sans'],
        garamond: ['EB Garamond'],
        roboto: ['Roboto']
        
      },
      // Import custom animations to apply
      keyframes: {
        'open-menu': {
          '0%': {transform: 'translateY(-20px)', opacity:'0'},
          '100%': {transform: 'translateY(0px)', opacity:'100'}
        },
        'open-menu-icons': {
          '0%': {transform: 'translateY(40px)', opacity:'0'},
          '100%': {transform: 'translateY(0px)', opacity:'100'}
        },
        'page-load-title': {
          '0%': {transform: 'translateY(-50px)', opacity:'0'},
          '100%': {transform: 'translateY(0px)', opacity:'100'}
        },
        'page-load-desc': {
          '0%': {transform: 'translateY(50px)', opacity:'0'},
          '100%': {transform: 'translateY(0px)', opacity:'100'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-out',
        'open-menu-icons': 'open-menu-icons 0.5s ease-in-out',
        'close-menu': 'open-menu 0.5s ease-out reverse',
        'close-menu-icons': 'close-menu-icons 0.5s ease-in-out reverse',
        'page-load-title': 'page-load-title 1.4s ease',
        'page-load-desc': 'page-load-desc 1.4s ease'
      }
    },
  },
  plugins: [],
}