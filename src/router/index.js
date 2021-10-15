import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },   
    {
      path: '/user',
      name: 'Layout',
      component: Layout,
      children: [
          {
            path: '/seat',
            name: 'seat',
            component:() => import("@/views/Seat"),
          }
        ]
    }
  ]
})
