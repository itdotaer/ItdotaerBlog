/**
 * Comment Actions
 */

var Reflux = require('reflux');

var CommentActions = Reflux.createActions([
    'getByPostId',
    'add'
]);

module.exports = CommentActions;
