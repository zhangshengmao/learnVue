<template>
    <footer id="footer">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item index="1" @click='home'>
                <i class="el-icon-tickets"></i>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="2" @click='buycar'>
                <i class="el-icon-sold-out"></i>
                <span>购物车</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-printer" @click='pay'></i>
                <span>结算</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-service" @click='lineItem'></i>
                <span>订单详情</span>
            </el-menu-item>
        </el-menu>             
    </footer>
</template>

<script type="text/javascript">
    import './footer.scss';
    import router from "../../router/";
    export default{
        methods: {
            home(){
                router.push({name: 'clientHome'});
            },
            buycar(){
                router.push({name: 'buyCar'});
            },
            pay(){
                router.push({name: 'pay'});
            },
            lineItem(){
                router.push({name: 'lineItem'})

            }
        }
    }
</script>