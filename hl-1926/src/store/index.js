import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import getters from './getters'
import actions from './actions'
// import mutations from './mutations'
import user from './modules/user'

export default new vuex.Store({
    getters,
    actions,
    // mutations,
    modules: {
        user
    }
})