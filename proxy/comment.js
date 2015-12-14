/**
 * Comment Proxy
 */

var models = require('../models');
var Comment = models.Comment;

exports.add = function(postId, email, content, callback){
    var comment = new Comment({
      email: email,
      content: content,
      postId: postId
    });

    comment.save(callback);
};

exports.get = function(postId, index, size, callback){
    Comment.find({ postId: postId }).limit(size).skip((index + 1) * size).exec(callback)
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
