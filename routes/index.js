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
  var user_name = "wengyifeng2",
      email = "hlwyfeng@163.com",
      password = "18899";

  var user = new Users( {
    userName: user_name,
    email: email,
    password: password,
  });
    
  user.save(function(err) {
      if (err) {
        res.json({
          code: 1,
          message: err,
        });
      }
      res.json({
        code: 0,
        message: "create user success",
      });
  });
});

/* 登录 */
router.post('/login', function(req, res, next) {
  var user_name = "wengyifeng3",
      password = "18899";
  
    Users.find({userName: user_name}, function(err, docs) {
      if (err) {
        console.log('err:', err);
        res.json({
          code: 1,
          message: '查询失败',
          err: err,
        });
      }
      if (docs.length) {
        res.json({
          code: 1,
          message: '用户名不存在'
        });
      } else if (password !== docs.password) {
        res.json({
          code: 1,
          message: '用户名或密码错误',
        });
      } else {
        res.json({
          code: 0,
          message: '登录成功',
        });
      }

    });


});

module.exports = router;
