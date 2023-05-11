/**
 * @type {import("next").NextConfig}
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


const baseConfig = withTM(withPwa({
    reactStrictMode: false,
    swcMinify: true,
    images: {
        formats: ["image/avif", "image/webp"],
        unoptimized: true,
    },
    env: {
        FB_API_KEY: process.env.FB_API_KEY,
        FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
        FB_DATABASE_URL: process.env.FB_DATABASE_URL,
        FB_PROJECT_ID: process.env.FB_PROJECT_ID,
        FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
        FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
        FB_APP_ID: process.env.FB_APP_ID,
        FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
        GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
    }
}));


module.exports = baseConfig
