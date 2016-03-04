/**
 * Post Actions
 */

var Reflux = require('reflux');

var PostActions = Reflux.createActions([
    'getAll',
    'getById',
    'add'
]);

module.exports = PostActions;
