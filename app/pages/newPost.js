/**
 * New Post
 */

var React = require('react');
var Reflux = require('reflux');

var NotificationActions = require('../actions/notificationActions');

// Editor
var Editor = require('../components/editor');
var EditorActions = require('../actions/editorActions');
var EditorStore = require('../stores/editorStore');

// Post
var PostActions = require('../actions/postActions');

var NewPostComponent = require('../components/newPost');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var NewPost = React.createClass({
    render: function(){
        return (
            <div>
                <NewPostComponent params={this.props.params}/>
            </div>
        );
    }
});

module.exports = NewPost;
