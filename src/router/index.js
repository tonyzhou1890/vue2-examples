import Vue from 'vue'
import Router from 'vue-router'
import examples from '@/views/examples'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'examples',
      component: examples
    }
  ]
})
