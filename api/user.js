/**
 * User Api Controller
 */
var UserPorxy = require('../proxy').User;
var auth = require('../middleware/auth');
var jsonTool = require('../common/jsonTool');

exports.add = function(req, res, next){
    var user = req.body;
    
    if(!user){
        return jsonTool.object('Not exists user info!');
    }
    
    // name, loginName, password, email
    UserPorxy.add(user.name, user.loginName, user.password, user.email,
        function(err, comment){
            return jsonTool.object(err, comment);
        });
};

exports.get = function(req, res, next){
    var loginName = req.body;
    
    if(!loginName){
        return jsonTool.object('Not exists loginName!');
    }
    
    UserPorxy.get(loginName, function(err, user){
        return jsonTool.object(err, user)
    })
};

exports.getById = function(req, res, next){
    var _id = req.params['_id'];
    
    if(!_id){
        return jsonTool.object('No User _id!');
    }
    
    UserPorxy.getById(_id, function(err, user){
        return jsonTool.object(err, user);
    })
};

exports.login = function(req, res, next){
    var user = req.body;
    
    if(!user){
        return jsonTool.object('Not entire user login info!');
    }
    
    UserPorxy.login(user.loginName, user.password, function(err, user){
        return jsonTool.object(err, user);
    });
};

exports.delete = function(req, res, next){
    var _id = req.params['_id'];
    
    if(!_id){
        return jsonTool.object('Not exists _id!');
    }
    
    UserPorxy.delete(_id, function(err, count){
        return jsonTool.object(err, count);
    });
};

exports.update = function(req, res, next){
    var user = req.body;
    
    if(!user){
        return jsonTool.object('No user info!');
    }  
    
    UserPorxy.update(user, function(err, count){
        return jsonTool.object(err, count);
    });
};