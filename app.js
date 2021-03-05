const express = require('express')
const app = express()
const port = 3000

app.get('/app', (req, res) => {
  res.send('Welcome to gilpil.com')
})

app.get('/app/user', (req, res) => {
  res.send('Hello User')
})

app.get('/app/mysqltest',(req,res)=>{

  var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gilpilco_gilpil'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution);
})

connection.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})