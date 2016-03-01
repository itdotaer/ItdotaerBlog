/**
 * New Post
 */

var React = require('react');
var Reflux = require('reflux');

var NotificationActions = require('../actions/notificationActions');

// Editor
var Editor = require('../components/editor');
var EditorActions = require('../actions/editorActions');
var EditorStore = require('../stores/editorStore');

// Post
var PostActions = require('../actions/postActions');

// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var NewPost = React.createClass({
    mixins: [
        Reflux.listenTo(EditorStore, 'onValueChange')
    ],
    getInitialState: function(){
        return {
            title: '',
            tags: '',
            description: '',
            content: ''
        };
    },
    onValueChange: function(value){
        var data = this.state;
        data.content = value;

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
    changeDescription: function(event){
        var data = this.state;
        data.description = event.target.value;

        this.setState(data);
    },
    submit: function(){
        if(isDebug) console.log('===>New Post:', this.state);

        //Split tags to array
        var data = this.state;

        if(data.tags instanceof String){
            data.tags = data.tags.split(';');
        }

        //Submit
        PostActions.add(data);
    },
    reset: function(){
        if(isDebug) console.log('==>click reset');
        this.setState({
            title: '',
            tags: '',
            description: '',
            content: ''
        });

        EditorActions.setValue('jodfjiosdjfosdfj')
    },
    render: function(){
        return (
            <div>
                <h1>New Post</h1>
                <form className="form-horizontal">
                    <ReactRootstrap.Input type="text" label="Title:" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.changeTitle} value={this.state.title}/>
                    <ReactRootstrap.Input type="text" label="Tags:" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.changeTags} value={this.state.tags}/>
                    <ReactRootstrap.Input type="textarea" label="Description:" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.changeDescription} value={this.state.description}/>

                    <h2>Content</h2>
                    <Editor />

                    <input type="button" className="btn btn-info btn-padding btn-margin" value="Submit" onClick={this.submit}/>
                    <input type="button" className="btn btn-warning btn-padding" value="Cancel" onClick={this.reset}/>
                </form>
            </div>
        );
    }
});

module.exports = NewPost;
