<template>
	<div>
		<input type="text" v-model="username">
		<input type="password" v-model="password">
		<input type="button" value="Login" @click="loginHandler">
		<input type="button" value="Login" @click="qianduan">
		<loading v-show="loadingShow"></loading>
	</div>
</template>

<script type="text/javascript">
	import loading from '../loading/loading.vue'
	import http from '../../utils/httpClient.js'
	import router from '../../router/';

	export default {
		data(){
			return {
				username: '',
				password: '',
				loadingShow: false
			}
		},
		methods: {
			//后端选择
			loginHandler: function(){
				http.post({
					url:"login",
					vm:this,
					params:{username: this.username, password: this.password}
				}) .then(res => {
					console.log(res.request.response)
					router.push({name: 'home'});
				})
			},
			//前端选择
			qianduan:function(){
				router.push({name: 'clientHome'});
			}
		},
		components: {
			loading
		}
	}
</script>