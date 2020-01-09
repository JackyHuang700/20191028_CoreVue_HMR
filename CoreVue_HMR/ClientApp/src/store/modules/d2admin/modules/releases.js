import util from '@/libs/util.js'
import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // mTERRACEAdmin 版本
    version: setting.releases.version
  },
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state vuex state
     */
    versionShow (state) {
      util.log.capsule('mTERRACEAdmin', `v${state.version}`)
    }
  }
}
