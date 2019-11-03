import Vue from 'vue'
import Vuex from 'vuex'

// -- mutations --
import defaultContainer from './modules/defaultContainer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    defaultContainer
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})
