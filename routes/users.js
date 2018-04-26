var express =require("express");
var router =express.Router();
var Users=require("../models/users");

router.get("/",function(req,res,next){
  console.log(req.query)
  Users.find({},function(err,doc){
    if(err){
      res.json({
        status:1,
        msg:err.message,
      })
    }else{
      res.json({
        status:0,
        result:{
          count:doc.length,
          list:doc,
        }
      })
    }
  })
})
module.exports = router;