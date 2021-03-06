const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mysqldbConn = require('./config/mysql.db.config')

/**
 *   For security check need to add below line Access-Control-Allow-Origin
 *   it tell that only the give URL are allow to access the resource
 *   server can be really strict, and specify that only one origin can access it
 * */
app.use((req,res,next)=>{
  
  const corsWhitelist = [
    'http://localhost:4200',
    'https://www.gilpil.com',
    'http://www.gilpil.com',
    ];
    console.log("Request URL Comming from : ",req.headers.origin);
    console.log(">>",corsWhitelist.indexOf(req.headers.origin))
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }
   
    next();
})

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

app.get("/app/user/getAllUserDetails",(req,res)=>{
          
          mysqldbConn.query('select * from user',(err,rows)=>{

            if(err){
              req.fresh('error',err);
         }else{
              res.send({rows:rows});

            }
    })


})
   
app.listen(port, () => {
  console.log(`gilpil.com node server listening at http://localhost:${port}`)
})