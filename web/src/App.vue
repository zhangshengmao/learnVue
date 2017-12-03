<template>

<el-container>
	<el-aside width="200px">
    <!-- <input type="button" value="订单列表" @click="order"><br />
    <input type="button" value="商品详情" @click="goods"><br />
    <input type="button" value="顾客评价" @click="comment"><br /> -->
    <navBar></navBar>
  </el-aside>
	<el-container>
		<el-header>
      <aheader></aheader>
    </el-header>
		<el-main>
    		<router-view></router-view>
		</el-main>
	</el-container>
</el-container>


</template>

<script>
  import router from './router/';
  import navBar from "./adminComponents/navBar/navBar.vue";
  import aheader from './adminComponents/header/aheader.vue'

  export default {
    name: "app",
    components:{
      navBar,
      aheader
    },
    methods: {

    }
  }
</script>

<style>
  html,body,.el-container{
    margin:0;
    padding:0;
    height:100%;
    width:100%;
    overflow: hidden;
  }
  .el-header {
    background-color: #E9EEF3;
    color: #333;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>


