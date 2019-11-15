import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// -- setting --
import './assets/setting/bootstrap'
import './assets/setting/axios'
import './assets/styles/index.scss'

// --  --
import '@/store/systemParameter'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
