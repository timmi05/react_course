const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },

    resolve: {
        modules: ['node_modules']
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
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                              extensions: ['.js', '.jsx']
                },
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader'],
                exclude: /node_modules/
            },
           {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader'],
            },
        ]
    }
}