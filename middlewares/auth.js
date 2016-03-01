/**
 * Auth middleware
 */

var auth = {
    checkLogin: function(req){
        return req.session.user ? true　: false;
    },
    getLoginUser: function(req){
        return req.session.user;
    },
    loginRequired: function(req, res, next){
        if(!req.session.user){
            return res.json({ errMsg: 'Login Required!' });
        }

        next();
    }
};

module.exports = auth;
