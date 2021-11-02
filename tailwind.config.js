const tailwindColors = require('tailwindcss/colors');
const ironlinuxTheme = require('./src/plugins/tailwindcss.ironlinux');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ...ironlinuxTheme,
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        ...tailwindColors,
        ...ironlinuxTheme.colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [require('./src/plugins/tailwindcss.plugin')],
};
