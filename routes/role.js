var express =require("express");
var router =express.Router();
var Role=require("../models/role");

router.get("/list",function(req,res,next){
  Role.find({},function(err,doc){
    if(err){
      res.json({ code:1})
    }else{
      const { page, limit, prop ,order,searchWord } = req.query
      let list=doc;
      if (order === 'descending') {
        list = doc.reverse()
      }
      if(searchWord){
        list=list.filter((item)=>{
          return item.name.indexOf(searchWord)>-1;
        })
      }
      const pageList = list.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      var obj={list:pageList,total:list.length}
      res.json({
        code:0,
        result:obj
      })
    }
  })
})

router.post("/submit",function(req,res,next){
  console.log(req.body)
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
    Role.update({_id:req.body._id},req.body,function(err,result){
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