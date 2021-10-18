import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/layout/customer/Layout'

Vue.use(Router)

let routes = [
    {
        path: '/manager',
        name: 'Manager',
        component: () => import("@/layout/manager/Layout"),
        children: [
  
            {
              path: '/user',
              meta: {
                  title: '用户列表'
              },
              component: () => import("@/views/manager/User"),
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
      }
];

export default routes;

