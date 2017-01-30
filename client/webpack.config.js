const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')
const path = require('path');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader',
]

module.exports = {
  entry: {
    app: ['./app.js', './components.js'],
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].js",
  },
  resolve: {
    root: path.resolve(__dirname, './'),
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['node_modules'],
    alias: {
      'angular': path.join(__dirname, 'node_modules/angular'),
      'angular-ui-router': path.join(__dirname, 'node_modules/angular-ui-router'),
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join('!')),
      },
      {
        test: /\.json$/,
        loader: 'json-loader!no-num-json-loader',
      },
      {
          test: /\.html/,
          loader: 'raw'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true,
  },
  devtool: 'inline-source-map',
};