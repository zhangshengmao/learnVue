
module.exports = {
	Register:function(app,db){
		app.post('/users', function(request, response){

            sql=["select count(id) from users","select * from users limit 10"]
			db.select(sql, function(data){ 
                console.log(data)
            	response.send(data);
            }) 
        });
        app.post('/getTurnPage', function(request, response){
            var pageSize = 10;
            var sql = `select * from users limit ${(request.body.pageNumber - 1) * pageSize}, ${pageSize}`;
            db.select(sql, function(data){

                
                response.send(data);
            })  
        })
        app.post('/delgoods',function(request, response){
            db.syntheticOp(`delete from users where id='${request.body.id}'`, function(data){
                response.send(data);
            }) 
        })
        
        app.post('/addgoods',function(request, response){
            db.syntheticOp(`insert into users (username, content, time) values('${request.body.username}','${request.body.content}','${request.body.time}');`, function(data){

                response.send(data);
            })
        })
        app.post('/changeData', function(request, response){
            console.log(request.body);
            var sql = 'UPDATE users SET username = ?,content = ?,time = ? WHERE id = ?';

            var data= [`${request.body.username}`,`${request.body.content}`,`${request.body.time}`,`${request.body.id}`];
            db.updata(sql, data,function(res){
                response.send(res)

            })
        })
        app.post('/huntgoods', function(request, response) {
            console.log(request.body)
            var sql = `select * from users where username like ?`;
            db.vagueSearch(sql,request.body.searchCont,function(res){
                console.log(res);
                response.send(res);
            })
        });
        app.post('/acceptOp', function(request, response) {
            var sql = `select * from acceptorder where ok = '${request.body.ok}'`;
            db.syntheticOp(sql,function(res){
                console.log(res)
                response.send(res)
            })
        });
        app.post('/listItemData', function(request, response) {
            console.log()
            var sql = `select * from acceptorder where tablenumber = '${request.body.tablenumber}' and ok = 'no'`;
            db.syntheticOp(sql,function(res){
                console.log(res)
                response.send(res)
            })
        });
        app.post('/finishCook', function(request, response){
            console.log(request.body);
            var sql = 'UPDATE acceptorder SET ok = ? WHERE id = ?';

            var data= [`${request.body.ok}`,`${request.body.id}`];
            db.updata(sql, data,function(res){
                response.send(res)

            })
        })
        
	}
}
