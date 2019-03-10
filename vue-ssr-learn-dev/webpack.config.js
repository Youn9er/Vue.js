const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            // {
            //     test: /\.css$/,
            //     // loader: "css-loader"
            //     use: [
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
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
    config.module.rules.push(
        {
            test:/\.styl/,
            use:[
                'style-loader',
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true
                    }
                },
                'stylus-loader'
            ]
        }
    ),
    
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
} else {
    config.entry = {
        app: path.resolve(__dirname, "src/index.js"),
        vendor: ["vue"]
    };
    config.output.filename = "[name].[chunkhash:8].js"
    config.module.rules.push(
        {
            test: /\.styl/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:[
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    );
    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new ExtractTextPlugin("styles.[hash:16].css"),
        webpack.optimize.CommonsChunkPlugin({
            name: "runtime"
        })
    )
}
module.exports = config;