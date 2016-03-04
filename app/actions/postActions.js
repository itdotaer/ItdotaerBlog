/**
 * Post Actions
 */

var Reflux = require('reflux');

var PostActions = Reflux.createActions([
    'getAll',
    'getById',
    'deleteById',
    'add'
]);

module.exports = PostActions;
