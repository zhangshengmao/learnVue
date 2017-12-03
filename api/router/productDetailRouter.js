
module.exports = {

	ProductDetail:function(app,db){
		app.post('/productDetail',function(request,response){
			sql=["select count(id) from productdetail","select * from productdetail limit 10"]
			db.select(sql,function(data){
				response.send(data);
			})
		});
		app.post('/getTurnPage2', function(request, response){
            var pageSize = 10;
            var sql =["select count(id) from productdetail",`select * from productdetail limit ${(request.body.pageNumber - 1) * pageSize}, ${pageSize}`];
            db.select(sql, function(data){
                response.send(data);
            })  
        });
        app.post('/delProDet',function(request, response){
            db.syntheticOp(`delete from productdetail where id='${request.body.id}'`, function(data){
                response.send(data);
            }) 
        });
        app.post('/addProDet',function(request, response){
            db.syntheticOp(`insert into productdetail
             (foodname, classify, price,detail,image,hot,sale,like,property)
              values('${request.body.foodname}','${request.body.classify}','${request.body.price}',
              '${request.body.detail}','${request.body.image}','${request.body.hot}',
              '${request.body.sale}','${request.body.like}','${request.body.property}');`, function(data){

                response.send(data);
            })
        });
        app.post('/changeProDet', function(request, response){
            // console.log(request.body);
            var sql = `UPDATE productdetail SET foodname = ?,classify = ?,price = ?,detail = ?,image = ?,hot = ?,
            sale = ?,like = ?,property = ? WHERE id = ?`;

            var data= [`${request.body.foodname}`,`${request.body.classify}`,`${request.body.price}`,
            `${request.body.detail}`,
            `${request.body.image}`,
            `${request.body.hot}`,
            `${request.body.sale}`,
            `${request.body.like}`,
            `${request.body.property}`,
            `${request.body.id}`];
            db.updata(sql, data,function(res){
                response.send(res)

            })
        });
        app.post('/huntProDet', function(request, response) {
            // console.log(request.body)
            var sql = `select * from productdetail where foodname like ?`;
            // mysql.query(sql, [’%’ + keyword + ‘%’], function(err, row){});
            // select * from admin where name regexp keyword
            // var sql = `select * from users where username regexp ${request.body.searchCont}`
            db.vagueSearch(sql,request.body.searchCont,function(res){
                // console.log(res);
                response.send(res);
            })
        });



        //移动端请求数据
        app.post("/foodDetail",function(request,response){
            var sql = `select * from productdetail where foodname = '${request.body.foodname}'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })

        app.post("/homeDetail",function(request,response){
            var sql = `select * from productdetail where hot = 'true'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })
        app.post("/homeSale",function(request,response){
            // console.log(1243)
            var sql = `select * from productdetail where sale = 'true'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })
        app.post("/properties",function(request,response){
            // console.log(1243)
            var sql = `select * from productdetail where properties = 'true'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })
        app.post("/meat",function(request,response){

            var sql = `select * from productdetail where classify = '荤菜'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })
        app.post("/vegetable",function(request,response){

            var sql = `select * from productdetail where classify = '素菜'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })
        app.post("/beforeEating",function(request,response){

            var sql = `select * from productdetail where classify = '开胃菜'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })  
        app.post("/soap",function(request,response){

            var sql = `select * from productdetail where classify = '补汤'`;
            db.syntheticOp(sql,function(res){
                response.send(res);
            })
        })      

	}
}