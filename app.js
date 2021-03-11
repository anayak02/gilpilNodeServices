const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mysqldbConn = require('./config/mysql.db.config')
const userRouter = require('./routes/user.router');
const appRouter = require('./routes/app.router');



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
    
    //console.log("Request URL Comming from : ",req.headers.origin);
    //console.log("corsWhitelist value : ",corsWhitelist.indexOf(req.headers.origin))
    //if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //}
   
    next();
})

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))
// parse requests of content-type - application/json
app.use(express.json());
//Parses HTTP body accepted Content-Type is application/octet-stream.
app.use(express.raw());
// All the router for restFull web service
app.use('/app/',appRouter);



app.get('/app/mysqltest',(req,res)=>{
         
            mysqldbConn.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
            console.log('The solution is: ', rows[0].solution);
            res.send("MySql Connection test result = "+ rows[0].solution);
            })
           
 })
   
app.listen(port, () => {
  console.log(`gilpil.com node server listening at http://localhost:${port}`)
})