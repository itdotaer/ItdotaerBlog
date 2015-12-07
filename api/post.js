/**
 * Post Api Controller
 */
var PostProxy = require('../proxy').Post;
var auth = require('../middleware/auth');
var jsonTool = require('../common/jsonTool');

exports.add = function(req, res, next){
    var post = req.body;

    var loginUser = auth.getLoginUser();

    PostProxy.add(loginUser._id, post.title,
        post,tags, post.des, post.content,
        function(err, user){
            return jsonTool.object(err, user);
        });
};

exports.get = function(req, res, next){
    
};
