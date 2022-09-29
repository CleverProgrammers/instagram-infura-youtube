/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'kajabi-storefronts-production.kajabi-cdn.com',
      'i.insider.com',
      'upload.wikimedia.org',
      'pbs.twimg.com',
      'yt3.ggpht.com',
      'picsum.photos',
      'avatars.dicebear.com',
      'upcdn.io',
    ],
  },
}

module.exports = nextConfig
