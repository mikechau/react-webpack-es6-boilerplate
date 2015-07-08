var _ = require('lodash');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.config');

var config = _.merge(
  webpackConfig({
    hot: false,
    test: true,
    eslintrcPath: './_dev.eslintrc'
  }),
  {
    output: {},
    entry: {},
    devtool: 'inline-source-map'
  }
);

module.exports = config;
