/*var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World');


}).listen(1234,'127.0.0.1');


console.log(" server listening to ")*/

var express = require('express');
var app = express();


app.get("/user/:name",function(req,res){
    console.log(req.params.name)
    res.type("text/plain");
    res.send(" this is simple text");

});


app.listen(process.env.PORT ||1234,function(req,res){
 console.log(" app listening to port 1234");   
})
