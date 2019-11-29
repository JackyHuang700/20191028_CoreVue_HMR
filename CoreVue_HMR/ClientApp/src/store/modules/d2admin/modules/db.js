import router from '@/router'
import { cloneDeep } from 'lodash'
import { database as getDatabase, dbGet, dbSet } from '@/libs/util.db'

export default {
  namespaced: true,
  actions: {
    /**
     * @description 將數據存儲到指定位置 | 路徑不存在會自動初始化
     * @description 效果類似於取值 dbName.path = value
     * @param {Object} context
     * @param {Object} payload dbName {String} 數據庫名稱
     * @param {Object} payload path {String} 存儲路徑
     * @param {Object} payload value {*} 需要存儲的值
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    set (context, {
      dbName = 'database',
      path = '',
      value = '',
      user = false
    }) {
      dbSet({ dbName, path, value, user })
    },
    /**
     * @description 獲取數據
     * @description 效果類似於取值 dbName.path || defaultValue
     * @param {Object} context
     * @param {Object} payload dbName {String} 數據庫名稱
     * @param {Object} payload path {String} 存儲路徑
     * @param {Object} payload defaultValue {*} 取值失敗的默認值
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    get (context, {
      dbName = 'database',
      path = '',
      defaultValue = '',
      user = false
    }) {
      return dbGet({ dbName, path, defaultValue, user })
    },
    /**
     * @description 獲取存儲數據庫對象
     * @param {Object} context
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    database (context, {
      user = false
    } = {}) {
      return getDatabase({
        user,
        defaultValue: {}
      })
    },
    /**
     * @description 清空存儲數據庫對象
     * @param {Object} context
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    databaseClear (context, {
      user = false
    } = {}) {
      return getDatabase({
        user,
        validator: () => false,
        defaultValue: {}
      })
    },
    /**
     * @description 獲取存儲數據庫對象 [ 區分頁面 ]
     * @param {Object} context
     * @param {Object} payload basis {String} 頁面區分依據 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    databasePage (context, {
      basis = 'fullPath',
      user = false
    } = {}) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}`,
        user,
        defaultValue: {}
      })
    },
    /**
     * @description 清空存儲數據庫對象 [ 區分頁面 ]
     * @param {Object} context
     * @param {Object} payload basis {String} 頁面區分依據 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    databasePageClear (context, {
      basis = 'fullPath',
      user = false
    } = {}) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}`,
        user,
        validator: () => false,
        defaultValue: {}
      })
    },
    /**
     * @description 快速將頁面當前的數據 ( $data ) 持久化
     * @param {Object} context
     * @param {Object} payload instance {Object} vue 實例
     * @param {Object} payload basis {String} 頁面區分依據 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    pageSet (context, {
      instance,
      basis = 'fullPath',
      user = false
    }) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}.$data`,
        user,
        validator: () => false,
        defaultValue: cloneDeep(instance.$data)
      })
    },
    /**
     * @description 快速獲取頁面快速持久化的數據
     * @param {Object} context
     * @param {Object} payload instance {Object} vue 實例
     * @param {Object} payload basis {String} 頁面區分依據 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    pageGet (context, {
      instance,
      basis = 'fullPath',
      user = false
    }) {
      return dbGet({
        path: `$page.${router.app.$route[basis]}.$data`,
        user,
        defaultValue: cloneDeep(instance.$data)
      })
    },
    /**
     * @description 清空頁面快照
     * @param {Object} context
     * @param {Object} payload basis {String} 頁面區分依據 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否區分用戶
     */
    pageClear (context, {
      basis = 'fullPath',
      user = false
    }) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}.$data`,
        user,
        validator: () => false,
        defaultValue: {}
      })
    }
  }
}
