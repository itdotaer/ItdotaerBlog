/**
 * View Hot Posts
 */

 // React
 var React = require('react');
 // Reflux
 var Reflux = require('reflux');
 //React Router
 var ReactRouter = require('react-router');
 var Link = ReactRouter.Link;
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var NotificationActions = require('../actions/notificationActions');

var HotPosts = React.createClass({
    render: function(){
        //byViewNums or byComments
        var type = this.props.type;
        var header = '随机阅读';

        if(type == 'byViewNum'){
            header = '阅读最多';
        }else if(type == 'byCommentNum'){
            header = '评论最多';
        }

        var posts = this.props.posts;
        if(!posts){
            posts = [];
        }

        return (
            <div>
                <ReactBootstrap.Panel collapsible defaultExpanded header={header}>
                    <ReactBootstrap.ListGroup fill>
                      {
                          posts.map(function(post){
                             return (
                                 <ReactBootstrap.ListGroupItem>
                                    <Link to={'/post/detail/' + post._id}>{post.title}</Link>
                                 </ReactBootstrap.ListGroupItem>
                             );
                          })
                      }
                    </ReactBootstrap.ListGroup>
                </ReactBootstrap.Panel>
            </div>
        );
    }
});

module.exports = HotPosts;
