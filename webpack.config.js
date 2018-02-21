const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    devtool: "inline-source-map",
    entry: {
        react: ['react', 'react-dom', 'react-router-dom', 'bootstrap/dist/js/bootstrap.min.js'],
        'react-form': ['react-form'],
        cryptos: ['./src/main/webapp/cryptos/index.tsx', './src/main/webapp/styles/main.scss']
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
            {test: /\.scss$/, use: extractSass.extract({use: [{loader: 'css-loader', options: {minimize: true}}, {loader: 'sass-loader'}]})}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['src/main/resources/static']),
        
        new webpack.optimize.CommonsChunkPlugin({
            names: ['react-form', 'react'],
            minChunks: Infinity
        }),

        new UglifyJsPlugin({
            include: /^react/,
            cache: true,
            parallel: true
        }),

        extractSass
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        publicPath: "/public/",
        path: path.resolve(__dirname, 'src/main/resources/static/public')
    }
};