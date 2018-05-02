var mongoose=require("mongoose")
var Schema=mongoose.Schema;
var schema=new Schema({
    "name": String,
    "account":String,
    "password":String,
    "gender": Boolean,
    "role": String,      //角色id
    "avatar": String,
    "mobile": String,
    "email": String,
    "birthday": Date,
    "createUserId": String,
    "createTime": Date,
    "modifyUserId": String,
    "modifyTime": Date,
    "extra": String,
  },
  { timestamps: true },
  )
module.exports=mongoose.model("Users",schema);