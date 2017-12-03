
module.exports = {
    Acceptorder:function(app, db){
        var tsql = ['select count(id) from acceptorder','select * from acceptorder limit 10'];
        app.post('/acceptorder', function(request, response){
            // console.log(55)
            db.select(tsql, function(data){
                response.send(data);
            }) 
        })
        app.post('/getTurnPage0', function(request, response){
            // console.log(request.body.pageNumber);
            var pageSize = 10;
            var pageStart = `select * from acceptorder limit ${( request.body.pageNumber - 1 ) * pageSize}, ${ pageSize}`;
            // console.log(pageStart);
            var sql = ['select count(id) from acceptorder',pageStart] ;
            db.select(sql, function(data){
                response.send(data);
            })  
        })
        app.post('/delacceptorder',function(request, response){
            db.syntheticOp(`delete from acceptorder where id='${request.body.id}'`, function(data){
                response.send(data);
            }) 
        });



        //移动端插入数据
        app.post('/list',function(request, response){
            console.log(request.body);
            var js = 0;
            senddata()
            function senddata(){
                db.syntheticOp(`insert into acceptorder
                 (foodname,src,tablenumber,flavor,amount,price,totalPrice,ok)
                  values('${request.body[js].foodname}','${request.body[js].image}','${request.body[js].tableNumber}',
                  '${request.body[js].flavor}','${request.body[js].amount}','${request.body[js].price}','${request.body[js].totalPrice}','${request.body[js].ok}');`, function(data){
                    js++
                    if(js>=request.body.length){
                        response.send(data);
                        return 
                    }
                    
                    senddata()
                    
                })

            }
        });

        app.post("/getPayList",function(request,response){
            var sql = `select * from acceptorder`;
            db.syntheticOp(sql,function(data){
                response.send(data);
            })
        });
        app.post("/getPayList1",function(request,response){
            var sql = `select * from acceptorder`;
            db.syntheticOp(sql,function(data){
                response.send(data);
            })
        })
    }
}
