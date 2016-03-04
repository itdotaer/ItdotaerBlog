/**
 * Login Actions
 */

var Reflux = require('reflux');

var LoginActions = Reflux.createActions([
    'login',
    'logout',
    'checkIfLogin'
]);

module.exports = LoginActions;
