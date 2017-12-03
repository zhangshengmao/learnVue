<template>
	<div>
			<div class="main_top">
			<div class="mainT_right"><button @click="addCont">添加</button></div>
			<div class="mainT_left"><input type="text" v-model="searchCont"/><button @click="searchData">搜索</button></div>
		</div>							
	  	<el-table :data="dataset" stripe border highlight-current-row style="width: 100%">
		    <el-table-column v-for="val in colsArray" :prop="val.fields" :label="val.showName" v-if="val.fields!='property'&& val.fields!='image'&&val.fields!='detail'"></el-table-column>
		  
		  	<el-table-column label="操作">
		      	<template slot-scope="scope">
			        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" style="position:absolute;left:5%;top:20%;">编辑</el-button>
			        <el-button size="mini"  type="danger" @click="handleDelete(scope.$index, scope.row)" style="position:absolute;right:5%;top:20%;">删除</el-button>
		      	</template>
		    </el-table-column>
	    </el-table>
	  	<turnpage :total='totalNumber' :params='params' :addaffirm="addaffirm"></turnpage>
	  	<loading v-show="loadingShow"></loading>
		<coverCase v-show="coverCaseShow"></coverCase>
	  	<div v-show="addcontBox">
	  		<div class="addcont" >
	  		    <div v-for="val in colsArray" class="additem">
	  		      <label for="">{{val.showName}}</label>
	  		      <input type="text" v-model="setData[val.fields]" v-if="val.fields=='id'" disabled/>
	  		      <input type="text" v-model="setData[val.fields]" v-else/>
	  		    </div>
	  		    <button class="addaffirm" @click="addaffirm" >确定</button>
	  		</div>
	  	</div>
	  	<div v-show="changeBox">
	  		<div class="addcont" >
	  		    <div v-for="val in colsArray" class="additem">
	  		      <label for="">{{val.showName}}</label>

	  		      <input type="text" v-model="setData[val.fields]" v-if="val.fields=='id'" disabled/>
	  		      <input type="text" v-model="setData[val.fields]" v-else/>
	  		    </div>
	  		    <button class="updataffirm" @click="changeData">确定</button>
	  		</div>
	  	</div>

	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import loading from '../loading/loading.vue'
	import coverCase from '../coverCase/coverCase.vue'
	import './datagird.scss';
	import turnpage from './turnpage.vue'
	import comile from './compile.vue'
	export default {
		data: function(){
			return {
				dataset: [],

				setData:{},
				changeBox:false,
				addcontBox:false,
				loadingShow: false,
				coverCaseShow:false,
				colsArray:this.cols,
				params:{
					pageNumber:1
				},
				verdict:[],
				totalNumber:0,
				changejs:1,
				searchCont:''
			}
		},
		props: ['api', 'cols'],
		watch:{
			'params.pageNumber': function(val, oldVal){

				var opts = {
					url:this.apiArr[1],
					vm: this,
					params:this.params
				}
				this.showData(opts);
			}

		},
		mounted: function(){
			
			var obj={};
			for(var attr in this.colsArray){

				obj[this.colsArray[attr].fields]="";
			}
			this.setData=obj;
			var apiArr = this.api.split(',');
			this.apiArr = apiArr;
			// var self =this
			// this.apiArr.forEach(function(index,item){
			// 	self.verdict[index]= item
			// })
			var opts = {
					url: this.apiArr[0],
					vm:this,
					params:{}
				}
			this.showData(opts);
		},
		methods:{
			showData (opts){
				var self = this;
				console.log(opts.url)
				http.post(opts).then(res => {
					self.totalNumber = res.data[0][0]["count(id)"];
					self.dataset = res.data[1];
				})
			},
		 	handleEdit(index, row) {

		 		this.setData=row;
		 		this.changeBox=true;
      			this.coverCaseShow=true;
		 		
      		},
      		handleDelete(index, row) {
      			http.post({
					url: this.apiArr[2],
					vm:this,
					params:row
      			}).then(res=>{
      				if(res.data.status==true){
      					this.dataset.splice(index,1)
      				}
      			})
      		},
      		addCont(){
      			this.addcontBox = true;
      			this.coverCaseShow=true;
      		},
      		addaffirm(){
      			if(this.apiArr[3]==false){
      				return
      			}
      			var opts = {
					url: this.apiArr[3],
					vm:this,
					params:this.setData
				}
				http.post(opts).then(res => {
					console.log(this)
					this.dataset.splice(0,0,this.setData)
					console.log(this.datase)
					
				})
      			this.addcontBox=false;
      			this.coverCaseShow=false;
			},
			changeData(){
				this.changeBox=false;
      			this.coverCaseShow=false;
      			http.post({
					url: this.apiArr[4],
					vm:this,
					params:this.setData
      			}).then(res=>{
      				if(res.data.status==true){

      				}
      			})
			},
			searchData(){
				var opts = {
					url: this.apiArr[5],
					vm:this,
					params:{searchCont:this.searchCont}
				};
				var self = this
				http.post(opts).then(res => {
					
					console.log(res.data)
					self.dataset = res.data.data;
					self.totalNumber = res.data.data.length;

				})

				
			}
		},

		components: {
			loading,
			turnpage,
			comile,
			coverCase
		}
	}
</script>
