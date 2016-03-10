/**
 * Post Actions
 */

var Reflux = require('reflux');

var PostActions = Reflux.createActions([
    'get',
    'getPostsByTag',
    'getById',
    'deleteById',
    'add',
    'update'
]);

module.exports = PostActions;
