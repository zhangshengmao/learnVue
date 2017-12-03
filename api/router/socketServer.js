var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

io.on("callCenter",function(res){
	console.log(res);
});


http.listen(888);