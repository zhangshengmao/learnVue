<template>
    <div id="listItem">
        <ul>
            <li v-for="(val,index) in linemsg">
                <div class="linemsg"><img :src="baseUrl+val.src"/></div>
                <div class="linemsg" v-if="val.finish">
                    <div class="linemsgp">
                        <div class="linemsgson">
                            <div>菜名：<span>{{val.foodname}}</span></div>
                            <div>桌号：<span>{{val.tablenumber}}号桌</span></div>
                        </div>
                        <div class="linemsgson">
                            <div><label>距离上菜时间：</label><input type="text" v-model="val.cooktime"/></div>
                            <div>前面还有<span>{{val.tablenumber}}</span>人</div>
                        </div>
                    </div>
                    <div class="linemBtn"><input type="button" v-model="val.contains" v-show="val.chargeback" @click="chargeBack(index)" :disabled="val.disabled"/>
                        <input type="button" value="催单" />
                    </div>
                </div>
                <div v-else>
                    <h1>这道菜完成了！再点点餐吧！</h1>
                </div>
            </li>
        </ul>
       <!--  <div class="backconfirm">
            <h2>退货成功</h2>
            <button>确认</button>
        </div> -->
    </div>
</template>

<script type="text/javascript">
    import "./lienItem.scss";
    import io from 'vue-socket.io';
    import http from '../../utils/httpClient.js';
    import Vue from 'vue';
    Vue.use(io,'http://localhost:888');
    var tableNum1 = 8
    export default {
        data(){
            return {
                linemsg:[
                ],
                tableNum:8,
                baseUrl: './src/assets/'
            }
        },
        components: {
        },
        beforeCreate:function(){
            
        },
        methods: {
            generateToolBar: function(obj){

            },
            chargeBack(index){
                this.linemsg[index].disabled=true;
                this.linemsg[index].contains="正在退货";
                var obj={
                    tableNumber:this.linemsg[index].tablenumber,
                    foodname:this.linemsg[index].foodname,
                    index:index

                }
                console.log(obj)
                this.$socket.emit('chargeback',JSON.stringify(obj));
            }
        },
        sockets:{
            connect: function(){
                
            },
            startCook: function(val){
                var arr = JSON.parse(val)[0]
                var foodName = JSON.parse(val)[1].foodName
                if(arr.indexOf(this.$store.state.datagrid.tableNumber)>=0){
                    var idx=0;
                        console.log(val)
                    
                    this.linemsg.forEach(function(obj,index){
                        if(obj.foodname==foodName){
                            console.log(obj.foodname)
                            idx=index;
                            console.log(obj.chargeback)
                            obj.chargeback=false;
                        }
                    })
                    var self =this;
                    var nowtime=Date.now()
                    this.$store.state.datagrid.tiemsArr.push(idx);
                    this.$store.state.datagrid.listNmber.push(parseInt(Date.now()/100)+600)
                    var time=600
                    var times=setInterval(function(){
                        self.linemsg[idx].cooktime=parseInt(time/60)+':'+time%60 ;
                        time--;
                        
                        if(self.$store.state.datagrid.listNmber-parseInt(Date.now()/100)<=0){
                            clearInterval(times)
                        }
                    },1000)
                }
            },
            reschargeback:function(val){
                var arr = JSON.parse(val)[0];
                if(arr.indexOf(this.$store.state.datagrid.tableNumber)>=0){
                    var index = JSON.parse(val)[1].index
                    this.linemsg[index].contains="退货成功"
                }
            },
            finishCook:function(val){
                var arr = JSON.parse(val)[0];
                if(arr.indexOf(this.$store.state.datagrid.tableNumber)>=0){
                    var foodname =JSON.parse(val)[1].foodname;
                    var idx=0
                    this.linemsg.forEach(function(obj,index){
                        if(obj.foodname==foodname){
                            console.log(obj.foodname)
                            idx=index;
                            console.log(obj.chargeback)
                            obj.chargeback=false;
                        }
                    })
                    this.linemsg[idx].finish=false
                }
            }
          },
        mounted:function(){
            this.$socket.emit('create',this.$store.state.datagrid.tableNumber);
            

            
            var getdata = {tablenumber:this.$store.state.datagrid.tableNumber}
            this.$socket.emit('create',this.tableNum);
            var self = this
            var times=setInterval(()=>{
                // console.log(this.$store.state.datagrid.insertOk)
                if(this.$store.state.datagrid.insertOk){
                    clearInterval(times)
                    http.post({
                        url:'listItemData',
                        vm:self,
                        params:getdata           
                    }).then(res => {
                        res.data.data.forEach(function(val,index){
                            val.cooktime='99999+'
                            val.chargeback=true;
                            val.disabled=false,
                            val.contains="退单",
                            val.finish=true
                        })
                        self.linemsg = res.data.data;
                    })
                }
                    
            },200)
        }
    }
</script>