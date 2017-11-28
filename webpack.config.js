const path = require('path');
const webpack = require('webpack');

module.exports = {
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
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ]
    }
};