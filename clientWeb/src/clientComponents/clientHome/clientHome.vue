<template>
	<div id="homecontainer">
		<homeheader></homeheader>
		<homebanner></homebanner>
		<homemain></homemain>
	</div>
</template>

<script type="text/javascript">
	import homeheader from "./homeheader.vue";
	import homebanner from "./homebanner.vue";
	import homemain from "./homemain.vue";
	import "./clientHome.scss";
	export default {
		components: {
			homeheader,
			homebanner,
			homemain
		},
		methods: {
			generateToolBar: function(obj){
				//动态生成按钮
			}
		}
	}
	// export default{
	// 	status: {
	// 		components
	// 	},
	// 	action: {},
	// 	mutation: {}
	// }
</script>