import Vue from 'vue'
import VueRouter from 'vue-router'

// -- DefaultContainerByCli --
// containers
const DefaultContainerByCli = () => import('@/containers/DefaultContainerByCli')

// -- DefaultContainer --
// containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

Vue.use(VueRouter)

const routes = [
// -- DefaultContainer --
  {
    path: '/',
    name: 'home',
    component: DefaultContainer
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // -- DefaultContainerByCli --
  {
    path: '/defaultcontainerbycli',
    name: 'DefaultContainerByCli',
    component: DefaultContainerByCli

  }
]

const router = new VueRouter({
  routes
})

export default router
