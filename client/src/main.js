import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueLocalStorage from 'vue-localstorage'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueLocalStorage)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'http://localhost:3000/api/';
Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
