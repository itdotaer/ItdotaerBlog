/**
 * Api routes
 */

 //User Api Controller
 //Post Api Controller
 var Post = require('../api/post');
 //Comment Api Controller
 var express = require('express');
 var router = express.Router();

 router.get('/posts', Post.get);

 module.exports = router;
