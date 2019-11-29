import { uniqueId } from 'lodash'
// 設置文件
import setting from '@/setting.js'

/**
 * 給菜單數據補充上 path 字段
 * https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜單數據
 */
function supplementMenuPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementMenuPath(e.children)
    } : {}
  }))
}

export default {
  namespaced: true,
  state: {
    // 頂欄菜單
    header: [],
    // 側欄菜單
    aside: [],
    // 側邊欄收縮
    asideCollapse: setting.menu.asideCollapse
  },
  actions: {
    /**
     * 設置側邊欄展開或者收縮
     * @param {Object} context
     * @param {Boolean} collapse is collapse
     */
    asideCollapseSet ({ state, dispatch }, collapse) {
      return new Promise(async resolve => {
        // store 賦值
        state.asideCollapse = collapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 切換側邊欄展開和收縮
     * @param {Object} context
     */
    asideCollapseToggle ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 賦值
        state.asideCollapse = !state.asideCollapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 從持久化數據讀取側邊欄展開或者收縮
     * @param {Object} context
     */
    asideCollapseLoad ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 賦值
        state.asideCollapse = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          defaultValue: setting.menu.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    }
  },
  mutations: {
    /**
     * @description 設置頂欄菜單
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    headerSet (state, menu) {
      // store 賦值
      state.header = supplementMenuPath(menu)
    },
    /**
     * @description 設置側邊欄菜單
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    asideSet (state, menu) {
      // store 賦值
      state.aside = supplementMenuPath(menu)
    }
  }
}
