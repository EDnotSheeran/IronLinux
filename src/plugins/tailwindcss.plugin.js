module.exports = function ({ addComponents }) {
  addComponents({
    '.container': {
      maxWidth: '100%',
      padding: '0 2.5rem',
      '@screen sm': {
        maxWidth: '40rem',
      },
      '@screen md': {
        maxWidth: '52rem',
      },
      '@screen lg': {
        maxWidth: '60rem',
      },
      '@screen xl': {
        maxWidth: '72rem',
      },
      '@screen 2xl': {
        maxWidth: ' 80rem',
      },
    },
    '.bx-shaddow': {
      boxShadow: ' 0px 1px 10px rgba(0, 0, 0, 0.1);',
    },
    '.btn-shaddow': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
    },
  });
};
