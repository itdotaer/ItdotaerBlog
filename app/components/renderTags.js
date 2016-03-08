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
        return (
            <div className="list-top">
                <i className="glyphicon glyphicon-tags"></i>
                {
                    this.props.tags.map(function(tag){
                        return (<Link to={'/tag/' + tag} className="tag">{tag}</Link>);
                    })
                }
            </div>
        );
    }
});

module.exports = RenderTags;
