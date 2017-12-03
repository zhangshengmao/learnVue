<template>
    <div class="aheader_container">
        <i class="el-icon-bell"></i>
        <h4 class="title">Take <span>Easy</span> Order System</h4>
        <div class="aheader_user">
            <el-dropdown>
              <span class="el-dropdown-link">
                账户管理<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script type="text/javascript">

    export default{}
</script>

<style type="text/css">
    .aheader_container{position: relative;}
    .aheader_container .el-icon-bell{font-size:26px;font-weight:bold;line-height:60px;color:rgb(255, 208, 75);}
    .aheader_container .title{font-size:20px;display: inline-block;margin:0;font-weight:normal;font-family:"微软雅黑";}
    .aheader_container .title span{color:rgb(255, 208, 75);}
    .aheader_user{position:absolute;right:0;top:0;height:60px;line-height:60px;}
    .aheader_user .el-dropdown-link{color:rgb(84, 92, 100);}
    .el-dropdown-menu .el-dropdown-menu__item:hover{
        background-color:rgb(84, 92, 100);color:rgb(255, 208, 75);
    }
</style>