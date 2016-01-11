var React = require('react');
var Reflux = require('reflux');
var PostActions = require('../actions/postActions');
var PostStore = require('../stores/postStore');

var Posts = React.createClass({
    mixins:[Reflux.listenTo(PostStore, 'onStatusChange')],
    getInitialState: function(){
        return {total:0, posts: []};
    },
    onStatusChange: function(data){
        this.setState(data);
    },
    componentDidMount: function(){
        PostActions.getAll();
    },
    render: function(){
        return (
            <div>
                <p>Posts Info===> </p>
                <p>Total: {this.state.total},</p>
                <p>List:</p>
                <p>
                {this.state.posts.map(function(post){
                    return <h1>
                        {post.title} | {post.tag} | {post.des} | {post.content} | {post.createdBy.name} | {post.updatedBy.name}
                    </h1>;
                })}
                </p>
            </div>
        );
    }
});

module.exports = Posts;
