const webpack = require('webpack');

module.exports = {

    devtool: 'source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}
