import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/layout/customer/Layout'

Vue.use(Router)

let routes = [
      {
        path: '/seller',
        name: 'Seller',
        component: () => import("@/layout/seller/Layout"),
        children: [
  
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
      }
];

export default routes;

