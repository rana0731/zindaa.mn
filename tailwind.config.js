module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'opensans' :  ['"Open Sans Condensed"', 'Tahoma', 'Arial', 'sans-serif'],
      'roboto': ['"Roboto Condensed"', 'Tahoma', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'main': '#001e46',
        'main1': '#003164',
        'main2': '#c0c0c0',
        'text' : "#333",
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'active', 'group-hover'],
    },
    
  },
  plugins: [],
}
