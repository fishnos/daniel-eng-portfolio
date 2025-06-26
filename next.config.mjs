// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // 1) Make sure we don’t treat SVGs as “static assets” first:
      config.module.rules.find(
        (r) =>
          r.test &&
          r.test instanceof RegExp &&
          r.test.test('.svg')
      ).exclude = /\.svg$/;
  
      // 2) Add SVGR loader for SVGs
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
  