/**
 * User Api Controller
 */

var UserPorxy = require('../proxy').User;
var auth = require('../middlewares/auth');
var jsonTool = require('../common/jsonTool');

exports.add = function(req, res, next){
    var user = req.body;

    if(!user){
        return res.json(jsonTool.object('Not exists user info!'));
    }

    // name, loginName, password, email
    UserPorxy.add(user.name, user.loginName, user.password, user.email,
        function(err, comment){
            return res.json(jsonTool.object(err, comment));
        });
};

exports.get = function(req, res, next){
    var loginName = req.body;

    if(!loginName){
        return res.json(jsonTool.object('Not exists loginName!'));
    }

    UserPorxy.get(loginName, function(err, user){
        return res.json(jsonTool.object(err, user));
    })
};

exports.getById = function(req, res, next){
    var _id = req.params['_id'];

    if(!_id){
        return res.json(jsonTool.object('No User _id!'));
    }

    UserPorxy.getById(_id, function(err, user){
        return res.json(jsonTool.object(err, user));
    });
};

exports.login = function(req, res, next){
    var user = req.body;

    if(!user){
        return res.json(jsonTool.object('Not entire user login info!'));
    }

    UserPorxy.login(user.loginName, user.password, function(err, cbUser){
        if(cbUser){
            req.session.user = cbUser;
        }
        return res.json(jsonTool.object(err, cbUser));
    });
};

exports.delete = function(req, res, next){
    var _id = req.params['_id'];

    if(!_id){
        return res.json(jsonTool.object('Not exists _id!'));
    }

    UserPorxy.delete(_id, function(err, count){
        return res.json(jsonTool.object(err, count));
    });
};

exports.update = function(req, res, next){
    var user = req.body;

    if(!user){
        return res.json(jsonTool.object('No user info!'));
    }

    UserPorxy.update(user, function(err, count){
        return res.json(jsonTool.object(err, count));
    });
};
