const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './assets/js/app.js',
    './assets/sass/style.scss',
  ],
  output: {
    path: path.resolve(__dirname),
    filename: './js/bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin([
      './js',
      './css',
      './fonts',
      './*.html'
    ]),
    new ExtractTextPlugin('./css/style.css'),
    new HtmlWebpackPlugin({
      template: './assets/index.pug'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: `./fonts/[name].[ext]`,
          }
        }
      }
    ]
  }
};