const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry:path.join(__dirname, 'src/index.js'),
    output: {
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    plugins: [
        new VueLoaderPlugin()   //vue-loader踩坑点
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader', 
            }
        ]
    }
};