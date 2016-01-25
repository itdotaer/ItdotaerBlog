var React = require('react');
// React-Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

//App Page
var App = require('./pages/app');
//Main Page
var Main = require('./pages/main');
//About Page
var About = require('./pages/about');
//Login
var Login = require('./pages/login');

//Route
var routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Main },
        childRoutes: [
            { path: 'login', component: Login },
            { path: 'about', component: About },
            { path: '*', component: Main }
        ]
    }
];

var routes = (
    <Router routes={routeConfig} />
);

module.exports = routes;
