<template>
    <div id="lineItem">
        
        <div class="listItem">
            <lineItemheader id="lineheader"></lineItemheader>
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/javascript">
    import "./lienItem.scss";
    import router from '../../router/index.js';
import lineItemheader from "./lineItemheader.vue"

    export default {
        components: {
            lineItemheader
        },
        methods: {
            generateToolBar: function(obj){
                //动态生成按钮
            }
        },
        mounted:function(){
            router.push({name: 'listItem'});
            
        }
    }
</script>
<style type="text/css">
    #lineItem{display:flex;}
</style>