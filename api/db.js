
var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  port: 3306,
  database: 'qingsongdian'
});


module.exports = {

    // 增查删传一个spl
    // `delete from users where username='${obj.username}'`
    // `select * from users where username='${obj.username}' and password='${obj.password}'`
    //`insert into users (username,password) values('${obj.username}','${obj.password}');`
    // 综合操作
    syntheticOp:function(sql,_callback){
            pool.query(sql,function(err,result){
            if(err) throw err;
            _callback({status:true,data:result});
            return;
        })
    },
    // 分页
    select: function(tsql, callback){
        pool.query(tsql[0], function(error, total){
                pool.query(tsql[1], function(error, rows){
                    data = [total, rows]
                    callback(data);
            })
        })
    },
    // 获取页码
    turnPage: function(tsql, callback){
        pool.query(tsql, function(error, rows){
            callback(rows);
        })
    },
    updata:function(tsql,_data,_callback){
        // var userModSql = 'UPDATE node_user SET name = ?,age = ? WHERE id = ?';

        // var userModSql_Params = ['Hello World',99,7];

        //改 up
        // var data=[]
        // for(var attr in _data){
        //     data.push(_data[attr])
        // }

        pool.query(tsql,_data,function (err, result) {

           if(err){

                 console.log('[UPDATE ERROR] - ',err.message);

                 return;

           }       
           _callback({status:true,data:result});
        });
        

    },
    vagueSearch:function(tsql, data,callback){
        pool.query(tsql, ['%' + data + '%'], function(err, row){
                callback({status:true,data:row})
        });
    }
}
// connection.query(sql, [values], function (err, rows, fields) {
//  if(err){
//     console.log('INSERT ERROR - ', err.message);
//     return;
//    }
//    console.log("INSERT SUCCESS");
// });
// var sql = "INSERT INTO url(`from`,`to`,`status`, `is_new`) VALUES ?";