var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'www.wuda-net.ch',
  user     : 'appuser',
  password : '4apphello',
  port     : 3306,
  database : 'testdb'
});
 
connection.connect();

//connection.query('INSERT INTO tbl_mitarbeiter (vorname, nachname, abteilung) VALUE ("David","Würzer", 101)',function(){});
//console.log("insert");

connection.query('SELECT * FROM v_mit_abt', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows);
});

test michi
