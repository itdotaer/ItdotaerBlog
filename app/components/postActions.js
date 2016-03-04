/**
 * Post Actions
 */

var React = require('react');
var Reflux = require('reflux');

var NotificationActions = require('../actions/notificationActions');
var PostActions = require('../actions/postActions');

// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var PostAction = React.createClass({
    getInitialState: function(){
        return {
        };
    },
    delete: function(){
        if(confirm("Are you sure to delete this post?")){
            PostActions.deleteById(this.props.id);
        }
    },
    render: function(){
        console.log('islogin', this.props.isLogin);
        return (
            <div>
                {
                    this.props.isLogin == true ? (
                        <div className="post-actions">
                            <ReactRootstrap.Button bsStyle="success">Edit</ReactRootstrap.Button>
                            <ReactRootstrap.Button bsStyle="danger" onClick={this.delete}>Delete</ReactRootstrap.Button>
                        </div>
                    ) : ('')
                }
            </div>
        );
    }
});

module.exports = PostAction;
