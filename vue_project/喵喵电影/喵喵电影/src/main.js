// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Mint, {DatetimePicker, MessageBox, Switch, Toast} from 'mint-ui';
import 'font-awesome/css/font-awesome.css'
import Scroller from './components/Scroller'
Vue.use(ElementUI)
// Vue.use(Mint)
Vue.config.productionTip = false
Vue.component('Scroller', Scroller)
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
