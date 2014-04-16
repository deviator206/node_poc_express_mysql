

var express = require('express');
var app = express();

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/mydb')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
    console.log(" able to log in");
});


app.get("/user/:name",function(req,res){
    console.log(req.params.name)
    res.type("text/plain");
    db.collection("testData",function(err, collection) {
        collection.find({}, function(err, item) {
            console.log(item)
            res.send(item);
        })
    
    });
    

});


app.listen(process.env.PORT ||1234,function(req,res){
 console.log(" app listening to port 1234");   
})
