const webpack = require('webpack');
const path = require('path');
const WebpackHMRPlugin = require('nodeblues/webpack').WebpackHMRPlugin;

const BUILD_DIR = path.resolve(__dirname, '../build/web');
const SRC_DIR = path.resolve(__dirname, './src');

const config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },
  plugins: [
    new WebpackHMRPlugin('localhost', 1338)
  ]
};

module.exports = config;
