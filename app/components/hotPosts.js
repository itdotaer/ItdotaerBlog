/**
 * View Hot Posts
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

var NotificationActions = require('../actions/notificationActions');

var HotPosts = React.createClass({
    render: function(){
        return (
            <div>
                <ReactRootstrap.Panel collapsible defaultExpanded header="Panel heading">
                    Some default panel content here.
                    <ReactRootstrap.ListGroup fill>
                      <ReactRootstrap.ListGroupItem>Item 1</ReactRootstrap.ListGroupItem>
                      <ReactRootstrap.ListGroupItem>Item 2</ReactRootstrap.ListGroupItem>
                      <ReactRootstrap.ListGroupItem>&hellip;</ReactRootstrap.ListGroupItem>
                    </ReactRootstrap.ListGroup>
                    Some more panel content here.
                </ReactRootstrap.Panel>
            </div>
        );
    }
});

module.exports = HotPosts;
