/**
 * Main
 */

// Css
require('./styles/index.less');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ReactRootstrap = require('react-bootstrap');
var ButtonGroup = ReactRootstrap.ButtonGroup;
var Button = ReactRootstrap.Button;

var DemoComponent = React.createClass({
    render: function(){
        return (
            <ButtonGroup>
               <Button>Left</Button>
               <Button>Middle</Button>
               <Button>Right</Button>
             </ButtonGroup>
        );
    }
});

ReactDOM.render(
    <DemoComponent />,
    document.getElementById('content')
);
