// Main
var React = require('react');
var ReactRouter = require('react-router');
var ReactRootstrap = require('react-bootstrap');

var DemoComponent = React.createClass({
    render: function(){
        return (
            <div className="demo-class">
                <header>
                    <h1>Title Header</h1>
                </header>
                <div className="content">
                    Content
                </div>
                <footer>
                    Footer
                </footer>
            </div>
        );
    }
});

React.render(
    <DemoComponent />,
    document.getElementById('content')
);
