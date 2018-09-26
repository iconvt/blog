import Vue from 'vue'
import Vuex from 'vuex'
import leftbanner from './modules/leftbanner';
import article from './modules/article';
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        leftbanner,
        article
    },
    strict: debug,
})