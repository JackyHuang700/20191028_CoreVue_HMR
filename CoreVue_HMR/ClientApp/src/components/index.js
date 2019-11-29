import Vue from 'vue'

import d2Container from './d2-container'

// 注意 有些組件使用異步加載會有影響
Vue.component('d2-container', d2Container)
Vue.component('d2-icon', () => import('./d2-icon'))
