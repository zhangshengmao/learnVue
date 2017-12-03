<template>
    <div class="cooking">
        <table width="100%">
            <thead width="100%">
                <tr>
                    <th :width="thWidth[0]">订单号</th>
                    <th :width="thWidth[1]">菜名</th>
                    <th :width="thWidth[2]">备注</th>
                    <th :width="thWidth[3]">桌号</th>
                    <th :width="thWidth[4]">开始做菜</th>
                    <th :width="thWidth[5]">完成上菜</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(val,index) in acceptData">
                    <td>{{val.dd}}</td>
                    <td>{{val.foodname}}</td>
                    <td>{{val.flavor}}</td>
                    <td>{{val.tablenumber}}</td>
                    <td><input type="button"  @click="startCook(index)" v-model="val.valCont" :style="val.bgcolor"/></td>
                    <td><input type="button" value="完成"@click="finishCook(index)"/></td>
                </tr>
            </tbody>
        </table>
        <div class="callMsg" v-show="resCase">
            <input type="text" v-model="callMsg"/>
            <p>请尽快处理</p>
            <button @click="resCall">安排服务员</button>
        </div>
        <div class="callMsg" v-show="backCase">
            <input type="text" v-model="callMsg"/>
            <p>请尽快处理</p>
            <button @click="reschargeback">可以退货</button>
        </div>
        <coverCase v-show="coverCaseShow"></coverCase>
        
    </div>
</template>
<script type="text/javascript">
    import acceptOrderCsss from "./acceptOrder.scss"
    import http from '../../utils/httpClient.js'
    import coverCase from '../../adminComponents/coverCase/coverCase.vue'
    import io from 'vue-socket.io';
    import Vue from 'vue';
    Vue.use(io,'http://localhost:888');
    export default {
        data(){
            return {
                
                thWidth:['10%','10%','30%','10%','10%','10%',],
                acceptData:[
                    {
                        dd:'00081',
                        foodName:'清蒸大闸蟹',
                        beiz:'口味谈点，加葱，来点小米辣椒',
                        tabelNum:'8',
                        bgcolor:"background:#e14d4d;",
                        valCont:"开始"
                    }
                ],
                callMsg:'',
                resCase:false,
                resMsg:'',
                coverCaseShow:false,
                backMsg:'',
                backCase:false

            }
        },
        mounted:function(){
            this.$socket.emit('cc', 'startCook');
            var self=this
            http.post({
                url:'acceptOp',
                vm:this,
                params:{ok:'no'}          
            }).then(res => {
                res.data.data.forEach(function(val,index){
                    val.dd=parseInt(Math.random()*1000000);
                    val.valCont="开始";
                    val.bgcolor="background:#e14d4d;";
                })
                self.acceptData = res.data.data;
            }) 
        },
        sockets:{
            connect: function(){
                
            },
            callWaiter: function(val){
                this.callMsg=val+"号桌呼叫服务员";
                this.resMsg=val
                this.resCase=true;
                this.coverCaseShow=true;
            },
            chargeback(msg){
                var obj =JSON.parse(msg)
                console.log(msg)
                this.callMsg=obj.tableNumber+"号桌退掉"+obj.foodname;
                this.backCase=true;
                this.backMsg={
                    tableNumber:obj.tableNumber,
                    index:obj.index
                }
                this.coverCaseShow=true;
            },
            ddcreate(msg){
                var arr= JSON.parse(msg);
                console.log(arr)
                var self = this
                arr.forEach(function(item){
                   
                    var obj={
                        dd:parseInt(Math.random()*1000000),
                        valCont:"开始",
                        bgcolor:"background:#e14d4d;",
                        foodname:item.foodname,
                        tablenumber:item.tablenumber,
                        flavor:item.flavor
                    }
                    self.acceptData.splice(0, 0,obj)
                    
                })
                // alert(arr[0].tablenumber+"号桌下单了注意接收！")
            }
          },
        methods:{
            startCook:function(index){
                console.log(index)
                
                this.acceptData[index].valCont="烹饪中...";
                console.log(this.acceptData[index].valCont)
                this.acceptData[index].bgcolor="background:#58bc58;"
                var obj = {
                    tabelNum:this.acceptData[index].tablenumber,
                    foodName:this.acceptData[index].foodname
                }
                console.log(obj)
                this.$socket.emit('startCook', JSON.stringify(obj));
            },
            resCall(){
                this.resCase=false;
                this.coverCaseShow=false
                this.$socket.emit('resCall', this.resMsg);
            },
            finishCook(index){
                var obj ={
                    tablenumber:this.acceptData[index].tablenumber,
                    foodname:this.acceptData[index].foodname
                }
                this.$socket.emit('finishCook', JSON.stringify(obj));
                var self = this
                this.acceptData[index].ok='ok'
                
                http.post({
                    url:'finishCook',
                    vm:this,
                    params: this.acceptData[index]      
                }).then(res => {
                    console.log(res)
                    this.acceptData.splice(index,1)
                }) 
            },
            reschargeback(){
                this.$socket.emit('reschargeback',this.backMsg );
                this.backCase=false;
                this.coverCaseShow=false
            }
        },
        components: {
            coverCase
        }
    }
</script>