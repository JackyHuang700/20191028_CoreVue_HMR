// 设置文件
import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 用户信息
    info: setting.user.info
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} state vuex state
     * @param {*} info info
     */
    set ({ state, dispatch, commit }, info) {
      return new Promise(async resolve => {
        // store 赋值
        // state.info = info
        commit('setInfo', info)
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
     * @param {Object} state vuex state
     */
    load ({ state, dispatch, commit }) {
      return new Promise(async resolve => {
        const userInfo = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'user.info',
          defaultValue: setting.user.info,
          user: true
        }, { root: true })
        // store 赋值
        commit('setInfo', userInfo)

        // end
        resolve()
      })
    }
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    }
  }
}
