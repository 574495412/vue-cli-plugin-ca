
// const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')
module.exports = api => {
  api.chainWebpack(webpackConfig => {
    // 通过 webpack-chain 修改 webpack 配置
    webpackConfig
    //   .plugin('vue-auto-routing')
    //   .use(VueAutoRoutingPlugin, [
    //   {
    //     pages: 'src/pages',
    //     nested: true
    //   }])
  })
  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
  })

  api.registerCommand('test', args => {
    // 注册 `vue-cli-service test`
  })
}