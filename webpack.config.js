const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
    mode: 'development',
    output: {
      clean: true,
    },
    optimization: {
        minimize: false,
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
            filename:'[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })
    ]

}