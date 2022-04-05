/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
  },
}
