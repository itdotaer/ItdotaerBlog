/**
 * Comment Api Controller
 */
var CommentProxy = require('../proxy').Comment;
var auth = require('../middleware/auth');
var jsonTool = require('../common/jsonTool');

exports.add = function(req, res, next){
    var comment = req.body;

    CommentProxy.add(comment.postId, comment.email, comment.content,
        function(err, comment){
            return jsonTool.object(err, comment);
        });
};

exports.get = function(req, res, next){
    var postId = req.params['postId'];
    var index = req.query['index'];
    var size = req.query['size'];
    
    if(!postId){
        return jsonTool.object('No postId!');
    }
    
    if(!index || !size){
        jsonTool.object('Not entire pagination info!');
    } 
    
    CommentProxy.total(postId, function(err, count){
        if(err){
            return jsonTool.object(err);
        }
        
        CommentProxy.get(postId, index, size, function(err_1, comments){
            return jsonTool.data(err_1, comments, count);
        });
    });
};

exports.getById = function(req, res, next){
    var _id = req.params['_id'];
    
    if(!_id){
        return jsonTool.object('No Comment _id!');
    }
    
    CommentProxy.getById(_id, function(err, post){
        return jsonTool.object(err, post);
    });
};

exports.getByPostId = function(req, res, next){
    var postId = req.params['postId'];
    
    if(!postId){
        return jsonTool.object('No postId!');
    }
    
    CommentProxy.getByPostId(postId, function(err, post){
        return jsonTool.object(err, post);
    });
};

exports.delete = function(req, res, next){
    var _id = req.params['_id'];
    
    if(_id){
        return jsonTool.object('No Comment _id!');
    }
    
    CommentProxy.delete(_id, function(err, count){
        return jsonTool.object(err, count);
    });
}