/**
 * Comment Proxy
 */

var models = require('../models');
var Comment = models.Comment;

exports.add = function(email, content, callback){
    var comment = new Comment({
      email: email,
      content: content
    });

    comment.save(callback);
};

exports.get = function(email, index, size, callback){
    Comment.find({ email: email }).limit(size).skip((index + 1) * size).exec(callback)
};

exports.getById = function(id, callback){
    Comment.findById({ _id: id }, callback);
};

exports.delete = function(id, callback)(
    Comment.remove({ _id: id }, callback);
);
