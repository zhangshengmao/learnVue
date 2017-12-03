<template>
    <header id="homeheader">
        <div class="mask"></div>
        <h3><span>大宝 </span>私房菜</h3>
        <span class="tableNumber">{{$store.state.datagrid.tableNumber}}号桌</span>
    </header>
</template>

<script type="text/javascript">
    import './homeheader.scss';
    export default{
        data() {
            return {
              
            }
        },
        mounted(){
            var url = location.href.split('?')[1];
            this.$store.state.datagrid.tableNumber = url.split('=')[1];
            // console.log(tableNumber)
        }

    }
</script>