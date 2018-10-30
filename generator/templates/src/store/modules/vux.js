import * as types from '../mutation-types'

// 1. initial state
const state = {
    scrolltotop: 0,
    isloading: false,
    direction: 'forward',
    // Header part
    showHeader: false,
    showTabbar: true

}

// 2. local mutations 业务独立
const mutations = {
    [types.UPDATE_TOP_POSITION] (state, scrolltotop) {
        // console.log(`previous data is ${state.userinfo} before clear`)
        state.scrolltotop = scrolltotop
    },
    [types.UPDATE_LOADING_STATUS] (state, isloading) {
        // console.log(`previous data is ${state.userinfo} before clear`)
        state.isloading = isloading
    },
    [types.UPDATE_TRANSITION_DIRECTION] (state, direction) {
        // console.log(`previous data is ${state.userinfo} before clear`)
        state.direction = direction
    },
    [types.UPDATE_SHOW_HEADER] (state, showHeader) {
        // console.log(`previous data is ${state.userinfo} before clear`)
        state.showHeader = showHeader
    },
    [types.UPDATE_SHOW_TABBAR] (state, showTabbar) {
        // console.log(`previous data is ${state.userinfo} before clear`)
        state.showTabbar = showTabbar
    }
}

// 3. actions
const actions = {
    UpdateTopPosition ({ commit, state }, scrolltotop) {
        commit(types.UPDATE_TOP_POSITION, scrolltotop)
    },
    UpdateLoadingStatus ({ commit, state }, isloading) {
        commit(types.UPDATE_LOADING_STATUS, isloading)
    },
    UpdateTransitionDirection ({ commit, state }, direction) {
        commit(types.UPDATE_TRANSITION_DIRECTION, direction)
    },
    UpdateShowHeader ({ commit, state }, showHeader) {
        commit(types.UPDATE_SHOW_HEADER, showHeader)
    },
    UpdateShowTabbar ({ commit, state }, showTabbar) {
        commit(types.UPDATE_SHOW_TABBAR, showTabbar)
    }
}

export default {
    state,
    mutations,
    actions
}
