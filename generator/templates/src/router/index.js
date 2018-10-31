import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

// 导入所有的页面元素
//
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue').then(m => m.default)

Vue.use(Meta) // 设置页面的meta信息
Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
                meta: { requireAuth: true }
            }
        ]
    }
]
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

router.beforeEach((to, from, next) => {
})
// 拦截器用于所有的路径请求后的操作
router.afterEach((to, from, next) => {

})

export default router
