var express = require('express');
var router = express.Router();
var mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/mall")
mongoose.connection.on('connected',()=>{
  console.log("数据库连接成功")
})
mongoose.connection.on('error',()=>{
  console.log("数据库连接失败")
})
mongoose.connection.on('disconnected',()=>{
  console.log("数据库断开连接")
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
