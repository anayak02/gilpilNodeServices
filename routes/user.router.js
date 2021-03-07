var express = require('express');
var router = express.Router();
var mysqldbConn = require('../config/mysql.db.config');

router.get('/findAllUsers',function(req,res,next){

    res.send("hello all user");
})

router.post('/b', function(req, res,next) {
     
     res.send("emaiid \t="+req.body.email+"\t password \t ="+req.body.password);
});

router.get("/getAllUserDetails",(req,res,next)=>{
     console.log(">d>");
         try{
           mysqldbConn.query('select * from user',(err,rows)=>{
               if(err){
                    req.fresh('error',err);
                }else{
                    res.status(200).send({rows:rows});
                }
            })
        }catch(e){
            res.status(400).send(e.message);
        }
})

module.exports = router;