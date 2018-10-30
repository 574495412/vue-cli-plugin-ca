const vuxLoader = require('vux-loader')

module.exports = {
    baseUrl: process.env.NODE_ENV !== 'production'
        ? '/'
        : '/',
    configureWebpack: config => {
        // 调试使用模式
        config.devtool = 'source-map'
        vuxLoader.merge(config, {
            plugins: ['vux-ui', {
                name: 'duplicate-style',
                options: {
                    cssProcessorOptions: {
                        safe: true,
                        zindex: false,
                        autoprefixer: {
                            add: true,
                            browsers: [
                                'iOS >= 7',
                                'Android >= 4.1'
                            ]
                        }
                    }
                }
            }
            ]
        })
    }
}
