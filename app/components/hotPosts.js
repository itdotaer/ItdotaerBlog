/**
 * View Hot Posts
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var NotificationActions = require('../actions/notificationActions');

var HotPosts = React.createClass({
    render: function(){
        return (
            <div>
                <ReactBootstrap.Panel collapsible defaultExpanded header="Panel heading">
                    Some default panel content here.
                    <ReactBootstrap.ListGroup fill>
                      <ReactBootstrap.ListGroupItem>Item 1</ReactBootstrap.ListGroupItem>
                      <ReactBootstrap.ListGroupItem>Item 2</ReactBootstrap.ListGroupItem>
                      <ReactBootstrap.ListGroupItem>&hellip;</ReactBootstrap.ListGroupItem>
                    </ReactBootstrap.ListGroup>
                    Some more panel content here.
                </ReactBootstrap.Panel>
            </div>
        );
    }
});

module.exports = HotPosts;
