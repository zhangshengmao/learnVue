<template>
	<div>
		<datagrid api="productList,getTurnPage1,delProList,addProList,changeProList,huntProList" :cols='props'></datagrid>
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
					{fields:'dishname',showName:'菜名'},
					{fields:'tablenumber',showName:'桌号'},
					{fields:'time',showName:'时间'}
				]
			}
		},
		components: {
			datagrid
		}
	}
</script>

