const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ['./template.html'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,   // Matches .css files
                use: ['style-loader', 'css-loader'], // Loaders are applied from right to left
            }
        ]
    }
}