var mongoose=require("mongoose")
var Schema=mongoose.Schema;
var roleSchema=new Schema({
  "_id": String,
  "name": String,
  "roleGrade": String,
  },
  // { collection: 'role'},  //也可直接告知表明，如此，则表名不必必须为复数
  )
module.exports=mongoose.model("Roles",roleSchema);   //mongoose会自动转成复数，所以即使写成“Role”,查的也是名字为roles的表