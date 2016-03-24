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
        return (
            <div>
                <DetailPostComponent params={this.props.params} />
                <Comment />
            </div>
        );
    }
});

module.exports = DetailPost;
