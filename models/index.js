var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.dbConfig.address, {
    server: {poolSize: config.dbConfig.poolSize}
}, function(err){
    if(err){
        console.error('connect to %s error: ', config.dbConfig.address, err.message);
        process.exit(1);
    }
});

//models
require('./user');
require('./post');
require('./comment');

exports.User = mongoose.model('User');
exports.Comment = mongoose.model('Comment');
exports.Post = mongoose.model('Post');
