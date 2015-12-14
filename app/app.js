/**
 * Main
 */

// Css
require('./styles/index.less');

// React
var React = require('react');
var ReactDOM = require('react-dom');

// React-Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

// Header
var Header = require('./components/Header');

// Footer
var Footer = require('./components/Footer');

//App
var App = React.createClass({
    render: function(){
        return (
            <section>
                <Header />
                {this.props.children}
                <Footer />
            </section>
        );
    }
});

//Main
var Main = React.createClass({
    render: function(){
        return (
            <h1>Main</h1>
        );
    }
});

//About
var About = React.createClass({
    render: function(){
        return (
            <h1>About</h1>
        );
    }
});

//Route
var routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Main },
        childRoutes: [
            { path: 'about', component: About },
            { path: '*', component: Main }
        ]
    }
];

//Render
ReactDOM.render(
    <Router routes={routeConfig} />,
    document.getElementById('app')
    // document.body
);
