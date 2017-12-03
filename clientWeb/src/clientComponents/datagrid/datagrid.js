export default {
    state: {
        name: 'BuycarList',
        buycarList: [],
        detailName:'',
        amount:0,
        tiemsArr:[],
        listNmber:[],
        tableNumber:8,
        totalPrice:0,
        insertOk:false
    },
    actions: {
        getGoods: function(store, params){
            // store.commit('getGoods', param)
            // this.mutations.getGoods();
        }
    },
    mutations: {
        addAmount(state,obj){
            //数量点击加1
            obj['amount'] += 1;
            function render(state,obj){
                if(state.buycarList.length>0){
                    for(var i = 0; i<state.buycarList.length;i++){
                        if(state.buycarList[i].id==obj.id){
                            return;
                        }
                    }
                    state.buycarList.push(obj);
                    
                }else{
                    
                    state.buycarList.push(obj);
                }
            }
            render(state,obj);
            var totalPrice = 0;
            state.buycarList.forEach(function(item){
                // for(var attr in item){
                    item.price = item.price * 1;
                    item.amount = item.amount * 1;
                    totalPrice += item.price * item.amount;
                // }
            });
            state.totalPrice = totalPrice;
        },
        subAmount(state,obj){
            //点击数量减1
            if(obj['amount']<=0){
                state.buycarList.forEach(function(item,idx){
                    // state.buycarList.splice(idx,1);
                    for(var attr in item){
                        if(item.id==obj.id){
                            state.buycarList.splice(idx,1);
                        }
                    }
                })
                return;
            }
            obj['amount'] -= 1;
            var totalPrice = 0;
            state.buycarList.forEach(function(item){
                // for(var attr in item){
                    item.price = item.price * 1;
                    item.amount = item.amount * 1;
                    totalPrice += item.price * item.amount;
                // }
            });
            state.totalPrice = totalPrice;

        },
        cooktime(state,obj){
            
        }
    },
    computed: {
        changeState: function(){
            // return this.amount;
        }
    }
}
