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
      size: 5,
      maxButtons: 5
    };
  },
  handleSelect(event, selectedEvent) {
      var data = this.state;
      data.activePage = selectedEvent.eventKey;
      this.setState(data);
      PostActions.get(this.state.activePage, this.state.size);
  },
  componentDidMount: function(){
      PostActions.get(this.state.activePage, this.state.size);
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
