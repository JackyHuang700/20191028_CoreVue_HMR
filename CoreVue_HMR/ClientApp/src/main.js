import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'

// -- setting --
import '@/assets/setting/bootstrap'
import '@/assets/setting/axios'
import '@/assets/styles/index.scss'

// 核心插件
import d2Admin from '@/plugin/d2admin'

// --  --
import '@/store/systemParameter'

// 菜單和路由設置
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
import { frameInRoutes } from '@/router/routes'

// 核心插件
Vue.use(d2Admin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
  // 處理路由 得到每一級的路由設置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 設置頂欄菜單
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 設置側邊欄菜單
    this.$store.commit('d2admin/menu/asideSet', menuAside)
    // 初始化菜單搜索功能
    this.$store.commit('d2admin/search/init', menuHeader)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}).$mount('#app')
