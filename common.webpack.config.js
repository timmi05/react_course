const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        app: './index.jsx'
    },

    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader'],
            },
           {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader'],
            },
        ]
    }
}