/**
 * @type {import('next').NextConfig}
 */

const { withPlugins, extend } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const runtimeCaching = require("next-pwa/cache");
const withPwa = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
})


const baseConfig = {
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
    swcMinify: true,
    env: {
    }
};


module.exports = baseConfig
