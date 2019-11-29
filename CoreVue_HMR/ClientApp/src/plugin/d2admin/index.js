// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// flex 佈局庫
import 'flex.css'
// 組件
import '@/components'
// 國際化
// import i18n from '@/i18n.js'

// 功能插件
// import pluginError from '@/plugin/error'
// import pluginLog from '@/plugin/log'
// import pluginOpen from '@/plugin/open'

export default {
  async install (Vue, options) {
    // 設置為 false 以阻止 vue 在啟動時生成生產提示
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 當前環境
    Vue.prototype.$env = process.env.NODE_ENV
    // 當前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
    // 當前版本
    Vue.prototype.$version = process.env.VUE_APP_VERSION
    // 構建時間
    Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
    // Element
    Vue.use(ElementUI, {
      //  i18n: (key, value) => i18n.t(key, value)
    })
    // 插件
    // Vue.use(pluginError)
    // Vue.use(pluginLog)
    // Vue.use(pluginOpen)
  }
}
