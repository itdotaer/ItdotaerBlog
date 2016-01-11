/**
 * Main
 */

var React = require('react');
var Posts = require('../components/posts');

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Main</h1>
                <Posts />
            </div>
        );
    }
});

module.exports = Main;
