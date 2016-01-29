/**
 * Tags
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

var NotificationActions = require('../actions/notificationActions');

var Tags = React.createClass({
    render: function(){
        return (
            <div>
                <ReactRootstrap.Panel header="Tags">
                  Tags 1 | Tags 2
                </ReactRootstrap.Panel>
            </div>
        );
    }
});

module.exports = Tags;
