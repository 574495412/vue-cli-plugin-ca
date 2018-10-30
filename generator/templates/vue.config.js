
module.exports = {
    baseUrl: process.env.NODE_ENV !== 'production'
        ? '/'
        : '/',
    configureWebpack: config => {
        // 调试使用模式
        config.devtool = 'source-map'
    }
}
