import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/layout/customer/Layout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
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
          },
          {
            path: '/list',
            meta: {
                title: '商品列表'
            },
            component: () => import("@/views/customer/list"),
        },
        {
            path: '/product/:id',
            meta: {
                title: '商品详情'
            },
            component: () => import("@/views/customer/product"),
        },
        {
            path: '/cart',
            meta: {
                title: '购物车'
            },
            component: () => import("@/views/customer/cart"),
        },
        {
            path: '*',
            redirect: '/list'
        }
        ]
    },
  ]
  
})
