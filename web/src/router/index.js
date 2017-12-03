import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginComponent from '../adminComponents/login/login.vue';
import AHomeComponent from '../adminComponents/home/home.vue';
import acceptOrderComponent from "../adminComponents/acceptOrder/acceptOrder.vue";
import productListComponent from "../adminComponents/productList/productList.vue";
import productDetailComponent from "../adminComponents/productDetail/productDetail.vue";
import commentComponent from '../adminComponents/comment/comment.vue';
Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginComponent
		},{
			path: '/index',
			name: 'home',
			component: AHomeComponent,
			children: []
		},{
			path: '/order',
			name: 'order',
			component: acceptOrderComponent
		},{
			path: '/list',
			name: 'list',
			component: productListComponent
		},{
			path: '/detail',
			name: 'detail',
			component: productDetailComponent
		},{
			path: '/comment',
			name: 'comment',
			component: commentComponent,
		}
		
	]
})

export default router