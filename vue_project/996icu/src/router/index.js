import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zh_CN',
      name: 'zh_CN',
      component: () => import('../views/zh_CN.vue')
    },
    {
      path: '/en_US',
      name: 'en_US',
      component: () => import('../views/en_US.vue')
    },
    {
      path: '/es_MX',
      name: 'es_MX',
      component: () => import('../views/es_MX.vue')
    },
    {
      path: '/ja_JP',
      name: 'ja_JP',
      component: () => import('../views/ja_JP.vue')
    },
    {
      path: '/*',
      component: () => import('../views/zh_CN.vue')
    }
  ],
  base: '/996icu'
})
