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
    '.bg-gradient': {
      background:
        'linear-gradient(180deg, rgba(244, 190, 2, 0.2) 0%, rgba(244, 190, 2, 0) 100%)',
    },
    '.bg-oval': {
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '349px',
        zIndex: '-1',
        background: 'url("/oval-bg.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
        backgroundSize: 'cover',
        bottom: '0',
      },
    },
    '.bg-oval-reverse': {
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '349px',
        zIndex: '-1',
        background: 'url("/oval-bg.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
        backgroundSize: 'cover',
        top: '0',
        transform: 'rotate(180deg)',
      },
    },
  });
};
