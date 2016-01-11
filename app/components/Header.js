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
 var Navbar = ReactRootstrap.Navbar;
 var Nav = ReactRootstrap.Nav;
 var NavItem = ReactRootstrap.NavItem;
 var NavDropdown = ReactRootstrap.NavDropdown;
 var MenuItem = ReactRootstrap.MenuItem;

 var appInfo = require('../../config').appInfo;

 var Header = React.createClass({
     render: function(){
         return (
             <header>
                 <Navbar>
                    <Navbar.Header>
                      <Navbar.Brand>
                        <a href="#">{appInfo.appName}</a>
                      </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <li>
                            <Link to={'/'}>Index</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/nomatch'}>NoMatch</Link>
                        </li>
                    </Nav>
                  </Navbar>
             </header>
         );
     }
 });

 module.exports = Header;
