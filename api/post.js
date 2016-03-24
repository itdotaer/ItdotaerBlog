/**
 * Post Api Controller
 */

var PostProxy = require('../proxy').Post;
var auth = require('../middlewares/auth');
var jsonTool = require('../common/jsonTool');

var appInfo = require('../config').appInfo;

exports.add = function(req, res, next){
    var post = req.body;

    if(!post || !post.title || !post.tags || !post.content){
        return res.json(jsonTool.object('Not entire post data!'));
    }

    //Split tags
    var tags = post.tags.split(';');

    tags = tags.map(function(tag){
        return ({
            tagName: tag
        });
    });

    var loginUser = auth.getLoginUser(req);

    PostProxy.add(loginUser._id, post.title,
        tags, post.content,
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

exports.getPosts = function(req, res, next){
    var type = req.query['type'];
    var hotPostNum = appInfo.hotPostNum;

    PostProxy.getPosts(type, hotPostNum, function(err, data){
        return res.json(jsonTool.object(err, data));
    });
};

exports.getById = function(req, res, next){
    var _id = req.params['id'];

    if(!_id){
        return res.json(jsonTool.object('No Post _id!'));
    }

    PostProxy.getById(_id, function(err, post){
        PostProxy.updatePv(post, function(err, cb){
            if(err){
                console.error('Error:', err);
            }

            if(cb.n < 1 && cb.ok != 1){
                console.error('Error:', 'Post(Id:'+ _id + ')pv not be added successed!');
            }

            return res.json(jsonTool.object(err, post));
        });
    });
};

exports.delete = function(req, res, next){
    var _id = req.params['id'];

    if(!_id){
        res.json(jsonTool.object('No Post _id!'));
    }

    PostProxy.delete(_id, function(err, cb){
        return res.json(jsonTool.object(err, cb));
    });
};

exports.update = function(req, res, next){
    var post = req.body;
    var loginUser = auth.getLoginUser(req);

    if(!post){
        return res.json(jsonTool.object('No post info!'));
    }

    //Split tags
    var tags = post.tags.split(';');

    tags = tags.map(function(tag){
        return ({
            tagName: tag
        });
    });

    post.tags = tags;

    PostProxy.update(loginUser._id, post, function(err, cb){
        return res.json(jsonTool.object(err, cb));
    });
};

exports.getTags = function(req, res, next){
    PostProxy.getTags(function(err, tags){
        return res.json(jsonTool.data(err, tags, -1));
    });
};

exports.getPostsByTag = function(req, res, next){
    var tag = req.params['tag'];
    var index = req.query['index'];
    var size = req.query['size'];

    if(!index || !size){
        return res.json(jsonTool.object('Not entire pagination info!'));
    }

    if(!tag){
        return res.json(jsonTool.object('No tag!'));
    }

    PostProxy.getPostTotalByTag(tag, function(err, count){
        if(err){
            return res.json(jsonTool.object(err));
        }
        PostProxy.getPostsByTag(tag, index, size, function(err_1, posts){
            return res.json(jsonTool.data(err_1, posts, count));
        });
    });
};
