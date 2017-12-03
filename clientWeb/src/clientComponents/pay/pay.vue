<template>
     <div id="pay">
        <div class="title">
            <div class="mask"></div>
            <h1 class="el-icon-printer">结算</h1>
        </div>
        <div id="payCar" class="homelist">
            <ul>
                <li v-for ="(obj, index) in dataset">
                    <div class="li_info">
                        <h3 class="el-icon-check">  {{obj.foodname}}<span> &times;{{obj.amount}}</span></h3>

                    </div>
                    <div class="buy">
                        <p><span>￥</span>{{obj.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="operate">
            <div class="total">{{totalPrice}}</div>
            <div class="ok"><button @click="okBtn">结算</button></div>
        </div>
        <comment v-if='$store.state.pay.commentSel'></comment>
    </div>
</template>

<script type="text/javascript">
    import router from '../../router/';
    import "../datagrid/datagrid.scss";
    import http from '../../utils/httpClient.js';
    import comment from './comment.vue';

    export default{
        data: function(){
            return {
                dataset:[],
                totalPrice:0,
            }
        },
        components: {
            comment
        },
        methods:{
            toDetail(e){
                console.log(e.target);
            },
            okBtn(){
                this.$store.state.pay.commentSel = true;

            }
        },
        mounted(){
            http.post({
                url:'getPayList'
            }).then(res=>{
                console.log(res.data.data);
                this.dataset = res.data.data;
                this.totalPrice = this.dataset[0].totalPrice;
            })    
        }

    }
</script>

<style lang="scss">
    *{padding:0;margin:0;}
    #pay{position:relative;
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
        #payCar{
            padding-top:15%;
            ul{
                li{
                    border:0 none;
                    border-bottom:1px solid #fff;
                    margin-right:5%;
                    display: flex;
                    justify-content: space-between;
                    .li_info{h3{font-size:45px;span{font-size: 50px}}}
                    .buy{font-size:50px;color:#ffd04b;}

                }
            }
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
