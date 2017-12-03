<template>
	<div>
		<datagrid api="productDetail,getTurnPage2,delProDet,addProDet,changeProDet,huntProDet" :cols='props'></datagrid>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue';
	import goodsform from '../goodsform/goodsform.vue';
	export default {
		data(){
			return {
				props:[
					{fields:'id',showName:'序号'},
					{fields:'foodname',showName:'菜名'},
					{fields:'classify',showName:'分类'},
					{fields:'price',showName:'价格'},
					{fields:'detail',showName:'简介'},
					{fields:'image',showName:'图片'},
					{fields:'hot',showName:'热卖'},
					{fields:'sale',showName:'优惠'},
					{fields:'like',showName:'喜欢'},
					{fields:'property',showName:'套餐属性'}

				],
			}
		},
		components: {
			datagrid
		}
	}
</script>

