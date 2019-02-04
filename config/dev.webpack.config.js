"use strict"

const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./base.webpack.config");

module.exports = webpackMerge( baseWebpackConfig, {
    mode: "development",
    devServer: {
        hot: true,
        host: "0.0.0.0",
        watchOptions: {
            poll: true
        },
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.styl(us)?$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "img/[name].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "fonts/[name].[ext]"
                }
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": "'dev'"
        }),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: true
        })
    ]
});
