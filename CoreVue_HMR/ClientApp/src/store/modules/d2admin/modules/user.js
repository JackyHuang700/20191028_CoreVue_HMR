export default {
  namespaced: true,
  state: {
    // 用户信息
    info: {}
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} context
     * @param {*} info info
     */
    set ({ state, dispatch, commit }, info) {
      return new Promise(async resolve => {
        // store 赋值
        // state.info = info
        commit('updateStateInfo', info)
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'user.info',
          value: info,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} context
     */
    load ({ state, dispatch, commit }) {
      return new Promise(async resolve => {
        // store 赋值
        const info = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'user.info',
          defaultValue: {},
          user: true
        }, { root: true })
        commit('updateStateInfo', info)
        // end
        resolve()
      })
    }
  },
  mutations: {
    updateStateInfo (state, info) { state.info = info }
  }
}
