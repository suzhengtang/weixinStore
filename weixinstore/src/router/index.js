import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import me from '../components/me'
import animate1 from '../components/animate1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
        path: '/animate1',
        name: 'animate1',
        component: animate1
    }
  ]
})
