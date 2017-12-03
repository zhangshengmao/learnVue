
module.exports = {

	ProductList:function(app,db){
		app.post('/productList',function(request,response){
			sql=["select count(id) from productlist","select * from productlist limit 10"]
			db.select(sql,function(data){
				response.send(data);
			})
		});
		app.post('/getTurnPage1', function(request, response){
            var pageSize = 10;
            var sql =["select count(id) from productlist",`select * from productlist limit ${(request.body.pageNumber - 1) * pageSize}, ${pageSize}`];
            db.select(sql, function(data){
                response.send(data);
            })  
        });
        app.post('/delProList',function(request, response){
            db.syntheticOp(`delete from productlist where id='${request.body.id}'`, function(data){
                response.send(data);
            }) 
        });
        app.post('/addProList',function(request, response){
            db.syntheticOp(`insert into productlist (foodname, tablenumber, time) values('${request.body.foodname}','${request.body.tablenumber}','${request.body.time}');`, function(data){

                response.send(data);
            })
        });
        app.post('/changeProList', function(request, response){
            console.log(request.body);
            var sql = 'UPDATE productlist SET foodname = ?,tablenumber = ?,time = ? WHERE id = ?';

            var data= [`${request.body.foodname}`,`${request.body.tablenumber}`,`${request.body.time}`,`${request.body.id}`];
            db.updata(sql, data,function(res){
                response.send(res)

            })
        });
        app.post('/huntProList', function(request, response) {
            console.log(request.body)
            var sql = `select * from productlist where foodname like ?`;
            // mysql.query(sql, [’%’ + keyword + ‘%’], function(err, row){});
            // select * from admin where name regexp keyword
            // var sql = `select * from users where username regexp ${request.body.searchCont}`
            db.vagueSearch(sql,request.body.searchCont,function(res){
                console.log(res);
                response.send(res);
            })
        });
	}
}