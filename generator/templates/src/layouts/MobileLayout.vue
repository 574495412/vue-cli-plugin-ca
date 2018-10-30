<template>
    <div style="height: 100%">
        <div v-transfer-dom>
            <loading v-model="isLoading"></loading>
        </div>
        <!-- main content -->
        <view-box ref="viewBox" :body-padding-top="showHeader ? '35px' : '0'" body-padding-bottom="105px">
            <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
            <transition
                    @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
                    :name="viewTransition" :css="!!direction">
                <keep-alive>
                    <router-view class="router-view" ref="child"></router-view>
                </keep-alive>
            </transition>

            <tabbar icon-class="vux-center" v-show="showTabbar" slot="bottom">
                <tabbar-item :link="{name:'home'}" :selected="route.name === 'home'">
                      <span slot="icon" style="position:relative;top: -2px;">
                        <svg slot="icon" class="icon" aria-hidden="true" style="height:30px;width:30px;">
                         <use xlink:href="#zhuye"></use>
                        </svg>
                      </span>
                    <span slot="label"><%- rootOptions.projectName %></span>
                </tabbar-item>
            </tabbar>
        </view-box>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'MobileHomeLayout',
        metaInfo: {
            // if no subcomponents specify a metaInfo.HeaderTitle, this HeaderTitle will be used
            title: 'app',
            // all titles will be injected into this template
            titleTemplate: '%s'
        },
        data() {
            return {}
        },
        computed: {
            ...mapState({
                route: state => state.route,
                path: state => state.route.path,
                ScrollTop: state => state.vux.scrolltotop,
                isLoading: state => state.vux.isloading,
                direction: state => state.vux.direction,
                showHeader: state => state.vux.showHeader,
                showTabbar: state => state.vux.showTabbar
            }),

            viewTransition() {
                if (!this.direction) return ''
                return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
            }
        },
        methods: {
            ...mapActions({
                updateTopPosition: 'UpdateTopPosition'
            })
        },
        activated() {
            this.updateTopPosition(10)
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/tap.less';

    .router-view {
        width: 100%;
        /*top: 0px !important;*/
        /*height: 100%;*/
        /*top: 46px;*/
    }

    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 500ms;
        height: 100%;
        top: 46px;
        position: absolute;
        backface-visibility: hidden;
        /*perspective: 1000;*/
    }

    .vux-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .vux-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

</style>
