const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    IS_DEVELOPMENT: process.env.IS_DEVELOPMENT,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
