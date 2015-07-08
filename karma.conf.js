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
      'app/**/*.test.*'
    ],

    preprocessors: {
      'app/**/*.test.*': ['webpack', 'sourcemap']
    },

    browsers: [
      'PhantomJS'
    ],

    singleRun: true,

    webpack: webpackConfig
  })
}
