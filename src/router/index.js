import Vue from 'vue';
import VueRouter from 'vue-router';
import cookie from '../util/cookie';
import store from '../store';

// 
import Login from '@/views/Login'
import Layout from '@/views/layout/Index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/404',
      component: () => import("@/views/page404")
    },
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/login',
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

/*
* Vue路由守卫
* beforeEach:从一个页面跳转到另外一个页面时触发
* to:要跳转的页面
* from:从哪个页面出来
* next:决定是否通过
*/
router.beforeEach((to, from, next) => {
  // 如果跳转的页面不存在，跳转到404页面
  if (to.matched.length === 0) {
    next('/404')
  }
  const user = { username: cookie.getCookie("username"), password: cookie.getCookie("openId") }
  if (store.getters.userIsExisted(user)) {
    next()
  } else {
    if (to.path === "/login") {
      next()
    } else {
      next('/login')
    }
  }
})

export default router;



