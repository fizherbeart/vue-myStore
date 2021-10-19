import Vue from 'vue';
import VueRouter from 'vue-router';

// 
import Login from '@/views/Login'
import Layout from '@/views/layout/Index'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Layout',
      component: Layout,  // 加载头部和侧栏
      // 子路由加载中间内容
      children: [
        // 普通顾客
        {
          path: '/list',
          meta: {
            title: '商品列表'
          },
          component: () => import("@/views/1-customer/list"),
        },
        {
          path: '/product/:id',
          meta: {
            title: '商品详情'
          },
          component: () => import("@/views/1-customer/detail"),
        },
        {
          path: '/cart',
          meta: {
            title: '购物车'
          },
          component: () => import("@/views/1-customer/cart"),
        },
        // 卖家 商品管理
        {
          path: '/goods',
          name: 'good',
          component: () => import("@/views/2-seller/goods"),
        },
        // 买家用户管理
        {
          path: '/user',
          name: 'user',
          component: () => import("@/views/3-manager/User"),
        },
        {
          path: '*',
          redirect: '/list'
        }
      ]
    },
  ]
});





