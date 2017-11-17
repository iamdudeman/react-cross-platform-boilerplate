const webpack = require('webpack');
const path = require('path');

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
    }
};

module.exports = config;
