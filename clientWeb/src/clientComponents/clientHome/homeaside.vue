<template>
    <aside></asides>
      <el-col :span="12" >
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
          <el-menu-item index="1" @click='navclick'>
            <i class="el-icon-star-on"></i>
            <span slot="title">热门推荐</span>
          </el-menu-item>          
          <el-menu-item index="2" @click='navclick'>
            <i class="el-icon-star-on"></i>
            <span slot="title">每日折扣</span>
          </el-menu-item>
          <el-menu-item index="3" @click='navclick'>
            <i class="el-icon-star-on"></i>
            <span slot="title">今日套餐</span>
          </el-menu-item>
          <el-menu-item index="4" @click='navclick'>
            <i class="el-icon-star-on"></i>
            <span slot="title">无肉不欢</span>
          </el-menu-item>
          <el-menu-item index="5" @click='navclick'>
            <i class="el-icon-star-on"></i>
            <span slot="title">维C满满</span>
          </el-menu-item>
          <el-menu-item index="6" @click='navclick'>
            <i class="el-icon-star-on"></i>
            <span slot="title">开胃小菜</span>
          </el-menu-item>
          <el-menu-item index="7" @click='navclick'>
            <i class="el-icon-star-on"></i>
            <span slot="title">滋补靓汤</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </aside>
</template>

<script type="text/javascript">
    import './homeaside.scss';
    import router from "./../../router/";
    export default{
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          navclick(event){
            // var index = parseInt(event.index);
            // this.$store.state.datagrid.navSelect = 'homeDetail'
            // switch (index){
            //   case 1:
            //     this.$store.state.datagrid.navSelect = 'homeDetail';
            //       // router.push({name:'hot'})
            //     break;
            //   case 2:
            //     this.$store.state.datagrid.navSelect = 'homeSale';
            //     // router.push({name:'sale'})
            //     break;
            // }
          }
        }
    }
</script>