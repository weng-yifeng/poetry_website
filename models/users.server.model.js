/**
 * 用户表
 */
var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    userName: String,           // 用户名
    email: String,              // 邮箱
    password: String,           // 密码
    headImg: String,            // 头像
    signature: String,          // 个性签名
});

mongoose.model('Users', UsersSchema);