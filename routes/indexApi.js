/**
 * Api routes
 */

 var express = require('express');
 var router = express.Router();

 //User Api Controller
 var User = require('../api/user');
 //Post Api Controller
 var Post = require('../api/post');
 //Comment Api Controller
 var Comment = require('../api/comment');

 router.get('/posts', Post.get);
 router.post('/login', User.login);


 module.exports = router;
