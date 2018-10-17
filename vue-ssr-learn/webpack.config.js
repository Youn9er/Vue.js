const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HTMlPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

const isDev = process.env.NODE_ENV === "development"

const config = {
    target: "web",
    entry:path.join(__dirname, './src/index.js'),
    output: {
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'./dist')
    },
    plugins: [
        new VueLoaderPlugin(),   //vue-loader踩坑点
        new HTMlPlugin(),
        new webpack.DefinePlugin({
            "process.env" : {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader', 
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap:true
                        }
                    },
                    "stylus-loader"
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit:1024,
                        name: "[name].[hash:8].[ext]"
                    }
                }
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader"
            }
        ]
    }
};

if(isDev) {
    config.devtool = "#cheap-module-eval-source-map"
    config.devServer = {
        port:7999,
        host: "0.0.0.0",
        overlay: {
            errors: true
        },
        hot: true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}


module.exports = config;