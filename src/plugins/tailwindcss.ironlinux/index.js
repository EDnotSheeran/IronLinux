const spacing = require('./spacing');

module.exports = {
  colors: {
    primary: '#8257e6',
    secondary: '#121214',
    gold: {
      rose: '#FEA250',
      80: '#F4BE02CC',
      light: '#F4BE0232',
      DEFAULT: '#F4BE02',
      dark: '#e0b000',
    },
    blue: {
      bluesh: '#BCD0E5',
      1: '#567592',
    },
    grey: {
      DEFAULT: '#4F5665',
      200: '#58555e',
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
  maxWidth: {
    ...spacing,
  },
  minWidth: {
    ...spacing,
  },
  maxHeight: {
    ...spacing,
  },
  minHeight: {
    ...spacing,
  },
  borderRadius: {
    50: '50%',
  },
};
