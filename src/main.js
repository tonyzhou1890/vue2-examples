// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/reset.css'
import '@/styles/global.css'
import Item from '@/components/TreeItem'

Vue.config.productionTip = false
Vue.component('item', Item)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
