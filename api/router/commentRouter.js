module.exports = {
	Comment:function(app,db){
		app.post('/comment',function(request,response){
			sql=["select count(id) from comment","select * from comment limit 10"]
			db.select(sql,function(data){
				response.send(data);
			})
		});
		app.post("/insertCom",function(request,response){
			
			db.syntheticOp(`insert into comment
             (client,via,content,star,time)
              values('${request.body.client}','A.jpg','${request.body.content}',
              '${request.body.star}','${request.body.time}');`, function(data){
                response.send(data);
            })
		})
	}
}