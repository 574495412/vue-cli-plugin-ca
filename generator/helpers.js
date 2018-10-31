// adapted from https://github.com/vuetifyjs/vue-cli-plugin-vuetify/blob/dev/generator/helpers.js
const fs = require('fs')

module.exports = api => {
    return {
        // 更新main.js入口js文件的配置, 或者直接使用: api.injectImports(utils.getMain(), `import './plugins/element.js'`)
        updateMain(callback) {
            const tsPath = api.resolve('./src/main.ts')
            const jsPath = api.resolve('./src/main.js')

            const mainPath = fs.existsSync(tsPath) ? tsPath : jsPath
            let content = fs.readFileSync(mainPath, {encoding: 'utf8'})

            let lines = content.split(/\r?\n/g)

            lines = callback(lines)

            content = lines.join('\n')
            fs.writeFileSync(mainPath, content, {encoding: 'utf8'})
        },
        // 更新babel的配置
        updateBabelConfig(callback) {
            let config, configPath

            const rcPath = api.resolve('./babel.config.js')
            const pkgPath = api.resolve('./package.json')
            if (fs.existsSync(rcPath)) {
                configPath = rcPath
                config = callback(require(rcPath))
            } else if (fs.existsSync(pkgPath)) {
                configPath = pkgPath
                config = JSON.parse(fs.readFileSync(pkgPath, {encoding: 'utf8'}))
                config.babel = callback(config.babel || {})
            }

            if (configPath) {
                const moduleExports = configPath !== pkgPath ? 'module.exports = ' : ''
                fs.writeFileSync(
                    configPath,
                    `${moduleExports}${JSON.stringify(config, null, 2)}`,
                    {encoding: 'utf8'}
                )
            }
        },
        deleteDuplicatedFiles(callback) {
            const routerfile = api.resolve('./src/router.js')
            const storefile = api.resolve('./src/store.js')
            const helloworldfile = api.resolve('./src/views/HelloWorld.vue')
            const aboutfile = api.resolve('./src/views/About.vue')
            if (fs.existsSync(routerfile)) {
                fs.unlinkSync(routerfile)
            }
            if (fs.existsSync(storefile)) {
                fs.unlinkSync(storefile)
            }
            if (fs.existsSync(helloworldfile)) {
                fs.unlinkSync(helloworldfile)
            }
            if (fs.existsSync(aboutfile)) {
                fs.unlinkSync(aboutfile)
            }
        }
    }
}