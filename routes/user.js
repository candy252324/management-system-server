var express =require("express");
var router =express.Router();
var User=require("../models/user");

router.get("/list",function(req,res,next){
  User.find({},function(err,doc){
    if(err){
      res.json({
        code:1,
        msg:err.message,
      })
    }else{
      const { page, limit, prop ,order,searchWord } = req.query
      let list=doc;
      if (order === 'descending') {
        list = doc.reverse()
      }
      if(searchWord){
        list=list.filter((item)=>{
          return item.account.indexOf(searchWord)>-1
            ||item.name.indexOf(searchWord)>-1;
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
module.exports = router;