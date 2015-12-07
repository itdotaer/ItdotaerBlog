/**
 * Auth middleware
 */

var auth = {
    checkLogin: function(req, res, next){
        return req.session.user ? true　: false;
    },
    getLoginUser: function(req, res, next){
        return req.session.user;
    },
    loginRequired: function(req, res, next){
        if(req.session.user){
            return res.json({ errMsg: 'Login Required!' });
        }

        next();
    }
};

module.exports = auth;
