/**
 * @type {import('next').NextConfig}
 */

const { withPlugins, extend } = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["three"])
const optimizedImages = require("next-optimized-images");
const runtimeCaching = require("next-pwa/cache");
const withPwa = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
})


const baseConfig = withPwa(withTM({
    reactStrictMode: false,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    env: {
    }
}));


module.exports = baseConfig
