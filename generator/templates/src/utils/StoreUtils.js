const store = require('store')
var expirePlugin = require('store/plugins/expire')
store.addPlugin(expirePlugin)

const get = function (storeKey) {
    // 移除所有过期的key
    // store.removeExpiredKeys()
    return store.get(storeKey)
}

const set = function (storeKey, storeValue, seconds) {
    // 第三个参数是设置对应的过期时间,到了时间会自动删除掉该过期的key
    if (seconds) {
        store.set(storeKey, storeValue, new Date().getTime() + seconds * 1000)
    } else {
        store.set(storeKey, storeValue)
    }
}

const remove = function (storeKey) {
    store.remove(storeKey)
}

const clearall = function () {
    store.clearAll()
}

export default {get, set, remove, clearall}
