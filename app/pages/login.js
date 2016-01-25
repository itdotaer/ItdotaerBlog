/**
 * Login Page
 */

var React = require('react');
// Header
var UserLogin = require('../components/userLogin');
// Footer
var Footer = require('../components/footer');
//Login
var Login = React.createClass({
    render: function(){
     return (
         <UserLogin />
     );
    }
});

module.exports = Login;
