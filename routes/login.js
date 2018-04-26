var express=require("express");
var router=express.Router();

router.post("/login",function(req,res,next){
  console.log(req.body)
  res.json({
    code:0,
    token:"123465",
  })
})
router.get("/userInfo",function(req,res,next){
  console.log(req)
  res.json({
    roleGrade:0,
    info:{
      id:"456484",
      name:"美美",
    }
  })
})
router.post("/logout",function(req,res,next){
  console.log(req.query)
  res.send("logout")
})

module.exports=router;