// Based on: https://raw.githubusercontent.com/cesarandreu/web-app/master/karma.conf.js

var webpackConfig = require('./webpack.karma.config');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'sinon-chai'
    ],

    reporters: [
      'spec'
    ],

    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*.test.*'
    ],

    preprocessors: {
      'test/**/*.test.*': ['webpack', 'sourcemap']
    },

    browsers: [
      'PhantomJS'
    ],

    singleRun: true,

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: {
        colors: true,
        assets: false,
        chunks: false,
        modules: false,
        hash: false
      }
    }
  })
}
