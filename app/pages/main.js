/**
 * Main
 */

var React = require('react');
var Posts = require('../components/posts');
var Editor = require('../components/editor');

var Main = React.createClass({
    render: function(){
        return (
            <div className='container'>
                <Posts />
            </div>
        );
    }
});

module.exports = Main;
