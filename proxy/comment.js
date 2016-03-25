/**
 * Comment Proxy
 */

var models = require('../models');
var Comment = models.Comment;

var PostProxy = require('../proxy').Post;

exports.add = function(postId, email, content, callback){
    var comment = new Comment({
      email: email,
      content: content,
      postId: postId
    });

    comment.save(function(err, cbComment){
        if(err){
            return callback(err);
        }

        //Add main post commentNum
        PostProxy.addCommentNum(postId, 1, function(err_1, cbUpdate){
            if(err_1){
                return callback(err_1);
            }

            //这里没有判断更新条数（如果需要，应该判断。）
            return callback(null, cbComment);
        });
    });
};

exports.get = function(postId, callback){
    Comment.find({ postId: postId }).sort({createdAt: -1}).exec(callback);
};

exports.total = function(postId, callback){
    Comment.count({postId: postId}, callback);
};

exports.getById = function(id, callback){
    Comment.findById({ _id: id }, callback);
};

exports.getByPostId = function(postId, callback){
    Comment.findById({ postId: postId }, callback);
};

exports.delete = function(id, callback){
    Comment.remove({ _id: id }, callback);
};
