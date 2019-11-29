import Vue from 'vue'
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

// 核心插件
Vue.use(d2Admin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
