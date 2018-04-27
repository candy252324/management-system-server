var express=require("express");
var router=express.Router();

router.post("/token",function(req,res,next){
  console.log(req.body)
  res.json({
    code:0,
    result:{
      token: "121454545"      //用户id
    }
  })
})
router.get("/info",function(req,res,next){
  console.log(req.query)
  res.json({
    code: 0,           // 状态码
    result:{
      roleGrade: 0 ,        // 权限等级, Number
      account: "美美" ,
      name: "陈美美" ,
      gender : false,
      role: "112354" ,
      avatar: "" ,
      mobile: "1737256984" ,
      email: "15658556479@qq.com" ,
      birthday: "2015-09-15" ,
    }
  })
})
router.post("/logout",function(req,res,next){
  console.log(req.query)
  res.json({code:0})
})

module.exports=router;