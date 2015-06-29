'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = function(customConfig) {
  customConfig = customConfig || { plugins: [] };

  if (!customConfig.plugins) {
    customConfig.plugins = [];
  }

  var jsLoader = 'babel-loader?stage=0&optional=runtime';
  if (customConfig.hot) {
    jsLoader = 'react-hot!' + jsLoader;
  }

  var plugins = [
    new webpack.DefinePlugin({
      'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || customConfig.nodeEnv || 'development')
      }
    })
  ];

  if (customConfig.plugins && customConfig.plugins.length) {
    plugins = plugins.concat(customConfig.plugins);
  }

  return ({
    output: {
      path: path.join(__dirname, 'build', 'assets'),
      publicPath: '/assets/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.[hash].js',
      sourceMapFilename: 'debug/[file].map',
      pathinfo: true
    },

    cache: true,

    debug: true,

    devtool: 'eval',

    entry: {
      main: [
        './src/index.jsx'
      ]
    },

    resolve: {
      root: path.join(__dirname, 'src'),
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx']
    },

    resolveLoader: { root: path.join(__dirname, 'node_modules') },

    externals: {},

    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: jsLoader
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.(scss|sass)$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'url-loader?limit=10000'
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?limit=10000'
        },
        {
          test: /\.(ttf|eot)$/,
          loader: 'file-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.json5$/,
          loader: 'json5-loader'
        },
        {
          test: /\.(wav|mp3)$/,
          loader: 'file-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.txt$/,
          loader: 'raw-loader'
        },
        {
          test: /\.(md|markdown)$/,
          loaders: ['html-loader', 'markdown-loader']
        }
      ]
    },

    plugins: plugins,

    eslint: {
      configFile: customConfig.eslintrcPath || path.join(__dirname, '.eslintrc')
    }
  });
};
