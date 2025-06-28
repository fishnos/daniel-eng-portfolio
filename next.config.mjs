/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.find(
      (r) =>
        r.test &&
        r.test instanceof RegExp &&
        r.test.test('.svg')
    ).exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
  