const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');


const WEB_ENTRY = path.resolve(__dirname, './src/app/web/index.js');
const WEB_DIST = path.resolve(__dirname, './dist/web');

const entry = {
  app: WEB_ENTRY,
}

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Counter',
    template: './webpack/web/index.template.html',
    filename: 'index.html',
    inject: 'footer',
    minify: { collapseWhitespace: true }
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'bundleAnalyzer.html',
    defaultSizes: 'parsed'
  }),
]

const output = {
  path: WEB_DIST,
  filename: '[name]-[hash].js'
}

const resolve = {
  alias: {
    actions: path.resolve(__dirname, 'src/actions'),
    app: path.resolve(__dirname, 'src/app'),
    components: path.resolve(__dirname, 'src/components'),
    reducers: path.resolve(__dirname, 'src/reducers'),
  },
  extensions: ['.js'],
  modules: [path.resolve(__dirname, 'node_modules')],
};

const optimization = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        priority: 1,
      },
    }
  }
};


const webpackModule = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    },

  ]
}

module.exports = {
  entry,
  plugins,
  module: webpackModule,
  output,
  optimization,
  resolve,
};
