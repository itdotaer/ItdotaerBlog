var React = require('react');
var Reflux = require('reflux');
var PostActions = require('../actions/postActions');
var PostStore = require('../stores/postStore');
var EditorStore = require('../stores/editorStore');
var Editor = require('../components/editor');

var base = require('../requests/base');

var Posts = React.createClass({
    mixins:[
        Reflux.listenTo(PostStore, 'onStatusChange'),
        Reflux.listenTo(EditorStore, 'onValueChange')
    ],
    getInitialState: function(){
        return {total:0, posts: []};
    },
    onStatusChange: function(data){
        this.setState(data);
    },
    onValueChange: function(value){
        console.log('ValueChange:', value);
        base.auth('harry', '123456');
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
                <Editor />
                </p>
            </div>
        );
    }
});

module.exports = Posts;
