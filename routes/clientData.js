var express =require("express");
var router =express.Router();

var User=require("../models/user");
var Role=require("../models/role");


let clientData={
  role:{},
  user:{},
}
function getUserD(req, res, next) {
  User.find({},function(err,doc){
    if(err){
     console.log(err)
    }else{
      doc.forEach(item=>{
        clientData.user[item._id]={name:item.name};
      })
    }
  })
  next();
}

function getRoleD(req, res, next) {
  Role.find({},function(err,doc){
    if(err){
      console.log(err)
    }else{
      doc.forEach(item=>{
        clientData.role[item._id]={name:item.name};
      })
    }
  })
  next();
}

router.get("/",[getUserD,getRoleD],function(req,res,next){
  res.send(clientData);
})

module.exports = router;