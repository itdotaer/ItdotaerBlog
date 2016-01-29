/**
 * Posts
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

var PostActions = require('../actions/postActions');
var PostStore = require('../stores/postStore');
var NotificationActions = require('../actions/notificationActions');

var Posts = React.createClass({
    mixins:[
        Reflux.listenTo(PostStore, 'onStatusChange'),
    ],
    getInitialState: function(){
        return {};
    },
    onStatusChange: function(data){
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
                                    <p className="list-top">
                                        <a className="blue-link" target="_blank" href="#">{post.updatedBy.name}</a>
                                        <em>·</em>
                                        <span class="time">2天之前</span>
                                    </p>
                                    <h4 className="title">
                                        <a target="_blank" href="#">{post.title}</a>
                                    </h4>
                                    <div className="list-footer">
                                        <a target="_blank" href="/p/e4b8175395ce">阅读 {post.pv}</a>
                                        <a target="_blank" href="/p/e4b8175395ce#comments">· 评论 22</a>
                                        <span> · 喜欢 62</span>
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
