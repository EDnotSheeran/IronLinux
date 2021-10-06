// Build Time Imports (https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports)
// Nesting (https://tailwindcss.com/docs/using-with-preprocessors#nesting)
// PostCss Shape (https://nextjs.org/docs/messages/postcss-shape)

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',
  ],
};
