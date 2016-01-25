/**
 * Header
 */

// React
var React = require('react');

//React-Router
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

 // React-Bootstrap
 var ReactRootstrap = require('react-bootstrap');

 var appInfo = require('../../config').appInfo;

 var Header = React.createClass({
     render: function(){
         return (
             <header>
                 <ReactRootstrap.Navbar>
                    <ReactRootstrap.Navbar.Header>
                      <ReactRootstrap.Navbar.Brand>
                        <a href="#">{appInfo.appName}</a>
                      </ReactRootstrap.Navbar.Brand>
                    </ReactRootstrap.Navbar.Header>
                    <ReactRootstrap.Nav>
                        <li>
                            <Link to={'/'}>Index</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ReactRootstrap.Nav>
                  </ReactRootstrap.Navbar>
             </header>
         );
     }
 });

 module.exports = Header;
