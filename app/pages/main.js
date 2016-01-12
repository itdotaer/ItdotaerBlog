/**
 * Main
 */

var React = require('react');
var Posts = require('../components/posts');
var Editor = require('../components/editor');

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Main</h1>
                <Posts />
                <Editor />
            </div>
        );
    }
});

module.exports = Main;
