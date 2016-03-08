/**
 * Tags
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var NotificationActions = require('../actions/notificationActions');

var Tags = React.createClass({
    render: function(){
        return (
            <div>
                <ReactBootstrap.Panel header="Tags">
                  Tags 1 | Tags 2
                </ReactBootstrap.Panel>
            </div>
        );
    }
});

module.exports = Tags;
