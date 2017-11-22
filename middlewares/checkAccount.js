/**
 * 检测用户权限（登录）
 */

module.exports = {
    checkLogin: function(req, res, next) {
        // 未登录
        if (!req.session.user) {
            // 重定向到首页
            res.redirect('/');
        }
        next();
    }
}