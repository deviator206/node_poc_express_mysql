var express = require('express');
var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database:'EXPENSEAPPDB'
});




//https://gist.github.com/pixelhandler/1791080

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('connect').bodyParser());

// POST to CREATE
app.post('/api/getphonenumber', function (req, res) {
	  var product;
	  console.log("POST: ");
	  console.log(req.body.title);
	  console.log(req.body.description);
	  product = {
		title: req.body.title,
		description: req.body.description,
	  };
	  
	  return res.send(product);
});


// Single product
app.get('/api/products/:id', function (req, res) {
	var product ={};
	var number = req.params.id;
	console.log(number)
	if(number == '1')
	product ={
		name : "sandeep yulp!"
	}
	 
  return res.send(product);
});


app.listen(1234,function(){
    console.log("application is listening..");
});

app.enable('trust proxy');


