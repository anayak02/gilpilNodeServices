var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{

    res.send("Hello How Are you Welcome to Gilpil..!!!")
})

router.post('/signup',(req,res,next)=>{

  console.log(req.body.email);
    // req.body.password
    // req.body.mobileNumber
    // req.body.dateOfBirth
    // req.body.agree
    res.send("signup");

})



module.exports=router;
