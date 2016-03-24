/**
 * Tags
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var TagActions = require('../actions/tagActions');
var TagStore = require('../stores/tagStore');
var NotificationActions = require('../actions/notificationActions');

//RenderTags
var RenderTags = require('./renderTags');

var Tags = React.createClass({
    mixins:[
        Reflux.listenTo(TagStore, 'onTagsChange'),
    ],
    getInitialState: function(){
        return {tags:[]};
    },
    onTagsChange: function(data){
        this.setState(data);
    },
    componentDidMount: function(){
        TagActions.get();
    },
    render: function(){
        return (
            <div>
                <ReactBootstrap.Panel collapsible defaultExpanded header="标签">
                    <RenderTags type="pureTags" tags={this.state.tags}/>
                </ReactBootstrap.Panel>
            </div>
        );
    }
});

module.exports = Tags;
