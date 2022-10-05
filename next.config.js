/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = {
  //...
  optimization: {
    minimize: false,
  },
};

module.exports = nextConfig
