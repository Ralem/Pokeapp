"use strict"

const path = require("path");

function resolve(dir) {
    return path.join(__dirname, "..", dir);
};

module.exports = {
    entry: [
        resolve("src/main.js")
    ],
    resolve: {
        extensions: [".js"],
        alias: {
            src: path.resolve("src"),
            app: path.resolve("src/app"),
            components: path.resolve("src/app/components"),
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js?$/,
                loader: "eslint-loader",
                enforce: "pre",
                include: [resolve("src")],
                options: {
                    formatter: require("eslint-formatter-friendly")
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: [
                    {
                        loader: "html-loader",
                        options: {
                            interpolate: true
                        }
                    }
                ]
            }
        ]
    },
};
