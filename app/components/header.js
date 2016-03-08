/**
 * Header
 */

// React
var React = require('react');
// Reflux
var Reflux = require('reflux');
// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

var HeaderStore = require('../stores/headerStore');
var HeaderActions = require('../actions/headerActions');

var appInfo = require('../../config').appInfo;

var Header = React.createClass({
     mixins:[Reflux.listenTo(HeaderStore, 'getMenu')],
     getInitialState: function(){
         return {};
     },
     getMenu: function(menu){
         this.setState(menu);
     },
     handleMainMenuSelect: function(selectedKey){
         HeaderActions.selectMenu('mainMenu', selectedKey);
     },
     handleUserMenuSelect: function(selectedKey){
         HeaderActions.selectMenu('userMenu', selectedKey);
     },
     handleLoginUserMenuSelect: function(event, selectedKey){
         event.preventDefault();
         HeaderActions.selectMenu('userMenu', selectedKey);
     },
     componentDidMount: function(){
         HeaderActions.get();
     },
     render: function(){
         return (
             <header>
                 <ReactBootstrap.Navbar>
                    <ReactBootstrap.Navbar.Header>
                      <ReactBootstrap.Navbar.Brand>
                        <a href="#">{appInfo.appName}</a>
                      </ReactBootstrap.Navbar.Brand>
                    </ReactBootstrap.Navbar.Header>
                    <ReactBootstrap.Nav activeKey={this.state.hasOwnProperty('mainMenu') ? this.state.mainMenu.activeKey : -1} onSelect={this.handleMainMenuSelect} pullLeft={true}>
                        {
                            this.state.hasOwnProperty('mainMenu') ? (
                                this.state.mainMenu.items.map(function(item){
                                    return (
                                        <ReactBootstrap.NavItem key={item.id} eventKey={item.id}>{item.name}</ReactBootstrap.NavItem>
                                    );
                                })
                            ) : null
                        }
                     </ReactBootstrap.Nav>
                     {
                         //Not login menu
                         this.state.hasOwnProperty('userMenu') && !this.state.userMenu.user ? (
                             <ReactBootstrap.Nav activeKey={this.state.hasOwnProperty('userMenu') ? this.state.userMenu.activeKey : -1} onSelect={this.handleUserMenuSelect} pullRight={true}>
                             {
                                 this.state.userMenu.items.map(function(item){
                                     return (
                                         <ReactBootstrap.NavItem key={item.id} eventKey={item.id}>{item.name}</ReactBootstrap.NavItem>
                                     );
                                 })
                             }
                             </ReactBootstrap.Nav>
                         ) : null
                     }
                     {
                         //Login menu
                         this.state.hasOwnProperty('userMenu') && this.state.userMenu.user ? (
                             <ReactBootstrap.Nav onSelect={this.handleLoginUserMenuSelect} pullRight={true}>
                                 {
                                     <ReactBootstrap.NavDropdown eventKey="0" title={this.state.userMenu.user.name} id="userDropdownMenu">
                                     {
                                         this.state.userMenu.items.map(function(item){
                                             return (
                                                 <ReactBootstrap.MenuItem key={item.id} eventKey={item.id}>{item.name}</ReactBootstrap.MenuItem>
                                             );
                                         })
                                     }
                                     </ReactBootstrap.NavDropdown>
                                 }
                              </ReactBootstrap.Nav>
                         ) : null
                     }
                 </ReactBootstrap.Navbar>
             </header>
         );
     }
 });

 module.exports = Header;
