import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 各个业务逻辑模块
import vux from './modules/vux.js'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        vux
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
