import Vue from 'vue'
// 自定义主题样式
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
// 按需导入组件
import {Button} from 'element-ui'

locale.use(lang)
Vue.use(Button)
