const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development"
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    target: "web",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: "bundle.[hash:16].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            tittle: "Hot Module Replacement"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                // loader: "css-loader"
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg)|(jpeg)|(gif)|(svg)|(png)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit:1024,
                            name: "[name].[hash:9].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.styl/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    "stylus-loader",
                ]
            }
        ]
    }
};

if(isDev){
    config.devtool = "#cheap-module-eval-source-map";
    config.mode = "development";
    // config.module.rules.push(
    //     {
    //         test:/\.styl/,
    //         use:[
    //             'style-loader',
    //             'css-loader',
    //             {
    //                 loader:'postcss-loader',
    //                 options:{
    //                     sourceMap:true
    //                 }
    //             },
    //             'stylus-loader'
    //         ]
    //     }
    // ),    
    
    config.devServer = {
        port:7998,
        host: "0.0.0.0",
        overlay: {
            errors: true,
        },
        hot:true,
        open:true,
        // historyFallback:{
        //
        // }
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config;