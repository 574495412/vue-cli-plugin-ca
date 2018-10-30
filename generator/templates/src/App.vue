<template>
    <div id="app" v-cloak style="height: 100%">
        <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOutLeft">
            <!--keep-alive的使用如何导致不刷新页面内容-->
            <keep-alive>
                <router-view class="router-view" :key="key" ref="child"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        metaInfo: {
            // if no subcomponents specify a metaInfo.HeaderTitle, this HeaderTitle will be used
            title: 'Vue-Walter模板项目',
            // all titles will be injected into this template
            titleTemplate: '%s'
        },
        data() {
            return {}
        },
        computed: {
            key() {
                return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
            }
        }
    }
</script>

<style lang="less">
    /*引入 reset.less，默认样式不包含reset，并且部分用户自己有一套reset样式，因此需要在App.vue进行手动引入*/
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    /*@media only screen and (min-device-width:800px) { html { overflow:hidden; } }*/
    html {
        height: 100%;
        overflow-x: hidden;
    }

    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: "Arial", "Microsoft YaHei", Helvetica, "黑体", "宋体", sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
        overflow-x: hidden;
    }

    .weui-cells {
        font-size: 14px !important;
    }
    // 所有的iconfont图标的样式
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>
