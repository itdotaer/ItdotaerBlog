/**
 * Main
 */

var React = require('react');
var Posts = require('../components/posts');
var Tags = require('../components/tags');
var ClassifiedPosts = require('../components/ClassifiedPosts');

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <div className="main-left">
                    <Posts />
                </div>
                <div className="main-right">
                    <ClassifiedPosts />
                </div>
            </div>
        );
    }
});

module.exports = Main;
