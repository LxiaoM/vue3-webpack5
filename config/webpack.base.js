// webpack.base.js 基础的配置
const path = require('path')
//vue-loader@next版本之后需要引入这个插件
const { VueLoaderPlugin } = require('vue-loader')
// 自动根据main.js创建html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack');


module.exports = {
    entry: './src/main.js',	//打包的入口
    //设置别名
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        extensions: ['.js']
    },
    // 这个配置项是我们运行打包时出现的警告，提示我们打包文件过大，，这里是我们的demo 配置练习，我们这里进行这样一个配置就不会出现警告啦。
    performance: {
        hints: 'warning', // 枚举 false关闭
        maxEntrypointSize: 100000000, // 最大入口文件大小
        maxAssetSize: 100000000, // 最大资源文件大小
        assetFilter: function (assetFilename) { //只给出js文件的性能提示
            return assetFilename.endsWith('.js');
        }
    },
    //添加模块
    module: {
        rules: [
            {//设置.vue文件的解析规则
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {//设置css的解析规则
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' } // compiles Less to CSS
                ]
            }
        ]
    },
    devtool: 'inline-source-map',	//错误追踪工具
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',	//配置输出后的html文件名（可携带目录）
            template: './public/index.html',	//配置模板
            favicon: 'src/logo.jpg' // 配置logo
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
        })
    ],
    //配置webpack-dev-server将dist下的目录代理到web server
    devServer: {
        static: './dist',
        port: 8088, // 配置端口号
        // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
        historyApiFallback: true, // 解决前端路由刷新404问题
    }
}
