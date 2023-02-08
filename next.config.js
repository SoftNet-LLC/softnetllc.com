const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
});

const nextConfig = withPWA({
    reactStrictMode: false,
    swcMinify: true,
    assetPrefix: process.env.VERCEL_URL,
    images: {
        domains: [process.env.VERCEL_URL],
        path: `${process.env.VERCEL_URL}/_next/image`,
    },
    env: {
    }
});

module.exports = nextConfig
