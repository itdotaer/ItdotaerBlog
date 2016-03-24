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

//isDebug
var isDebug = require('../../config').appInfo.isDebug;

var Comment = React.createClass({
    render: function(){
        return (
            <div>
                <ReactBootstrap.Panel collapsible defaultExpanded header='评论'>
                    <ReactBootstrap.ListGroup fill>
                        <ReactBootstrap.ListGroupItem>
                           评论一
                        </ReactBootstrap.ListGroupItem>
                        <ReactBootstrap.ListGroupItem>
                           评论二
                        </ReactBootstrap.ListGroupItem>
                    </ReactBootstrap.ListGroup>
                </ReactBootstrap.Panel>
                <Editor />
                <div className="post-actions">
                    <ReactBootstrap.Button bsStyle="info" onClick={this.submit}>提交</ReactBootstrap.Button>
                    <ReactBootstrap.Button bsStyle="warning" onClick={this.cancel}>取消</ReactBootstrap.Button>
                </div>
            </div>
        );
    }
});

module.exports = Comment;
