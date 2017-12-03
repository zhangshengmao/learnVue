<template>
<div>
	<div>
	</div>
	<div>
		<div class="toolbar">
			<!-- Comonent1 -->
			<input type="button" value="订单列表" @click="order">
			<!-- Component2 -->
			<input type="button" value="商品详情" @click="goods">
			<input type="button" value="顾客评价" @click="comment">
			<!-- Component3 -->
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</div>
	
</template>

<script type="text/javascript">
	// import orderComponents from "../acceptOrder/acceptOrder.vue";
	// import goodsComponents from "../productList/productList.vue";
	// import commentComponents from "../comment/comment.vue";
	// import productListComponents from "../productList/productList.vue";
	import router from '../../router/';


	export default {

		

		
	}
</script>