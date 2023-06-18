const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".js", '.ts', '.tsx'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: true } }],
        },
        {
            test: /\.svg$/,
            loader: '@svgr/webpack',
            options: {
                dimensions: false,
                svgoConfig: {
                    plugins: [{
                        name: 'removeViewBox',
                        active: false
                    }],
                },
                // svgrConfig: {
                //     plugins: [{
                //         name: 'removeViewBox',
                //         active: false
                //     }],
                // },
            },
        },
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: "eval-source-map" // "nosources-source-map"
};
