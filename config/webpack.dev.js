// webpack.dev.js 开发环境的配置
const path = require('path')
const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const devConfig = {
    mode: 'development', // 开发环境
    output: {
        filename: 'bundle.js',  // 输出文件名
        path: path.join(__dirname, '..', 'dist')  // 输出目录
    },
}
module.exports = merge(baseConfig, devConfig)
