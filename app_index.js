var express = require('express');
var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database:'EXPENSEAPPDB'
});


var isDBConnected =false;



app.get("/getphonenumber/:data",function(req,res){
    var sT = req.params.data;
    var arrT =  sT.split(",");
    res.type("text/plain");
    res.send(" this is simple text");   
    
});

app.get("/register/:data",function(req,res){
    var sT = req.params.data;
    var arrT =  sT.split(",");
    
    var numbr =Number(arrT[0]);
    var name =arrT[1];
    
    connection.connect(function(){
    connection.query('INSERT INTO USER_IN_01(UNAME,PNUMBER) VALUES("'+name+'","'+numbr+'") ', function(err, rows, fields) {
                  if (err) throw err;

                  console.log('ADDED THE ROW ');
                });


                    }); 


                connection.end()
    res.type("text/plain");
    res.send("success");   
    
});

app.listen(1234,function(){
    console.log("application is listening..");
});

app.enable('trust proxy');


