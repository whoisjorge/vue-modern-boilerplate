/**
 * Vuex
 * https://vuex.vuejs.org
 */
import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    global
  }
})

export default store
