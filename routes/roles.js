var express =require("express");
var router =express.Router();
var Roles=require("../models/roles");

router.get("/",function(req,res,next){
  console.log(req.query)
  Roles.find({},function(err,doc){
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