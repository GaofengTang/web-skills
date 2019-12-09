import Vue from 'vue'
import Router from 'vue-router'
// import movieRouter from './movie'
// import cinemaRouter from './cinema'
// import mineRouter from './mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/Movie'
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: () => import('@/views/Mine')
    },
    {
      path: '/Cinema',
      name: 'Cinema',
      component: () => import('@/views/Cinema')
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: () => import('@/views/Movie'),
      redirect: '/Movie/nowPlying',
      children: [
        {
          path: 'city',
          name: 'city',
          component: () => import('@/components/City')
        },
        {
          path: 'nowPlying',
          name: 'nowPlying',
          component: () => import('@/components/nowPlaying')
        },
        {
          path: 'comingSoon',
          name: 'comingSoon',
          component: () => import('@/components/comingSoon')
        },
        {
          path: 'Search',
          name: 'Search',
          component: () => import('@/components/Search')
        }
      ]
    }
  ]
})
