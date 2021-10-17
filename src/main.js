// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from './store';
import '@/assets/style.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuex)
// 数组排重




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store:store,
  template: '<App/>'
})
