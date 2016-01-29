/**
 * Main
 */

var React = require('react');
var Posts = require('../components/posts');
var Tags = require('../components/tags');
var HotPosts = require('../components/hotPosts');

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <div className="main-left">
                    <Posts />
                </div>
                <div className="main-right">
                    <HotPosts />
                    <HotPosts />
                    <Tags />
                </div>
            </div>
        );
    }
});

module.exports = Main;
