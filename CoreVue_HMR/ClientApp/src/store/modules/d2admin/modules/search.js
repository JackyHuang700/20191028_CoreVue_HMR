import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 搜索面板激活狀態
    active: false,
    // 快捷鍵
    hotkey: {
      open: setting.hotkey.search.open,
      close: setting.hotkey.search.close
    },
    // 所有可以搜索的頁面
    pool: []
  },
  mutations: {
    /**
     * @description 切換激活狀態
     * @param {Object} state state
     */
    toggle (state) {
      state.active = !state.active
    },
    /**
     * @description 設置激活模式
     * @param {Object} state state
     * @param {Boolean} active active
     */
    set (state, active) {
      state.active = active
    },
    /**
     * @description 初始化
     * @param {Object} state state
     * @param {Array} menu menu
     */
    init (state, menu) {
      const pool = []
      const push = function (menu, titlePrefix = []) {
        menu.forEach(m => {
          if (m.children) {
            push(m.children, [ ...titlePrefix, m.title ])
          } else {
            pool.push({
              ...m,
              fullTitle: [ ...titlePrefix, m.title ].join(' / ')
            })
          }
        })
      }
      push(menu)
      state.pool = pool
    }
  }
}
