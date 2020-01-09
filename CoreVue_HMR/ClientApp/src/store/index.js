import Vue from 'vue'
import Vuex from 'vuex'

// -- mutations --
import defaultContainer from './modules/defaultContainer'
// -- d2 --
import d2admin from './modules/d2admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    defaultContainer,
    d2admin
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})
