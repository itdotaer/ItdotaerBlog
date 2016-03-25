/**
 * Comment
 */

// React
var React = require('react');
// Reflux
var Reflux = require('reflux');
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');
// Editor
var Editor = require('../components/editor');
var EditorActions = require('../actions/editorActions');
var EditorStore = require('../stores/editorStore');

// Comment
var CommentStore = require('../stores/commentStore');
var CommentActions = require('../actions/commentActions');

//Showdown
var showdown  = require('showdown'),
    converter = new showdown.Converter();

//isDebug
var isDebug = require('../../config').appInfo.isDebug;

var Comment = React.createClass({
    mixins:[
        Reflux.listenTo(CommentStore, 'onCommentsChange'),
        Reflux.listenTo(EditorStore, 'onValueChange')
    ],
    getInitialState: function(){
        return {
            total: 0,
            comments: [],
            comment: {
                postId: '',
                email: '',
                emailBsStyle: 'success',
                content: '',
                submitDisabled: true
            } //New comment
        };
    },
    onCommentsChange: function(data){
        this.setState(data);
    },
    onValueChange: function(value){
        var data = this.state;
        data.comment.content = value;
        this.setState(data);

        this.checkIfSubmitDisabled();
    },
    changeEmail: function(event){
        var data = this.state;
        data.comment.email = event.target.value;

        //Validate email
        var matched = data.comment.email.match(/^\w+@\w+\.\w+$/);
        if(matched && matched.length > 0){
            data.comment.emailBsStyle = 'success';
        }else{
            data.comment.emailBsStyle = 'error';
        }
        this.setState(data);

        this.checkIfSubmitDisabled();
    },
    submit: function(){
        var postId = this.state.comment.postId;
        var comment = this.state.comment;

        if(isDebug) console.log('---->New Comment', comment);

        var that = this;
        CommentActions.add(postId, comment, function(err, cbComment){
            that.reset();
        });
    },
    reset: function(){
        var data = this.state;
        data.comment.email = '';
        data.comment.content = '';

        //清空Editor的值
        window.simplemde.value('');

        this.setState(data);
    },
    checkIfSubmitDisabled: function(){
        var data = this.state;
        if(data.comment.email != ''
            && data.comment.emailBsStyle == 'success'
            && data.comment.content != ''){
                data.comment.submitDisabled = false;
            }else{
                data.comment.submitDisabled = true;
            }

        this.setState(data);
    },
    componentDidMount: function(){
        var postId = this.props.postId;
        if(isDebug) console.log('--->comment', postId)

        var data = this.state;
        data.comment.postId = postId;

        this.setState(data);

        CommentActions.getByPostId(postId);
    },
    render: function(){
        var header = '评论(' + this.state.total + ')';
        return (
            <div>
                <ReactBootstrap.Panel collapsible defaultExpanded header={header}>
                    <ReactBootstrap.ListGroup fill>
                        {
                            this.state.comments.map(function(comment){
                                return (
                                    <ReactBootstrap.ListGroupItem dangerouslySetInnerHTML={{__html: converter.makeHtml(comment.content)}}>
                                    </ReactBootstrap.ListGroupItem>
                                );
                            })
                        }
                    </ReactBootstrap.ListGroup>
                </ReactBootstrap.Panel>
                <form>
                    <ReactBootstrap.Input type="email" bsStyle={this.state.comment.emailBsStyle} label="邮箱"
                        placeholder="请输入有效的邮箱地址" onChange={this.changeEmail} value={this.state.comment.email} hasFeedback/>
                    <Editor />
                    <div className="post-actions">
                        <ReactBootstrap.Button bsStyle="info" onClick={this.submit} disabled={this.state.comment.submitDisabled}>提交</ReactBootstrap.Button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Comment;
