const path = require('path');
const HtmlWebpackCplugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'biuld'),
    filename: 'bundle.[jscontenthash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackCplugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
