var express =require("express");
var router =express.Router();
var User=require("../models/user");

router.get("/list",function(req,res,next){
  let { page, limit, prop ,order,searchWord } = req.query;
  page=parseInt(page);
  limit=parseInt(limit);
  var req=new RegExp(searchWord,"i");
  let skip=(page-1)*limit;
  let total;
  User.find({
    $or:[
      {name:{$regex:req}},
      {account:{$regex:req}},
    ]
  },function (err,doc) {
    if(err){
      console.log(err)
    }else{
      total=doc.length;
    }
  })
  let d=User.find({
    $or:[
      {name:{$regex:req}},
      {account:{$regex:req}},
    ]
  }).skip(skip).limit(limit);
  d.sort({"createdAt":-1})
  d.exec(function (err,doc) {
    if(err){
      console.log(err)
      res.json({ code:1,msg:err.message})
    }else{
      res.json({
        code:0,
        result:{
          list:doc,
          total:total,
        }
      })
    }
  })
})

router.post("/submit",function(req,res,next){
  if(!req.body._id){
    let insert=new User(req.body)
    insert.save(function (err) {
      if(err){
        res.json({code:1,msg:err.message})
      }else{
        res.json({code:0})
      }
    })
  }else{
    User.update({_id:req.body._id},req.body,function(err,result){
      if(err){
        res.json({code:1,msg:err.message})
      }else{
        res.json({code:0})
      }
    });
  }
})

router.post("/del",function(req,res,next){
  let whereStr=req.body;
  console.log(whereStr)
  User.remove(whereStr,function(err,doc){
    if(err){
      console.log(err)
    } else{
      res.json({ code:0 })
    }
  })
})

module.exports = router;