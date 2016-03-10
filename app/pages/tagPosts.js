/**
 * Main
 */

var React = require('react');
var TagPosts = require('../components/tagPosts');

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <TagPosts tag={this.props.params.tag}/>
            </div>
        );
    }
});

module.exports = Main;
