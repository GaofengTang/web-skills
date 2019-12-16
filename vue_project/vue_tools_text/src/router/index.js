import Vue from 'vue'
import Router from 'vue-router'
// import betterScroll from './better-scroll'
// import Swiper from './swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/better-scroll',
      name: 'better-scroll',
      component: () => import('@/views/better-scroll')
    },
    {
      path: '/mint-ui',
      name: 'mint-ui',
      component: () => import('@/views/mint-ui')
    },
    {
      path: '/element',
      name: 'element',
      component: () => import('@/views/element')
    }
  ]
})
