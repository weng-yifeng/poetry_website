var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* 用户表 */
var Users = mongoose.model('Users');

// 请求允许跨域
var allow_cross_domain = require('../middlewares/allowCrossDomain').allowCrossDomain;
router.use(allow_cross_domain);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 注册 */
router.post('/register', function(req, res, next) {
  var user_name = "wengyifeng",
      email = "hlwyfeng@163.com",
      password = "18899";

  var user = new Users( {
    userName: user_name,
    email: email,
    password: password,
  });
    
  user.save(function(err) {
      if (err) {
        console.log("create user error");
        res.json({
          code: 1,
          message: "create user error",
        });
      }
      res.json({
        code: 0,
        message: "create user success",
      });
  });



});

module.exports = router;
