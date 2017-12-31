const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
      historyApiFallback: {
        index: path.join(__dirname, "src/public/index.html")
      },
      index: path.join(__dirname, "src/public/index.html"),

      compress: true,
      overlay: {
        errors: true,
        warnings: true,
      },
      stats: "errors-only",
      host: 'localhost',
      port: 3000
    },
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'src/public/dist')
    },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader?importLoaders=1"
          }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Dating-App',
        filename: './src/public/dist/index.html'
      })
    ]
};