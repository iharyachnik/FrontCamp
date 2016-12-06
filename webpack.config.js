const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer')
const path = require('path');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './css')
]

module.exports = {
  entry: {
    app: ["babel-polyfill", "whatwg-fetch", "./js/index", "./css/main.scss"],
  },
  output: {
    path: __dirname + '/bin',
    filename: "[name].js",
    publicPath: '/bin',
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
        test: /\.html$/,
        loader: 'html',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
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
  devtool: 'eval',
};