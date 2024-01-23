const path = require("path");
const HtmlWebpackCplugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true
  },
  plugins: [
    new HtmlWebpackCplugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        // dependecy: { not: ["url"] },
        type: "asset/resource",
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            }
          }
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  }
};
