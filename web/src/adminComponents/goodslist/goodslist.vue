<template>
	<div>
		<datagrid api="users,getTurnPage,delgoods,addgoods,changeData,huntgoods" :cols='props'></datagrid>
	</div>			
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue';
	import goodsform from '../goodsform/goodsform.vue';
	export default {
		data(){
			return {
				props:[
					{fields:'id',
					showName:'序号'},
					{fields:'username',showName:'用户名'},
					{fields:'content',showName:'评价内容'},
					{fields:'time',showName:'评价时间'}
				]
			}
		},
		components: {
			datagrid
		}
	}
</script>