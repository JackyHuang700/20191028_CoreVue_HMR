import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由數據
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
