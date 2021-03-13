var express = require('express');
var router = express.Router();
var mysqldbConn = require('../config/mysql.db.config');

router.get('/findAllUsers',function(req,res,next){

    res.send("hello all user");
})

router.post('/b', function(req, res,next) {
     
     res.send("emaiid \t="+req.body.email+"\t password \t ="+req.body.password);
});


router.post('/signup',(req,res,next)=>{

    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.mobileNumber);
    console.log(req.body.dob);
    console.log(req.body.agree);
    
    var sql = "INSERT INTO user (user_id,login_user_id,password,mobile_number,email,date_of_birth) VALUES ?";  
    var values = [  
           [1,req.body.email,
            req.body.password,
            req.body.mobileNumber,
            req.body.email,
            req.body.bob 
           ]        
    ]; 


    try{
        mysqldbConn.query(sql, [values],(err,result)=>{
            if(err){
                 
                 res.send({result:"Error : "+err.message});
             }else{
                 res.status(200).send({result:"success"});
             }
         })
     }catch(e){
         res.status(400).send(e.message);
     }

    //res.send({res:resDate});
  
  })
  
router.get("/getAllUserDetails",(req,res,next)=>{
     
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

router.get("/getAllUserDetails1",(req,res,next)=>{
     
    try{
       mysqldbConn.query('select * from user',(err,rows)=>{
           if(err){
                req.fresh('error',err);
            }else{
                res.status(200).send({items:rows});
            }
        })
    }catch(e){
        res.status(400).send(e.message);
    }
})

module.exports = router;