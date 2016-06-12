/**
 * About
 */
var React = require('react');

<<<<<<< HEAD
var About = React.createClass({
    render: function(){
        return (
            <div>
                About Me
            </div>
=======
var AboutComponent = require('../components/about');

var About = React.createClass({
    render: function(){
        return (
            <AboutComponent />
>>>>>>> master
        );
    }
});

module.exports = About;
