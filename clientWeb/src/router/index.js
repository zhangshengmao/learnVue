import Vue from 'vue';
import VueRouter from 'vue-router';
import clientHomeComponent from '../clientComponents/clientHome/clientHome.vue';
import lineItemComponent from '../clientComponents/lineItem/lineItem.vue';
import listItemComponent from '../clientComponents/lineItem/listItem.vue';
import callWaiterComponent from '../clientComponents/lineItem/callWaiter.vue';
import buyCarComponent from "../clientComponents/buyCar/buyCar.vue";
import foodDetailComponent from "../clientComponents/foodDetail/foodDetail.vue"
import payComponent from "../clientComponents/pay/pay.vue";
// import commentComponent from "../clientComponents/comment/comment.vue";

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
        {
			path:"/",
			name:"clientHome",
			component:clientHomeComponent,
			children: []
            
		},
        {
            path:"/lineItem",
            name:"lineItem",
            component:lineItemComponent,
            children: [
                {
                    path:"/listItem",
                    name:"listItem",
                    component:listItemComponent
                },
                {
                    path:"/callWaiter",
                    name:"callWaiter",
                    component:callWaiterComponent
                }
            ]
        },
		{
			path:"/buyCar",
			name:"buyCar",
			component:buyCarComponent
		},
		{
			path:"/foodDetail",
			name:"foodDetail",
			component:foodDetailComponent
		},
		{
			path:"/pay",
			name:"pay",
			component:payComponent
		},
		// {
		// 	path:"/comment",
		// 	name:"comment",
		// 	component:commentComponent
		// }
	]
})

export default router