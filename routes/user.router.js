var express = require('express');
var router = express.Router();
const chalk = require('chalk');
var mysqldbConn = require('../config/mysql.db.config');
const { Color } = require('chalk');

router.get('/findAllUsers',function(req,res,next){

    res.send("hello all user");
})

router.post('/b', function(req, res,next) {
     
     res.send("emaiid \t="+req.body.email+"\t password \t ="+req.body.password);
});

router.post('/signin',(req,res)=>{
    console.log(chalk.bold.green("email = ",req.body.email));
    console.log(chalk.bold.green("password = ",req.body.password));

    let sql = "select * from user u where u.login_user_id=? AND u.password = ?";
    let values=[
        [req.body.email],
        [req.body.password]
    ];

    try{

        mysqldbConn.query(sql,[values[0],values[1]],(err,result)=>{

            if(err){
                res.send({reusult:"error:"+err.message});
                
            }else{
                let row=[];
                row = result;
               console.log("result length "+row.length) ;
               if(row.length===0){
                   res.status(400).send({result:"failed",user:null});
               }else{

                    if(req.body.email===result[0].email && req.body.password === result[0].password){
                        res.status(200).send({result:"success",user:result});       
                    }else{
                        res.status(400).send({result:"failed",user:null});   
                    }
                    
               }
               
            }

        })

    }catch(e){
        console.log(chalk.red("Error"+e));
        res.status(400).send("Erro : "+e.message)
    }
    
    
    
})
router.post('/signup',(req,res)=>{

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
     console.log(chalk.blue("Get All User Details is called !!"));
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