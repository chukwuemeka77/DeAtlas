// next.config.js
const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
  reactStrictMode: true,
  experimental: {
    appDir: true, // For App Router support
  },
});
