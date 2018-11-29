import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import me from '../components/me'
import animate from '../components/animate'

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
        path: '/animate',
        name: 'animate',
        component: animate
    }
  ]
})
