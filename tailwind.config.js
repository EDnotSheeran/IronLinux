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
        gold: {
          rose: '#FEA250',
          DEFAULT: '#F4BE02',
          dark: '#e0b000',
        },
        blue: {
          bluesh: '#BCD0E5',
          1: '#567592',
        },
        grey: {
          DEFAULT: '#4F5665',
          300: '#544837',
          500: '#2F281E',
        },
        brown: '#544837',
      },
      spacing: {
        41: '10.25rem',
        42: '10.5rem',
        43: '10.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
