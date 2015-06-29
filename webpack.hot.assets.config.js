var _ = require('lodash');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.config');

var config = _.merge(
  webpackConfig({
    hot: true,
    eslintrcPath: './_dev.eslintrc'
  }),
  {
    output: {
      publicPath: 'http://localhost:2992/assets/',
      filename: '[name].js'
    },
    devServer: {
      stats: {
        exclude: [
          /.*-dev-server/,
          /buildin/,
          /hot/,
          /node_modules[\\\/]react(-router)?[\\\/]/,
          /babel/
        ]
      }
    }
  }
);

module.exports = config;
