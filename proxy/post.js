/**
 * Post Proxy
 */
var sortTags = require('../common/common').sortTags;

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

exports.getPosts = function(type, size, callback){
    switch (type) {
        case 'byViewNum':
            Post.find().limit(size).sort({pv: -1}).limit(size).exec(callback);
            break;
        case 'byCommentNum':
            Post.find().limit(size).sort({commentNum: -1}).limit(size).exec(callback);
            break;
        default:
            var total = -1;
            Post.count(function(err, count){
                if(err){
                    return callback(err);
                }

                total = count;
            });

            //随机生成文章
            var randomSkip = Math.ceil(Math.random() * total);
            Post.find().limit(size).sort({updatedAt: -1}).limit(size).skip(randomSkip).exec(callback);
    }
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

    var update = post;
    Post.update(conditions, update, callback);
};

exports.getTags = function(callback){
    var tags = [];

    Post.find(null).sort({updatedAt: -1}).exec(function(err, posts){
        if(err){
            return callback(err, null);
        }

        posts.forEach(function(post){
            if(post.tags && post.tags.length > 0){
                tags = sortTags(tags, post.tags);
            }
        });

        return callback(null, tags);
    });
};

exports.getPostsByTag = function(tag, index, size, callback){
    Post.find({tags: {$elemMatch: {tagName: tag}}})
    .sort({updatedAt: -1}).exec(callback);
};

exports.getPostTotalByTag = function(tag, callback){
    Post.count({tags: {$elemMatch: {tagName : tag}}}, callback);
};

exports.updatePv = function(post, callback){
    var conditions = { _id: post._id };
    delete post._id;
    delete post.createdAt;
    delete post.createdBy;
    delete post.updatedAt;
    delete post.updatedBy;
    delete post.tags;

    post.pv += 1;

    var update = post;
    Post.update(conditions, update, callback);
};
