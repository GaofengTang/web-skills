// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import menulist from './components/menulist'
import 'github-markdown-css'
import Logo from './components/logo'
import Star from './components/Star'

Vue.config.productionTip = false
Vue.component('menu-list', menulist)
Vue.component('Logo', Logo)
Vue.component('Star', Star)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
