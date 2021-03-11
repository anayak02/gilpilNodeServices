var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{

    res.send("Hello How Are you Welcome to Gilpil..!!!")
})

router.post('/signup',(req,res,next)=>{

  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.mobileNumber);
  console.log(req.body.dob);
  console.log(req.body.agree);
  res.send("success");

})



module.exports=router;
