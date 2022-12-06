

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sac1122",
  password: "Sac@1122",
  database:"Dealdray"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  

});