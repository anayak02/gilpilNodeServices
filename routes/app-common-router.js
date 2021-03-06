var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{

    res.send("Hello How Are you Welcome to Gilpil..!!!")
})



module.exports=router;
