<template>
    <div class="comment">
        <div class="mask">
        </div>
        <div class="content">
            <p><span class="closeBtn" @click = 'close'>&times;</span></p>
            <div>
                <ul>
                    <li v-for ="(obj, index) in dataset">
                        <div class="li_img">
                            <img :src="baseUrl + obj.src"/>
                        </div>
                        <div class="li_info">
                            <h3>{{obj.foodname}}</h3>
                            <div class="block">
                              <el-rate  v-model= 'obj.star' :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                              </el-rate>
                            </div>                           
                        </div>
                    </li>
                </ul>
                <h2>评论</h2>
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
            </div>
            <p class='sure'><span class="sureBtn" @click = 'sure'>提交</span></p>
        </div>
    </div>
</template>

<script type="text/javascript">
    import "./comment.scss";
    import http from '../../utils/httpClient.js';
    export default{
        data: function(){
            return {
                 baseUrl:'./src/assets/',
                dataset:[],
                textarea:""
            }
        },
        props:[],
        methods:{
            close(){
                this.$store.state.pay.commentSel =  false;
            },
            starbtn(index){
                console.log(index)
            },
            sure(){
                var d = new Date();
                var year = d.getFullYear();
                var mon = d.getMonth() + 1;
                var date = d.getDate();
                var times = year + '-' + mon + '-' + date;
                var comObj = {};
                comObj['content'] = this.textarea;
                comObj['client'] = "用户"+ parseInt(Math.random()*1000000000);
                comObj['star'] = 5;
                comObj['time'] = times;
                console.log(comObj);
                http.post({
                    url:'insertCom',
                    params:comObj
                }).then(res=>{
                    console.log(res);
                })
                this.$store.state.pay.commentSel =  false;
            }
        },
        mounted(){
            http.post({
                url:'getPayList1'
            }).then(res=>{
                console.log(res.data.data);
                res.data.data.forEach(function(item){
                    item['star'] = null;
                })
                this.dataset = res.data.data;

            })
        }
    }
</script>

<style lang="scss">
    .comment{

        .content{
            overflow: auto;
            height:1200px;
            ul{
                li{
                    display: flex;
                    justify-content: space-between;
                    padding:5% 5%;
                    border-bottom:1px dashed #fff;
                    .li_img{flex:1;img{width:50%;}}
                    img{width:50%;}
                    .li_info{flex:1;}
                }
            }
            h3{font-size:38px;line-height: 38px}
            .block{margin-top:5%;
                i{font-size:40px;}
            }
            .el-textarea__inner{font-size:38px}

        }
    }
</style>