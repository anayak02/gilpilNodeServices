const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mysqldbConn = require('./config/mysql.db.config')

app.get('/app', (req, res) => {
  res.send('Welcome to gilpil.com')
})

app.get('/app/user', (req, res) => {
  res.send('Hello User how are your')
})

app.get('/app/mysqltest',(req,res)=>{
           
            mysqldbConn.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
            console.log('The solution is: ', rows[0].solution);
            res.send("MySql Connection test result = "+ rows[0].solution);
            })
           
    })

app.get("/app/getAllUserDetails",(req,res)=>{
          mysqldbConn.query('select * from user',(err,rows)=>{

            if(err){
              req.fresh('error',err);
             }else{
              res.send({data:rows});

            }
    })


})
   
app.listen(port, () => {
  console.log(`gilpil.com node server listening at http://localhost:${port}`)
})