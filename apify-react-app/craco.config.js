// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          "os": require.resolve("os-browserify/browser"),
          "util": require.resolve("util/"),
          "zlib": require.resolve("browserify-zlib"),
          "assert": require.resolve("assert/"),
          "buffer": require.resolve("buffer/"),
          "stream": require.resolve("stream-browserify"),
        },
      };
      return webpackConfig;
    },
  },
};
