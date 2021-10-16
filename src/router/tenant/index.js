import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/layout/customer/Layout'

Vue.use(Router)

export default new Router({
  routes: [
       
    {
      path: '/main',
      name: 'Layout',
      component: Layout,
      children: [
          {
            path: '/user',
            name: 'user',
            component:() => import("@/views/User"),
          },
          {
            path: '/goods',
            name: 'good',
            component:() => import("@/views/tenant/goods"),
          }
        ]
    }
  ]
})
