import Vue from 'vue'
import {
    Actionsheet,
    Alert,
    AlertPlugin,
    Badge,
    BusPlugin,
    Card,
    Cell,
    Checklist,
    DevicePlugin,
    Divider,
    Flexbox,
    FlexboxItem,
    Group,
    GroupTitle,
    Loading,
    LoadingPlugin,
    LoadMore,
    Panel,
    Popup,
    PopupHeader,
    Swipeout,
    SwipeoutButton,
    SwipeoutItem,
    Tab,
    Tabbar,
    TabbarItem,
    TabItem,
    Toast,
    ToastPlugin,
    TransferDom,
    ViewBox,
    WechatPlugin,
    XButton,
    XHeader,
    XInput,
    XTextarea
} from 'vux'

Vue.component('x-button', XButton)
Vue.component('divider', Divider)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('view-box', ViewBox)
Vue.component('cell', Cell)
Vue.component('checklist', Checklist)
Vue.component('group-title', GroupTitle)
Vue.component('group', Group)
Vue.component('swipeout', Swipeout)
Vue.component('swipeout-item', SwipeoutItem)
Vue.component('swipeout-button', SwipeoutButton)
Vue.component('x-input', XInput)
Vue.component('badge', Badge)
Vue.component('x-textarea', XTextarea)
Vue.component('card', Card)
Vue.component('panel', Panel)
Vue.component('actionsheet', Actionsheet)
Vue.component('alert', Alert)
Vue.component('load-more', LoadMore)
Vue.component('loading', Loading)
Vue.component('popup', Popup)
Vue.component('popup-header', PopupHeader)
Vue.component('toast', Toast)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('x-header', XHeader)
// plugins
Vue.use(DevicePlugin)
Vue.use(WechatPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(BusPlugin)
Vue.directive('transfer-dom', TransferDom)
