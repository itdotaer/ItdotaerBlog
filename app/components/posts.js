/**
 * Posts
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
 //React Router
 var ReactRouter = require('react-router');
 var Link = ReactRouter.Link;
// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

var PostActions = require('../actions/postActions');
var PostStore = require('../stores/postStore');
var NotificationActions = require('../actions/notificationActions');

//RenderTags
var RenderTags = require('./renderTags');

var Posts = React.createClass({
    mixins:[
        Reflux.listenTo(PostStore, 'onPostsChange'),
    ],
    getInitialState: function(){
        return {};
    },
    onPostsChange: function(data){
        this.setState(data);
    },
    componentDidMount: function(){
        PostActions.getAll();
    },
    render: function(){
        return (
            <ul className="post-list">
                {
                    this.state.hasOwnProperty('posts') && this.state.hasOwnProperty('total') ?
                    (
                        this.state.posts.map(function(post){
                            return (
                                <li className="post">
                                    <RenderTags tags={post.tags}/>
                                    <h4 className="title">
                                        <Link to={'/post/' + post._id}>{post.title}</Link>
                                    </h4>
                                    <div className="list-footer">
                                        <Link to={'/post/' + post._id}>阅读 {post.pv} </Link>
                                        <span> · 创建 {(new Date(post.createdAt)).toDateString()}</span>
                                        <span> · 修改 {(new Date(post.updatedAt)).toDateString()}</span>
                                    </div>
                                </li>
                            );
                        })
                    ):(
                        <h2>Loading!</h2>
                    )
                }
            </ul>
        );
    }
});

module.exports = Posts;
