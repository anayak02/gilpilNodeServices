var mysql = require('mysql')
var mysqldbConn = mysql.createConnection({
  host: 'localhost',
  user: 'gilpilco_gilpil',
  password: 'gilpilco_gilpil@123',
  database: 'gilpilco_gilpil'
})

mysqldbConn.connect(function (err) {
  if (err) throw err;
  console.log("MySql Database Connected!");
});
module.exports = mysqldbConn;

