const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  i18n: {
    locales: ['pt', 'es', 'en'],
    defaultLocale: 'pt'
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
  },
};

module.exports = nextTranslate(nextConfig);