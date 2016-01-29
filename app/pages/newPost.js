/**
 * New Post
 */

var React = require('react');
var Editor = require('../components/editor');

var NewPost = React.createClass({
    render: function(){
        return (
            <div>
                <h1>New Post</h1>
                <Editor />
            </div>
        );
    }
});

module.exports = NewPost;
