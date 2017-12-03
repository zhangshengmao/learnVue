<template>
    <div class="homelist">
        <ul>
            <li v-for ="(obj, index) in dataset">
                <div class="li_img">
                    <img :src="baseUrl + obj.image"  @click="toDetail(index)"/>
                </div>
                <div class="li_info">
                    <h3>{{obj.foodname}}</h3>
                    <p>{{obj.detail}}</p>
                    <i class="el-icon-star-on"></i>
                    <span class="like">{{obj.like}}</span>
                    <div class="buy">
                        <p><span>￥</span>{{obj.price}}</p>
                        <div class="tobuy">
                            <!-- <i class="el-icon-remove sub" @click='amountclick'></i> -->
                            <i class="el-icon-remove sub" @click='$store.commit("subAmount",obj)'></i>
                            <!-- <span>{{amount}}</span> -->
                            <span>{{obj.amount}}</span>
                            <!-- <i class="el-icon-circle-plus add" @click='amountclick'></i> -->
                            <i class="el-icon-circle-plus add" @click='$store.commit("addAmount",obj)'></i>

                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <loading v-show='loadingShow'></loading>
    </div>
</template>

<script type="text/javascript">
    import "./datagrid.scss";
    import http from '../../utils/httpClient.js';
    import loading from '../loading/loading.vue';
    import router from '../../router/';

    export default{
        data: function(){
            return {
                dataset: [],
                loadingShow: false,
                baseUrl: './src/assets/',
                amount:0,
                // api: this.$store.state.datagrid.navSelect          
            }
        },
        props:['api'],
        watch:{
            api: function(){
                var self = this;
                http.post({
                    url:this.api,
                    vm:this
                    // params:this.setData               
                }).then(res => {
                   
                    res.data.data.forEach(function(item){
                        item['amount'] = 0;
                    });
                    // console.log(res.data.data);
                    self.dataset = res.data.data;


                })                
            }
        },
        mounted: function(){
            var self = this;
            http.post({
                url:this.api,
                vm:this
                // params:this.setData               
            }).then(res => {
                
                res.data.data.forEach(function(item){
                    item['amount'] = 0;

                    item['flavor'] = '默认';

                });
                // console.log(res.data.data);
                self.dataset = res.data.data;

            });
        },
        components: {
            loading
        },
        methods: {
            amountclick(event){
                // console.log(this.$store)
                if(event.toElement.className == 'el-icon-remove sub' ){
                    
                }else if(event.toElement.className == 'el-icon-circle-plus add'){
                    
                }
            },
            toDetail(index){
                var foodName = this.dataset[index].image.split(".")[0];
                this.$store.state.datagrid.detailName = foodName;
                router.push({name:'foodDetail'});
            }
        }

    }
</script>