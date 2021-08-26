module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#8257e6',
        secondary: '#121214',
        gold: '#F4BE02',
        grey: '#4F5665',
        brown: '#544837',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
