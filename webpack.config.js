const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        mangle:true,
        output: {
          comments: false
        }
      },
      sourceMap: true,
      exclude: [/\.min\.js$/gi]
    })]
  }
};