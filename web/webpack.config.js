const webpack = require('webpack');
const path = require('path');
const WebpackHMRPlugin = require('nodeblues/webpack').WebpackHMRPlugin;

const BUILD_DIR = path.resolve(__dirname, '../build/web');
const SRC_DIR = path.resolve(__dirname, './src');

const isProduction = process.argv.includes('-p');

const ENTRY_FILE = SRC_DIR + '/index.js';

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const plugins = [];
const loaders = [
  {
    test: /.js/,
    include: [SRC_DIR, path.resolve(__dirname, '../shared/src')],
    loader: 'babel-loader',
    exclude: '/node_modules/',
    query: {
      presets: [ 'es2015', 'react' ]
    }
  }
];

if (isProduction) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'bundleAnalyzer.html',
    defaultSizes: 'parsed',
    openAnalyzer: true
  }));
} else {
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

/*
https://github.com/webpack/webpack/issues/1643#issuecomment-342261535

I got this to work by setting the includePaths but also by setting both resolve.root and resolveLoader.root to path.resolve(__dirname, 'node_modules') (or wherever you want those external sources to be able to resolve modules). @jraede I think that worked for you only because your include paths both had node_modules in an ancestor directory. You need to set both so files external to your project that you want to import can themselves (a) import other modules from your project's node_modules, and (b) so your loaders can be resolved (otherwise you get cannot resolve module 'babel', etc).


  resolve: {
    alias: { src: srcPath, common: commonPath },
    extensions: ['', '.js', '.scss', '.json'],
    root: [path.resolve(__dirname, 'node_modules')]
  },

  resolveLoader: {
    root: [path.resolve(__dirname, 'node_modules')]
  },
*/
