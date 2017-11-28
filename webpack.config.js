const path = require('path');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, 'src/public/dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            }
        ]
    }
};