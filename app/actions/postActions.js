/**
 * Post Actions
 */

var Reflux = require('reflux');

var PostActions = Reflux.createActions([
    'get',
    'getPostsByTag',
    'getTags',
    'getById',
    'deleteById',
    'add',
    'update'
]);

module.exports = PostActions;
