

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']


module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    publicPath: './', // 设置打包文件相对路径
    productionSourceMap: false,
    devServer: {
        port: 8023,
        open: true,
        proxy: {
            //以'/api'开头的接口会转接到下面的target的ip
            '/api': {
                //target: 'http://192.168.0.188:10999/', // target host
                target: 'http://abc123.dragonmainland.com', // target host
                // target: 'http://gdmtest.dragonmainland.com:8083/', // target host
                // target: 'http://192.168.0.124:10999/', // target host
                // target: 'http://192.168.0.105:9999/', // 鲍哥本地 host
                // target: 'https://gdmtest.dragonmainland.io/', // 鲍哥本地 host
                changeOrigin: true, // needed for virtual hosted sites
                ws: false, // proxy websockets
                pathRewrite: {
                    //路径重写
                    '^/api': '', // rewrite path
                },

            },

        }
    },
    configureWebpack: (config) => {
        // plugins: [
        //     // 下面是下载的插件的配置
        //     new CompressionWebpackPlugin({
        //         algorithm: 'gzip',
        //         test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        //         threshold: 10240,
        //         minRatio: 0.8
        //     }),

        // ]
        if (process.env.NODE_ENV === 'production') {
            config.plugins = [
                ...config.plugins,
                new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            ]
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }



    }


}
