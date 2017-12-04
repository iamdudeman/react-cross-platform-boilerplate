const webpack = require('webpack');
const path = require('path');
const WebpackHMRPlugin = require('nodeblues/webpack').WebpackHMRPlugin;

const BUILD_DIR = path.resolve(__dirname, '../build/web');
const SRC_DIR = path.resolve(__dirname, './src');

const isProduction = process.argv.includes('-p');

const ENTRY_FILE = SRC_DIR + '/index.js';

const plugins = [];
const loaders = [
  {
    test: /.js/,
    include: SRC_DIR,
    loader: 'babel-loader',
    exclude: '/node_modules/',
    query: {
      presets: [ 'es2015', 'react' ]
    }
  }
];

if (!isProduction) {
  loaders.push({
    test: ENTRY_FILE,
    loader: 'nodeblues/hmr-loader',
    query: {
      host: 'localhost',
      port: 1338
    }
  });
  plugins.push(new WebpackHMRPlugin('localhost', 1338));
}

const config = {
  entry: ENTRY_FILE,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders
  },
  plugins
};

module.exports = config;
