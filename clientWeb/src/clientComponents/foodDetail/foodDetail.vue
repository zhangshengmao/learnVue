<template>
	<div id="foodDetail">
		<img :src="baseUrl + foodSet[0].image">
		<div class="foodname">{{foodSet[0].foodname}}</div>
		<div class="like_star">
			<span class="star">好评
				<i class="el-icon-star-on"></i>
				<i class="el-icon-star-on"></i>
				<i class="el-icon-star-on"></i>
				<i class="el-icon-star-on"></i>
				<i class="el-icon-star-on"></i>
			</span>
			<span class="like">喜欢 {{foodSet[0].like}}</span>
		</div>
		<loading v-show="loadingShow"></loading>

		<div class="detail">
			<h3>简介</h3>
			<p>{{foodSet[0].detail}}</p>
		</div>
		<div class="Comment">
			顾客评价
			<div class="zh">
				<span>综合评分</span>
			</div>
			<div class="span_list">
				<span>服务热情</span>
				<span>饮品赞</span>
				<span>味道赞</span>
				<span>干净卫生</span>
				<span>性价比高</span>
				<span>回头客</span>
				<span>价格实惠</span>
			</div>
			<div class="com_content">
				<ul>
					<li v-for="(value,index) in commentSet">
						<div class="com_header">
							<div class="com_header_l">
								<img :src="baseUrl + value.via"/>
								<div>
									<span>{{value['client']}}</span><br/>
									<span>
										<i class="el-icon-star-on" v-for = "xx in value.star"></i>
									</span>
								</div>
							</div>
							<div class="com_header_r">{{value['time']}}</div>
						</div>
						<div class="com_main">
							{{value['content']}}
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="close el-icon-close"  @click="close"></div>

	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/httpClient.js';
	import loading from '../loading/loading.vue';
	import router from '../../router/';
	export default{
		data(){
			return {
				commentSet:[],
				foodSet:[],
				baseUrl :'./src/assets/',
				loadingShow: false
			}
		},
		mounted(){
			http.post({
				url:'comment',
				vm:this
			}).then(res=>{
				this.commentSet = res.data[1];
			});
			http.post({
				url:'foodDetail',
				vm:this,
				params:{foodname:this.$store.state.datagrid.detailName}
			}).then(res=>{
				this.foodSet = res.data.data;
				console.log(this.foodSet);
			});
		},
		methods:{
			close(){
				router.push({name: 'clientHome'});
				// var $close = document.querySelector(".close");
				// console.log($close);
			}
		},
		components:{
			loading
		}
	}
</script>

<style lang="scss">
	*{padding:0;margin:0;}
	#foodDetail{overflow-y:scroll;background-color: #eee;
		img{width:100%;height:500px;}
		.foodname{font-size:50px;padding:10px;}
		.like_star{
			padding:10px;
			font-size:30px;
			.star i{color:#FF9D09;}	
		}
		.detail{
			
			margin:20px 0px;
			font-size:40px;
			background-color: #fff;
			padding:20px 10px ;
			h3{font-weight:normal;padding:10px;}
			p{font-size:34px;padding:10px;text-indent: 4rem;}
		}
		.Comment{font-size:40px;display:flex;flex-direction: column;background-color: #fff;margin:10px 0px;padding:20px 10px;
			div{flex:1;
				span{display:inline-block;border: 1px solid #ccc;font-size:30px;padding:10px;border-radius: 15px;
					margin:10px;}
			}
			.zh{text-align:center;span{display:inline-block;border:1px solid #ccc;background-color: #06C1AE;color:#fff;padding:10px 50px;border-radius: 40px;margin-bottom:20px;}
			}
			.span_list{border-bottom: 1px solid #eee;color:#999999;margin-bottom:10px;}
			.com_content ul li{display:flex;flex-direction: column;margin-top:20px;
				.com_header{display:flex;justify-content: space-between;overflow: hidden;
					img{width:100px;height:100px;border-radius: 50%;float:left;margin-right:25px;margin-top:10px;}
					div{float:left;}
					div>span{border:0 none;margin:0;padding:0;
						i{color:#FF9D09;}
					}}
					.com_header_r{text-align:right;font-size:30px;color:#999;margin-right:20px;padding-top:50px;box-sizing: border-box;}
				.com_main{margin-left:120px;font-size:34px;margin-top:10px;border-bottom:1px solid #eee;padding-bottom:20px;}
			}
		}

		.close{font-size:90px;position:absolute;left:0;top:0;color:#fff;}
	}

</style>