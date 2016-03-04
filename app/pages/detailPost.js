/**
 * Detail Post
 */

var React = require('react');
var Reflux = require('reflux');

// Post
var PostActions = require('../actions/postActions');

var DetailPostComponent = require('../components/detailPost');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var DetailPost = React.createClass({
    render: function(){
        return (
            <div>
                <DetailPostComponent params={this.props.params} />
            </div>
        );
    }
});

module.exports = DetailPost;
