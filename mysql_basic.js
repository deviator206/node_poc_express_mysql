
//https://github.com/felixge/node-mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database:'EXPENSEAPPDB'
});

connection.connect(function(){

console.log("connected to db...");

});

connection.query('SELECT *  FROM TAB1', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0]);
});



connection.query('INSERT INTO TAB1(FNAME,LNAME) VALUES("KILLER","CHOKRA") ', function(err, rows, fields) {
  if (err) throw err;

  console.log('ADDED THE ROW ');
});



connection.query('SELECT *  FROM TAB1', function(err, rows, fields) {
  if (err) throw err;
    for(var i=0;i<rows.length;i++)
  console.log('The solution is: ', rows[i]);
});



connection.end()