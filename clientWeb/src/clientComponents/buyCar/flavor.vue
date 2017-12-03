<template>
    <div class="flavor">
        <div class="mask">
        </div>
        <div class="content">
            <h3>{{foodname}}</h3>
            <p>口味选择：</p>
            <span v-for='(param,index) in dataset' @click='select'>{{param}}</span>
            <div class="sure" @click='makeSure'>确认</div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import "./flavor.scss";
    export default{
        data: function(){
            return {
                dataset:['少葱','少蒜','少辣','少油'],
                flavor:{
                        sha:true,
                        gar:true,
                        hot:true,
                        soil:true
                        }
            }
        },
        props:['foodname'],
        methods:{
            select(e){
                if(e.target.className == 'select'){
                    e.target.className = '';
                }else{
                    e.target.className = 'select';
                }
                switch (e.target.innerText){
                    case '少葱':
                        this.flavor.sha = !this.flavor.sha 
                        break;
                    case '少蒜':
                        this.flavor.gar = !this.flavor.gar
                        break;
                    case '少辣':
                        this.flavor.hot = !this.flavor.hot
                        break;
                    case '少油':
                        this.flavor.soil = !this.flavor.soil
                        break; 
                    default:
                        break;                           
                }
            },
            makeSure(e){
                var params = '';
                if(this.flavor.sha && this.flavor.gar && this.flavor.hot && this.flavor.soil){
                    params = '默认';
                }else{
                    if(!this.flavor.sha){
                        params += '少葱'
                    };
                    if(!this.flavor.gar){
                        params += '少蒜'
                    };
                    if(!this.flavor.hot){
                        params += '少辣'
                    };
                    if(!this.flavor.soil){
                        params += '少油'
                    };
                }
                var buycarList = this.$store.state.datagrid.buycarList;
                for(var i = 0;i < buycarList.length;i++){
                    if(this.foodname == buycarList[i].foodname){
                        this.$store.state.datagrid.buycarList[i]['flavor'] = params;
                    }
                };
                this.$store.state.buyCar.flavorSel = false;
            }
        }
    }
</script>