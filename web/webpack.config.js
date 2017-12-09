const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackHMRPlugin = require('nodeblues/webpack').WebpackHMRPlugin;

const BUILD_DIR = path.resolve(__dirname, '../build/web');
const SRC_DIR = path.resolve(__dirname, './src');

const ENTRY_FILE = SRC_DIR + '/index.js';

const isProduction = process.argv.includes('-p');


const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': isProduction ? '"production"' : '"development"'
    }
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebpackPlugin({
    title: 'Counter',
    template: './index.template.html',
    filename: 'index.html',
    inject: 'footer',
    minify: { collapseWhitespace: true }
  })
];
const loaders = [
  {
    test: /.jsx?/,
    include: [SRC_DIR, path.resolve(__dirname, '../shared/src')],
    loader: 'babel-loader',
  }
];

// Add production or dev specific plugins and loaders
if (isProduction) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'bundleAnalyzer.html',
    defaultSizes: 'parsed'
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
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  entry: {
    app: ENTRY_FILE,
    vendor: ['react', 'react-redux', 'redux', 'react-dom']
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-[hash].js'
  },
  module: {
    loaders
  },
  plugins
};

module.exports = config;
