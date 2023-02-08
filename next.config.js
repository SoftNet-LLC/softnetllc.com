const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
});

const nextConfig = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        runtime: "edge",
    },
    env: {
    }
});

module.exports = nextConfig
