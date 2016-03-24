/**
 * Classified Posts whith contain tags
 */

var React = require('react');
var Reflux = require('reflux');

var Posts = require('../components/posts');
var Tags = require('../components/tags');
var HotPosts = require('../components/hotPosts');

var ByViewNumPostActions = require('../actions/byViewNumPostActions');
var ByViewNumPostStore = require('../stores/byViewNumPostStore');

var ByCommentNumPostActions = require('../actions/byCommentNumPostActions');
var ByCommentNumPostStore = require('../stores/byCommentNumPostStore');

var ByRandomPostActions = require('../actions/byRandomPostActions');
var ByRandomPostStore = require('../stores/byRandomPostStore');

var ClassifiedPosts = React.createClass({
    mixins:[
        Reflux.listenTo(ByViewNumPostStore, 'onByViewNumPostsChange'),
        Reflux.listenTo(ByCommentNumPostStore, 'onByCommentNumPostsChange'),
        Reflux.listenTo(ByRandomPostStore, 'onByRandomPostsChange'),
    ],
    getInitialState: function(){
        return {
            byViewNumPosts: [],
            byCommentNumPosts: [],
            byRandomPosts: []
        };
    },
    onByViewNumPostsChange: function(resData){
        var data = this.state;
        data.byViewNumPosts = resData.posts;

        this.setState(data);
    },
    onByCommentNumPostsChange: function(resData){
        var data = this.state;
        data.byCommentNumPosts = resData.posts;

        this.setState(data);
    },
    onByRandomPostsChange: function(resData){
        var data = this.state;
        data.byRandomPosts = resData.posts;

        this.setState(data);
    },
    componentDidMount: function(){
        ByViewNumPostActions.get();
        ByCommentNumPostActions.get();
        ByRandomPostActions.get();
    },
    render: function(){
        return (
            <div>
                <HotPosts type="byViewNum" posts={this.state.byViewNumPosts}/>
                <HotPosts type="byCommentNum" posts={this.state.byCommentNumPosts}/>
                <HotPosts posts={this.state.byRandomPosts}/>
                <Tags />
            </div>
        );
    }
});

module.exports = ClassifiedPosts;
