const withImages = require('next-images')

module.exports = {
  ...withImages({
    esModule: true
  }),
  ...{
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    images: {
      domains: [
        'tailwindui.com',
        'images.unsplash.com',
        'avatars.githubusercontent.com'
      ]
    }
  }
}
