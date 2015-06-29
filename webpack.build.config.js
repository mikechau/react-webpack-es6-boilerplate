var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.config');
var CleanPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

var buildDate = (new Date());

var config = _.merge(
  webpackConfig({
    hot: false,
    plugins: [
      new CleanPlugin(['build']),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'My React Application',
        description: 'Sample React Application',
        filename: '../index.html',
        minify: {
          collapseWhitespace: true
        },
        inject: false,
        template: './templates/prod/index.html',
        buildDate: {
          unix: buildDate.getTime(),
          string: buildDate.toString(),
          date: buildDate.toDateString()
        }
      }),
      new StatsPlugin(path.join(__dirname, 'build', 'stats.json'), {
        chunkModules: true,
        exclude: [
          /node_modules[\\\/]react(-router)?[\\\/]/
        ]
      })
    ],
    eslintrcPath: './_prod.eslintrc'
  }),
  {
    output: {
      publicPath: '/assets/',
      filename: '[name]-[hash].js'
    },
    cache: false,
    debug: false,
    devtool: false
  }
);

module.exports = config;
