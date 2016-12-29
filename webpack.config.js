const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const WrapperPlugin = require('wrapper-webpack-plugin');
const path = require('path');
const libraryName = 'cowsay-tag';


const scriptConfig = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: libraryName + '.min.js',
      library: 'cowsay',
      libraryTarget: 'var'
    },
    module: {
      loaders: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /(\.jsx|\.js)$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      root: path.resolve('./src'),
      extensions: ['', '.js']
    },
    plugins: [
        new UglifyJsPlugin({ minimize: true }),
        // used so that we can require the prod bundle in test
        new WrapperPlugin({
          footer: 'module.exports = cowsay;'
        })
    ]
};

const umdConfig = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: libraryName + '.js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
      loaders: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /(\.jsx|\.js)$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      root: path.resolve('./src'),
      extensions: ['', '.js']
    }
};

module.exports = [scriptConfig, umdConfig];
