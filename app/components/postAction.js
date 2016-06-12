/**
 * Post Actions
 */

var React = require('react');
var Reflux = require('reflux');

//React Router
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NotificationActions = require('../actions/notificationActions');
var PostActions = require('../actions/postActions');

// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

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
        if(isDebug) console.log('islogin', this.props.isLogin);
        return (
            <div className="row">
                {
                    this.props.isLogin == true ? (
                        <div className="col-md-2 col-md-offset-10 post-actions">
                            <a className="btn btn-success" href={"/#/post/edit/"+ this.props.id}>修改</a>
                            <a className="btn btn-danger" href="javascript:void(0);" onClick={this.delete}>删除</a>
                        </div>
                    ) : ('')
                }
            </div>
        );
    }
});

module.exports = PostAction;
