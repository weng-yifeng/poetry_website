// 导入 mongoose 模块
var mongoose = require('mongoose');
// 导入配置
var config = require('./config');

module.exports = function() {
    // 连接数据库
    var db = mongoose.connect(config.mongodb, {useMongoClient: true});

    // 导入表
    require('../models/users.server.model');

    // 返回数据库
    return db;
}