/**
 * @type {import('next').NextConfig}
 */

const { withPlugins, extend } = require("next-compose-plugins");
const runtimeCaching = require("next-pwa/cache");
const optimizedImages = require("next-optimized-images");
const withPwa = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
})


const baseConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {
    }
};


module.exports = withPwa(extend(baseConfig).withPlugins([
    [optimizedImages, {

    }]
]))
