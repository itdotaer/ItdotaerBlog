/**
 * Pagination
 */

var React = require('react');
var Reflux = require('reflux');

// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var PostActions = require('../actions/postActions');

var AdvancedPagination = React.createClass({
  getInitialState() {
    return {
      activePage: 1,
      size: 6,
      maxButtons: 5
    };
  },
  getPosts: function(){
      var tag = this.props.tag;
      if(!tag){
          PostActions.get(this.state.activePage, this.state.size);
      }else{
          PostActions.getPostsByTag(tag, this.state.activePage, this.state.size)
      }

  },
  handleSelect(event, selectedEvent) {
      var data = this.state;
      data.activePage = selectedEvent.eventKey;
      this.setState(data);

      this.getPosts();
  },
  componentDidMount: function(){
      this.getPosts();
  },
  render: function() {
      var items = Math.ceil(this.props.total/this.state.size);
      return (
          <div className="pagination-center">
              <ReactBootstrap.Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={items}
                maxButtons={this.state.maxButtons}
                activePage={this.state.activePage}
                onSelect={this.handleSelect} />
          </div>
      );
  }
});

module.exports = AdvancedPagination;
