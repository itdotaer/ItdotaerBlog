/**
 * Detail Post
 */

var React = require('react');
var Reflux = require('reflux');

// Post
var DetailPostComponent = require('../components/detailPost');
// Comment
var Comment = require('../components/comment');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var DetailPost = React.createClass({
    render: function(){
        var postId = this.props.params.id;
        return (
            <div>
                <DetailPostComponent postId={postId} />
                <Comment postId={postId}/>
            </div>
        );
    }
});

module.exports = DetailPost;
