/**
 * Post Actions
 */

var React = require('react');
var Reflux = require('reflux');

var NotificationActions = require('../actions/notificationActions');


// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var PostActions = React.createClass({
    getInitialState: function(){
        return {
        };
    },
    render: function(){
        console.log('islogin', this.props.isLogin);
        return (
            <div>
                {
                    this.props.isLogin == true ? (
                        <div className="post-actions">
                            <ReactRootstrap.Button bsStyle="success">Edit</ReactRootstrap.Button>
                            <ReactRootstrap.Button bsStyle="danger">Delete</ReactRootstrap.Button>
                        </div>
                    ) : ('')
                }
            </div>
        );
    }
});

module.exports = PostActions;
