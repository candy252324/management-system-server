var mongoose=require("mongoose")
var Schema=mongoose.Schema;
var schema=new Schema({
    "name": String,
    "grade": Number,
    "createUserId": String,
    "createTime": Date,
    "modifyUserId": String,
    "modifyTime": Date,
    "extra": String,
  },
  { timestamps: true }  //设置timestamps为true，schema映射的文档document会自动添加createdAt和updatedAt这两个字段，代表创建时间和更新时间
  // { collection: 'role'},  //也可直接告知表明，如此，则表名不必必须为复数
  )
module.exports=mongoose.model("Roles",schema);   //mongoose会自动转成复数，所以即使写成“Role”,查的也是名字为roles的表