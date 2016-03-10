/**
 * Tag Posts
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
 //React Router
 var ReactRouter = require('react-router');
 var Link = ReactRouter.Link;
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var PostActions = require('../actions/postActions');
var PostStore = require('../stores/postStore');
var NotificationActions = require('../actions/notificationActions');

//RenderTags
var RenderTags = require('./renderTags');
//Pagination
var AdvancedPagination = require('./advancedPagination');

var TagPosts = React.createClass({
    mixins:[
        Reflux.listenTo(PostStore, 'onPostsChange'),
    ],
    getInitialState: function(){
        return {
            total: -1,
            posts: []
        };
    },
    onPostsChange: function(data){
        this.setState(data);
    },
    render: function(){
        return (
            <div>
                <ul className="post-list">
                    {
                        this.state.posts.length > 0 ?
                        (
                            this.state.posts.map(function(post){
                                return (
                                    <li className="post">
                                        <h4 className="title">
                                            <Link to={'/post/detail/' + post._id}>{post.title}</Link>
                                        </h4>
                                        <div className="list-footer">
                                            <Link to={'/post/detail/' + post._id}>阅读 {post.pv} </Link>
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
                <AdvancedPagination total={this.state.total}/>
            </div>
        );
    }
});

module.exports = TagPosts;
