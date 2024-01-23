const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = {
  mode: 'develompent',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true
  }
}
