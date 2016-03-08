/**
 * New Post
 */

var React = require('react');
var Reflux = require('reflux');

var history = require('../history');

var NotificationActions = require('../actions/notificationActions');

// Editor
var Editor = require('../components/editor');
var EditorActions = require('../actions/editorActions');
var EditorStore = require('../stores/editorStore');

// Post
var PostActions = require('../actions/postActions');
var PostStore = require('../stores/postStore');

// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var NewPost = React.createClass({
    mixins: [
        Reflux.listenTo(EditorStore, 'onValueChange'),
        Reflux.listenTo(PostStore, 'onPostsChange')
    ],
    getInitialState: function(){
        return {
            _id: -1,
            title: '',
            tags: '',
            content: ''
        };
    },
    onValueChange: function(value){
        var data = this.state;
        data.content = value;

        this.setState(data);
    },
    onPostsChange: function(resData){
        var data = this.state;

        if(resData.posts.length > 0){
            var post = resData.posts[0];
            data._id = post._id;
            data.title = post.title;
            data.tags = post.tags.join(';');
            data.content = post.content;

            //清空Editor的值
            window.simplemde.value(data.content);
        }

        this.setState(data);
    },
    changeTitle: function(event){
        var data = this.state;
        data.title = event.target.value;

        this.setState(data);
    },
    changeTags: function(event){
        var data = this.state;
        data.tags = event.target.value;

        this.setState(data);
    },
    submit: function(){
        if(isDebug) console.log('===>New Post:', this.state);

        if(this.state._id == -1){
            //Submit
            PostActions.add(this.state);
        }else{
            PostActions.update(this.state);
        }
    },
    reset: function(){
        this.setState({
            title: '',
            tags: '',
            content: ''
        });

        EditorActions.setValue('');
        //清空Editor的值
        window.simplemde.value('');
    },
    cancel: function(){
        history.goBack();
    },
    componentDidMount: function(){
        this.reset();
        //Get post information
        if(isDebug) console.log('PostId:', this.props.params.id);
        if(this.props.params.id && this.props.params.id != -1){
            PostActions.getById(this.props.params.id);
        }
    },
    render: function(){
        var isAdd = this.state._id == -1 ? true : false;

        return (
            <div>
                <h1>
                    {
                        isAdd == true ? ('New Post') : ('Edit Post')
                    }
                </h1>
                <form className="form-horizontal">
                    <ReactBootstrap.Input type="text" label="Title:" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.changeTitle} value={this.state.title}/>
                    <ReactBootstrap.Input type="text" label="Tags:" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.changeTags} value={this.state.tags}/>

                    <h2>Content</h2>
                    <Editor />

                    <div className="post-actions">
                        <ReactBootstrap.Button bsStyle="info" onClick={this.submit}>提交</ReactBootstrap.Button>
                        {
                            isAdd == true ? (
                                <ReactBootstrap.Button bsStyle="warning" onClick={this.reset}>重置</ReactBootstrap.Button>
                            ) : (
                                <ReactBootstrap.Button bsStyle="warning" onClick={this.cancel}>取消</ReactBootstrap.Button>
                            )
                        }
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = NewPost;
