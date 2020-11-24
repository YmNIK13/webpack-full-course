const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js',
    },
    output: {
        filename: '[name].[contenthash].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack generate',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}