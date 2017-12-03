<template>
    <div id="lineKoji">
        <h1>Hi,尊敬的<span>{{$store.state.datagrid.tableNum}}</span>号桌顾客</h1>
        <h3>小二可以为您做以下事情？</h3>
        <div>
            <button @click="callWtaiter" style="bg">呼叫<br />服务员</button>
            <button>小二正<br />在学习</button>
        </div>
        <div class="WaiterResponse">
            <p v-show="callshow"><img src="../../assets/xiaoer2.gif"/>小二已经为你通知服务员 </p>
            <p v-show="resShow">服务员正在路上!请耐心等待哦......<img src="../../assets/xiaoer2.gif"/></p>
        </div>
    </div>
</template>

<script type="text/javascript">
    import io from 'vue-socket.io';
    import Vue from 'vue';
    Vue.use(io,'http://localhost:888');
    var tableNum1=0;
    export default {
        data(){
            return {
                bg:'background:#58bc58;',
                callshow:false,
                resShow:false,
                tableNum:8
            }
        },
        components: {
        },
        mounted(){
        },
        update(){
            console.log(this.$store.state.datagrid.tableNum)
        },
        sockets:{
            connect: function(){
                tableNum1=this.tableNum;
            },
            resCall: function(val){
                console.log(val)
                this.callshow=false
                this.resShow=true;
            }
        },
        methods: {
            generateToolBar: function(obj){

            },
            callWtaiter(){
                if(this.resShow){
                    alert('服务员怎在赶来,请耐心等待')
                    return
                }
                this.$socket.emit('callWaiter', this.tableNum);
                this.callshow=true;
            }
        },
        beforeupdate:function(){

        }
    }
</script>