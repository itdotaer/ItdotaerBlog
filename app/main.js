/**
 * Main
 */

// Css
require('./styles/index.less');

// ReactDOM
var ReactDOM = require('react-dom');
//Routes
var routes = require('./routes');

//Render
ReactDOM.render(
    routes,
    document.getElementById('app')
    // document.body
);
