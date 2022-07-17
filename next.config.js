/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  webpack5:true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ["fakestoreapi.com"],
  },
}
