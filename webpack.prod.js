const merge = require('webpack-merge');
const common = require('./webpack.common');
const TersetPlugin = require('terset-webpack-plugin');
const CSSMinimizePlugin = require('css-mimnimize-webpack-plugin');

module.exports = merge(common, {
  mode = 'production',
  optimization: [
    new TersetPlugin({}),
    new HtmlWebpackCplugin({})
  ]
})
