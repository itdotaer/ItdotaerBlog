/**
 * Detail Post
 */

var React = require('react');
var Reflux = require('reflux');

// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var NotificationActions = require('../actions/notificationActions');

// Post
var PostStore = require('../stores/postStore');
var PostActions = require('../actions/postActions');

// User login
var UserLoginStore = require('../stores/userLoginStore');
var UserLoginActions = require('../actions/userLoginActions');

// Post actions
var PostAction = require('./postAction');

//Showdown
var showdown  = require('showdown'),
    converter = new showdown.Converter();

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var DetailPost = React.createClass({
    mixins:[
        Reflux.listenTo(PostStore, 'onPostsChange'),
        Reflux.listenTo(UserLoginStore, 'isLogin')
    ],
    getInitialState: function(){
        return {
            isLogin: false,
            post: null
        };
    },
    onPostsChange: function(resData){
        var data = this.state;

        if(resData.posts.length > 0){
            data.post = resData.posts[0];
        }

        this.setState(data);
    },
    isLogin: function(isLogin){
        var data = this.state;

        data.isLogin = isLogin;

        this.setState(data);
    },
    componentDidMount: function(){
        //Get post information
        if(isDebug) console.log('PostId:', this.props.params.id);
        PostActions.getById(this.props.params.id);

        // Check if login
        UserLoginActions.checkIfLogin();
    },
    render: function(){
        return (
            <div>
                {
                    this.state.post ?
                    (
                        <div className="post">
                            <h1 className="title">{this.state.post ? this.state.post.title : ''}</h1>
                            <div className="meta-top">
                                <span>阅读 {this.state.post ? this.state.post.pv : ''}</span>
                                <span>创建 {this.state.post ? (new Date(this.state.post.createdAt)).toDateString() : ''}</span>
                                <span>修改 {this.state.post ? (new Date(this.state.post.updatedAt)).toDateString() : ''}</span>
                            </div>
                            <PostAction isLogin={this.state.isLogin} id={this.state.post._id} />
                            <div className="content"
                                dangerouslySetInnerHTML={{__html: this.state.post ? converter.makeHtml(this.state.post.content) : ''}}></div>
                        </div>
                    ):(
                        <h2>Loading!</h2>
                    )
                }
            </div>
        );
    }
});

module.exports = DetailPost;
