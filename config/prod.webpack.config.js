"use strict"

const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./base.webpack.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIR_DIST = "../docs";
const PUBLIC_PATH = "/";
const ASSETS_DIR = "static";

module.exports = webpackMerge(baseWebpackConfig, {
    mode: "production",
    devtool: "#source-map",
    output: {
        path: path.resolve(__dirname, DIR_DIST),
        publicPath: PUBLIC_PATH,
        filename: `${ASSETS_DIR}/js/[name].[chunkhash].js`
    },
    optimization: {
        minimizer: [
            new UglifyjsWebpackPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                styles: {
                    name: 'main',
                    test: /\.styl(us)?$/,
                    chunks: 'all',
                    enforce: true
                }
            },
        }
    },
    module: {
        // Load files w/ url-loader
        rules: [
            {
                test: /\.styl(us)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: `${ASSETS_DIR}/img/[name].[hash].[ext]`,
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: `${ASSETS_DIR}/fonts/[name].[hash].[ext]`,
                },
            },
        ]
    },
    plugins: [
        // Remove previus /dis folder
        new CleanWebpackPlugin([DIR_DIST], {
            root: __dirname,
            allowExternal: true
        }),
        // Define env global
        new webpack.DefinePlugin({
            "process.env": "'prod'"
        }),
        new MiniCssExtractPlugin({
            filename: `${ASSETS_DIR}/css/[name].[hash].css`,
        }),
        // Add static files to build
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../src/static"),
                to: ASSETS_DIR,
                ignore: [".*"]
            }
        ]),
        // Generate proper dist/index.html
        new HTMLWebpackPlugin({
            filename: path.resolve(__dirname, `${DIR_DIST}/index.html`),
            template: "src/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitepace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: "dependency"
        })
    ]
});
