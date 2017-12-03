<template>
    <div id="car">
        <div class="title">
            <div class="mask"></div>
            <h1 class="el-icon-sold-out">购物车</h1>
        </div>
        <div id="buyCar" class="homelist">
            <ul v-if="show">
                <li v-for ="(obj, index) in dataset">
                    <div class="li_img">
                        <img :src="baseUrl + obj.image"  @click="toDetail(index)"/>
                    </div>
                    <div class="li_info">
                        <h3>{{obj.foodname}}</h3>
                        <div class="buy">
                            <p><span>￥</span>{{obj.price}}</p>
                            <div class="tobuy">
                                <i class="el-icon-remove sub" @click='$store.commit("subAmount",obj)'></i>
                                <span>{{obj.amount}}</span>
                                <i class="el-icon-circle-plus add" @click='$store.commit("addAmount",obj)'></i>
                            </div>
                        </div>
                        <div class="flavorSel" @click='flavorBtn'>
                            口味选择：<span>{{obj.flavor}}</span>
                        </div>>
                    </div>
                </li>
            </ul>
            <div v-if="!show" class="tip">
                <p class="el-icon-bell"></p>
                <p>亲爱的顾客</p>
                <p>您的购物车空空的哟~</p>
            </div>
        </div>
        <div class="operate">
            <div class="total">{{this.$store.state.datagrid.totalPrice}}</div>
            <div class="ok"><button @click="okBtn">我选好了</button></div>
        </div>
        <flavor :foodname='foodname' v-if="$store.state.buyCar.flavorSel"></flavor>
    </div>
</template>

<script type="text/javascript">
    import "./buyCar.scss";
    import datagrid from "../datagrid/datagrid.vue";
    import router from '../../router/';
    import "../datagrid/datagrid.scss";
    import http from '../../utils/httpClient.js';
    import flavor from "./flavor.vue";
    import io from 'vue-socket.io';
    import Vue from 'vue';
    Vue.use(io,'http://localhost:888');
    export default{
        data: function(){
            return {
                dataset:this.$store.state.datagrid.buycarList,
                baseUrl:'./src/assets/',
                totalPrice:0,
                foodname:'',
                show:true
            }
        },
        components: {
            datagrid,
            flavor
        },
        sockets:{
            connect: function(){
                
            }
        },
        methods:{
           toDetail(index){
                var foodName = this.dataset[index].image.split(".")[0];
                this.$store.state.datagrid.detailName = foodName;
                router.push({name:'foodDetail'});
            },
            okBtn(){
                console.log(this.$store.state.datagrid.buycarList);
                var list = this.$store.state.datagrid.buycarList;
                var tableNumber = this.$store.state.datagrid.tableNumber;
                list.forEach(item=>{
                    item['tableNumber'] = this.$store.state.datagrid.tableNumber;
                    item['totalPrice'] = this.$store.state.datagrid.totalPrice;
                    item['ok'] = "no";
                });
                http.post({
                    url:'list',
                    params:list
                }).then(res=>{
                    this.$store.state.datagrid.insertOk = true;
                    this.$socket.emit('ddcreate',JSON.stringify(list));


                })
                router.push({name:'lineItem'})
            },
            flavorBtn(e){
                console.log(e)
                if(e.target.tagName.toLowerCase() == 'span'){
                    this.foodname = e.path[2].children[0].innerText;
                }else if(e.target.className == 'flavorSel'){
                    console.log(666)
                    this.foodname = e.path[1].children[0].innerText;
                }
                this.$store.state.buyCar.flavorSel = true;
            }
        },
        mounted(){
            this.$socket.emit('create',this.$store.state.datagrid.tableNumber);
            this.totalPrice = this.$store.state.datagrid.totalPrice;
            if(this.$store.state.datagrid.buycarList.length<=0){
                this.show = false;
            }
        }
        
    }
</script>

<style lang="scss">
    *{padding:0;margin:0;}
    .routerSelect{background-color: #434a50;}
    #car{
        background-color: #434a50;
        height:100%;
        position: relative;
        .title{
            display:flex;justify-content:center;align-items:center;position:relative;
            background:url('../../assets/背景图.jpg') no-repeat 0 50%;background-size:cover; 
            position:fixed;
            left:0;
            top:0;
            width:100%;
            height:8%;
            text-align:center;
            background-color: #fff;
            border-bottom:1px solid #ccc;
           h1{font-size:56px;height:100%;margin:0;padding-top:10%;position:absolute;color:rgb(255, 208, 75);
        span{color:rgb(255, 208, 75);}
    }
            .mask{height:100%;width:100%;position:absolute;background-color:rgb(84, 92, 100);opacity:0.5;}  
        }
        #buyCar{
            padding-top:15%;
            ul{
                li{
                    padding:20px;
                    border:0 none;
                    border-bottom:1px solid #000;
                    img{height:200px;}
                }
            }
            .tip{font-size: 50px;color:#ffd04b;margin-top:50%;text-align: center}
        }
        .operate{
            position:fixed;
            left:0;
            bottom:8.6%;
            width:100%;
            height:8%;
            font-size:50px;
            background-color: rgba(0,0,0,0.8);
            display: flex;
            justify-content: space-between;
            button{font-size:47px;background-color:rgb(255, 208, 75);padding:20px 40px;color:#666;border-radius: 35px;margin-right:10px;margin-top:20px;}
            .total{color:rgb(255, 208, 75);margin-top:35px;padding-left:20px;}
            .total::before{content:"￥";}
        }
    }
</style>
