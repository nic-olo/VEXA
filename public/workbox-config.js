module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{json,ico,html,js,css}"
  ],
  "swDest": "dist/service-worker.js",
  "runtimeCaching": [
    {
      "urlPattern": /^https:\/\/my-api-url\.com\//,
      "handler": "NetworkFirst",
      "options": {
        "cacheName": "api-cache",
        "networkTimeoutSeconds": 5,
        "cacheableResponse": {
          "statuses": [0, 200]
        }
      }
    },
    {
      "urlPattern": /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      "handler": "CacheFirst",
      "options": {
        "cacheName": "image-cache",
        "expiration": {
          "maxEntries": 50,
          "maxAgeSeconds": 30 * 24 * 60 * 60 // 30 days
        }
      }
    }
  ]
};