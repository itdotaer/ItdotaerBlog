/**
 * Post Api Controller
 */

var PostProxy = require('../proxy').Post;
var auth = require('../middlewares/auth');
var jsonTool = require('../common/jsonTool');

exports.add = function(req, res, next){
    var post = req.body;

    if(!post || !post.title || post.tags.length < 1 || !post.description || !post.content){
        return res.json(jsonTool.object('Not entire post data!'));
    }

    var loginUser = auth.getLoginUser(req);

    PostProxy.add(loginUser._id, post.title,
        post.tags, post.description, post.content,
        function(err, user){
            return res.json(jsonTool.object(err, user));
        });
};

exports.get = function(req, res, next){
    var title = req.query['title'];
    var index = req.query['index'];
    var size = req.query['size'];

    if(!index || !size){
        return res.json(jsonTool.object('Not entire pagination info!'));
    }

    PostProxy.total(title, function(err, count){
        if(err){
            return res.json(jsonTool.object(err));
        }
        PostProxy.get(title, index, size, function(err_1, data){
            return res.json(jsonTool.data(err_1, data, count));
        });
    });
};

exports.getById = function(req, res, next){
    var _id = req.params['id'];

    if(!_id){
        jsonTool.object('No Post _id!');
    }

    PostProxy.getById(_id, function(err, post){
        jsonTool.object(err, post);
    });
};

exports.delete = function(req, res, next){
    var _id = req.params['id'];

    if(!_id){
        jsonTool.object('No Post _id!');
    }

    PostProxy.delete(_id, function(err, count){
        return jsonTool.object(err, count);
    });
};

exports.update = function(req, res, next){
    var post = req.body;
    var loginUser = auth.getLoginUser();

    if(!post){
        jsonTool.object('No post info!');
    }

    PostProxy.update(loginUser._id, post, function(err, count){
        return jsonTool.object(err, count);
    });
};
