/**
 * Api routes
 */

var express = require('express');
var router = express.Router();

var auth = require('../middlewares/auth');

// User Api Controller
var User = require('../api/user');
// Post Api Controller
var Post = require('../api/post');
// Comment Api Controller
var Comment = require('../api/comment');

// Post
router.get('/posts', Post.get);
router.get('/posts/getPosts', Post.getPosts);
router.get('/posts/tags', Post.getTags);
router.get('/posts/tags/:tag', Post.getPostsByTag);
router.post('/posts', auth.loginRequired, Post.add);
router.get('/posts/:id', Post.getById);
router.put('/posts/:id', auth.loginRequired, Post.update);
router.delete('/posts/:id', auth.loginRequired, Post.delete);

// Login
router.post('/login', User.login);


module.exports = router;
