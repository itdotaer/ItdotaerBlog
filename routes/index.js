/**
 * View related routes
 */

var express = require('express');
var router = express.Router();
var appInfo = require('../config').appInfo;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: appInfo.appName, shortDes: appInfo.shortDescription });
});

module.exports = router;
