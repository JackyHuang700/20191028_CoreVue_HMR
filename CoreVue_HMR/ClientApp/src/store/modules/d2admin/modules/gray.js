export default {
  namespaced: true,
  state: {
    // 灰度
    active: false
  },
  mutations: {
    /**
     * @description 切換灰度狀態
     * @param {Object} state state
     */
    toggle (state) {
      state.active = !state.active
    },
    /**
     * @description 設置灰度模式
     * @param {Object} state state
     * @param {Boolean} active active
     */
    set (state, active) {
      state.active = active
    }
  }
}
