import Vue from 'vue';
import VueRouter from 'vue-router';

 
	// 引入其他路由文件
import Login from '@/views/Login'
import CustomerRoutes from '@/router/customer';
import ManagerRoutes from '@/router/manager';
import SellerRoutes from '@/router/seller';
 
  Vue.use(VueRouter)

	const baseRoutes = [];	
 
	const routes = baseRoutes.concat(CustomerRoutes, ManagerRoutes, SellerRoutes,{
    path: '/',
    name: 'Login',
    component: Login
  });
  
 
	export default new VueRouter({
      mode:'history',
	  	routes,
	});





