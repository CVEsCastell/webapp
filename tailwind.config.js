const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ecc94b',
        secondary: '#5c6ac4',
        dark: {
          bg: '#1B1B22',
          DEFAULT: '#27272F',
          // light: '#373743'
          border: '#363642',
          workspace: '#27272F',
        },
      }
    }
  },
  content: [
    './ui/**/*.vue',
  ],
};