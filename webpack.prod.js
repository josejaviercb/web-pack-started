const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');



module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },
    module: {
        rules: [
            {
                test:/\.html$/i,

                loader: 'html-loader',
                options: {
                    //attributes: false,
                    sources: false,
                    //use: {minimize: true },
                },
            },
            {
                test: /\.css$/i,
                exclude: '/styles.css$/',
                use: ["style-loader", "css-loader"],
            },
            {
                test: '/styles.css$/',
                use: [MiniCssExtract.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },

    plugins: [
        new HtmlWebPack({
            template: './src/index.html',
            //filename: './index.html',
            //inject: 'body',
            title: "Mi Webpack"
        }),

        new MiniCssExtract({
            filename:'[name][fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: "src/assests", to: "assests" },
            ],
        })
    ]

}