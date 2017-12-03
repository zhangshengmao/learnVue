var io = require('socket.io')();
var tabelNum = []
io.on("connection", function(client){
    
    client.on('startCook', function(obj){
        var obj1=JSON.parse(obj)
        console.log(tabelNum)
        io.emit('startCook',JSON.stringify([tabelNum,obj1]));
        console.log(JSON.parse(obj).tabelNum)
    })
    client.on('callWaiter', function(msg){
        io.emit('callWaiter',msg)
        
    })
    client.on('create',function(msg){
        if(tabelNum.indexOf(msg)>=0){

        }else{
            tabelNum.push(msg)
            console.log(tabelNum)
        }
    })
    client.on('resCall',function(msg){
        io.emit('resCall','服务员正在路上!请耐心等待哦')
    })
    client.on('chargeback',function(msg){
        io.emit('chargeback',msg)
    })
    client.on('reschargeback',function(msg){
        io.emit('reschargeback',JSON.stringify([tabelNum,msg]))
    })
    client.on('finishCook',function(msg){
        var obj=JSON.parse(msg)
        io.emit('finishCook',JSON.stringify([tabelNum,obj]))
    })
    client.on('ddcreate',function(msg){

        io.emit('ddcreate', msg)
    })
})
io.listen(888);