var mongoose=require("mongoose")
var Schema=mongoose.Schema;
var schema=new Schema({
    "_id": String,
    "name": String,
    "gender": Boolean,
    "passWord": String,
    "role": String,   //角色id

  })
module.exports=mongoose.model("Users",schema);