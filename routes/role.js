var express =require("express");
var router =express.Router();
var Role=require("../models/role");

router.get("/list",function(req,res,next){
  let { page, limit, prop ,order,searchWord } = req.query;
  page=parseInt(page);
  limit=parseInt(limit);
  var req=new RegExp(searchWord);
  let skip=(page-1)*limit;
  let total;
  Role.find({
    $or:[
      {name:{$regex:req}},
    ]
  },function (err,doc) {
    if(err){
      console.log(err)
    }else{
      total=doc.length;
    }
  })
  let d=Role.find({
    $or:[
      {name:{$regex:req}},
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
    let insert=new Role(req.body)
    insert.save(function (err) {
      if(err){
        res.json({code:1,msg:err.message})
      }else{
        res.json({code:0})
      }
    })
  }else{
    Role.update({_id:req.body._id},{name:req.body.name,grade:req.body.grade,extra:req.body.extra},function(err,result){
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
  Role.remove(whereStr,function(err,doc){
    if(err){
      console.log(err)
    }else{
      res.json({ code:0 })
    }
  })
})

router.get("/options",function(req,res,next){
  let options=[];
  Role.find({},function (err,doc) {
    doc.forEach(item=>{
      options.push({value:item._id,label:item.name})
    })
    res.send(options)
  })

})
module.exports = router;