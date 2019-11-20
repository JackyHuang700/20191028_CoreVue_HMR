// -- DefaultContainerByCli --
// containers
const DefaultContainerByCli = () => import('@/containers/DefaultContainerByCli/Index')

// -- DefaultContainer --
// containers
const DefaultContainer = () => import('@/containers/DefaultContainer/Index')

// 由於懶加載頁面太多的話會造成webpack熱更新太慢，所以開發環境不使用懶加載，只有生產環境使用懶加載
const _import = require(`@/libs/util.import.${process.env.NODE_ENV}`)

const routes = [
  // -- DefaultContainer --
  {
    path: '/',
    name: 'index',
    component: DefaultContainer,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('demo/page1')
      },
      // 演示页面
      {
        path: 'page1',
        name: 'page1',
        meta: {
          title: '页面 1',
          auth: true
        },
        component: _import('demo/page1')
      },
      {
        path: 'page2',
        name: 'page2',
        meta: {
          title: '页面 2',
          auth: true
        },
        component: _import('demo/page2')
      },
      {
        path: 'page3',
        name: 'page3',
        meta: {
          title: '页面 3',
          auth: true
        },
        component: _import('demo/page3')
      }
    ]
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

// 導出需要顯示菜單的
export const frameInRoutes = routes

// 重新組織後導出
export default [
  ...routes
]
