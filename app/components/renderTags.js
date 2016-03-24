/**
 * Render Tags
 */

 // React
 var React = require('react');
 //React Router
 var ReactRouter = require('react-router');
 var Link = ReactRouter.Link;
 // Reflux
 var Reflux = require('reflux');
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var RenderTags = React.createClass({
    render: function(){
        var type = this.props.type || 'postDetailTags';
        return (
            <div className="list-top">
                {
                    type == 'postDetailTags' ? (
                        <i className="glyphicon glyphicon-tags"></i>
                    ) : (
                        ''
                    )
                }
                {
                    type == 'postDetailTags' ? (
                        this.props.tags.map(function(tag){
                            return (<Link to={'/posts/tags/' + tag.tagName} className="tag">{tag.tagName}</Link>);
                        })
                    ) : (
                        this.props.tags.map(function(tag){
                            return (<Link to={'/posts/tags/' + tag} className="tag">{tag}</Link>);
                        })
                    )
                }
            </div>
        );
    }
});

module.exports = RenderTags;
