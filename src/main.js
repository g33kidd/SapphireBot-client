// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios.create({
  baseURL: 'http://localhost:1337'
}))

// require('bootstrap')
require('@/styles/app.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
