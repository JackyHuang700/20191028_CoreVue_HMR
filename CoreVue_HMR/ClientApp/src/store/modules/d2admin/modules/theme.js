// 設置文件
import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 主題
    list: setting.theme.list,
    // 現在激活的主題 這應該是一個名字 不是對象
    activeName: setting.theme.list[0].name
  },
  getters: {
    /**
     * @description 返回當前的主題信息 不是一個名字 而是當前激活主題的所有數據
     * @param {Object} state state
     */
    activeSetting (state) {
      return state.list.find(theme => theme.name === state.activeName)
    }
  },
  actions: {
    /**
     * @description 激活一個主題
     * @param {String} themeValue 需要激活的主題名稱
     */
    set ({ state, commit, dispatch }, themeName) {
      return new Promise(async resolve => {
        // 檢查這個主題在主題列表裡是否存在
        state.activeName = state.list.find(e => e.name === themeName) ? themeName : state.list[0].name
        // 將 vuex 中的主題應用到 dom
        commit('dom')
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'theme.activeName',
          value: state.activeName,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * @description 從持久化數據加載主題設置 * @param {Object} context
     */
    load ({ state, commit, dispatch }) {
      return new Promise(async resolve => {
        // store 賦值
        let activeName = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'theme.activeName',
          defaultValue: state.list[0].name,
          user: true
        }, { root: true })
        // 檢查這個主題在主題列表裡是否存在
        if (state.list.find(e => e.name === activeName)) {
          state.activeName = activeName
        } else {
          state.activeName = state.list[0].name
          // 持久化
          await dispatch('d2admin/db/set', {
            dbName: 'sys',
            path: 'theme.activeName',
            value: state.activeName,
            user: true
          }, { root: true })
        }
        // 將 vuex 中的主題應用到 dom
        commit('dom')
        // end
        resolve()
      })
    }
  },
  mutations: {
    /**
     * @description 將 vuex 中的主題應用到 dom
     * @param {Object} state state
     */
    dom (state) {
      document.body.className = `theme-${state.activeName}`
    }
  }
}
