/**
 * Post Proxy
 */

var models = require('../models');
var Post = models.Post;
var Comment = models.Comment;

exports.add = function(userId, title, tags, content, callback){
    var post = new Post({
      title: title,
      tags: tags,
      content: content,
      pv: 0,
      createdBy: userId,
      updatedBy: userId
    });

    post.save(callback);
};

exports.get = function(title, index, size, callback){
    Post.find(title ? { title: title } : null).limit(size).skip((index - 1) * size)
    .sort({updatedAt: -1}).populate('createdBy').populate('updatedBy')
    .exec(callback);
};

exports.total = function(title, callback){
    Post.count(title ? {title: title} : null, callback);
};

exports.getById = function(id, callback){
    Post.findById({ _id: id }, callback);
};

exports.delete = function(id, callback){
    Post.remove({ _id: id }, callback);
};

exports.update = function(userId, post, callback){
    var conditions = { _id: post._id };
    delete post._id;
    delete post.createdAt;
    delete post.createdBy;

    post.updatedAt = new Date();
    post.updatedBy = userId;
    post.tags = post.tags.split(';');

    var update = post;
    Post.update(conditions, update, callback);
};
