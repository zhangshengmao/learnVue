<template>

  
<el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click="order">
        <i class="el-icon-location"></i>
        <span slot="title" >接收订单</span>
      </el-menu-item>      
      <el-menu-item index="2" @click="list">
        <i class="el-icon-menu"></i>
        <span slot="title" >消费清单</span>
      </el-menu-item>
      <el-menu-item index="3" @click="detail">
        <i class="el-icon-setting"></i>
        <span slot="title" >商品详情</span>
      </el-menu-item> 
      <el-menu-item index="4" @click="comment">
        <i class="el-icon-star-on"></i>
        <span slot="title" >顾客评论</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script type="text/javascript">
  import router from '../../router/';
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      order(){
        // console.log(66);
        router.push({name: 'order'});

      },
      list(){
        // console.log(66);
        router.push({name: 'list'});

      },
      detail(){
        // console.log(66);
        router.push({name: 'detail'});
      },
      comment(){
        // console.log(66);
        router.push({name: 'comment'});
      }
    }

  }

</script>

<style type="text/css">
  .el-col{width:100%;height:100%;overflow:hidden;}
  .el-menu{height:100%;padding-top:60px;border:0 none;}
</style>
