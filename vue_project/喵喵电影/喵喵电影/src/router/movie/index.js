export default {
  path: '/Movie',
  name: 'Movie',
  component: () => import('@/views/Movie')
  // children: [
  //   {
  //     path: 'city',
  //     name: 'city',
  //     component: () => import('@/components/City')
  //   },
  //   {
  //     path: 'nowPlying',
  //     name: 'nowPlying',
  //     component: () => import('@/components/nowPlaying')
  //   },
  //   {
  //     path: 'comingSoon',
  //     name: 'comingSoon',
  //     component: () => import('@/components/comingSoon')
  //   },
  //   {
  //     path: 'search',
  //     name: 'search',
  //     component: () => import('@/components/search')
  //   },
  // ]
}
