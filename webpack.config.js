const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = process.env.MODE_ENV || 'development';

module.exports = {
    mode,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'template/index.html')
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /.(c|sa|sc)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

        ]
    }
};
