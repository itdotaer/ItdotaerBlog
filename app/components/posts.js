var React = require('react');
var Reflux = require('reflux');
var PostActions = require('../actions/postActions');
var PostStore = require('../stores/postStore');
var EditorStore = require('../stores/editorStore');
var Editor = require('../components/editor');
var NotificationActions = require('../actions/notificationActions');
var Notification = require('../components/notification');

var base = require('../requests/base');

var Posts = React.createClass({
    mixins:[
        Reflux.listenTo(PostStore, 'onStatusChange'),
    ],
    getInitialState: function(){
        return {index: 0};
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
                Posts
            </div>
        );
    }
});

module.exports = Posts;
