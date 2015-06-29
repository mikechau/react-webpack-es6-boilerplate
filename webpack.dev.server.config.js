var _ = require('lodash');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.config');

var config = _.merge(
  webpackConfig({
    hot: true,
    eslintrcPath: './_dev.eslintrc',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }),
  {
    entry: {
      main: [
        'webpack-dev-server/client?http://localhost:9999',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
      ]
    }
  }
);

module.exports = config;
