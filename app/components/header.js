/**
 * Header
 */

// React
var React = require('react');
// Reflux
var Reflux = require('reflux');
// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

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
                 <ReactRootstrap.Navbar>
                    <ReactRootstrap.Navbar.Header>
                      <ReactRootstrap.Navbar.Brand>
                        <a href="#">{appInfo.appName}</a>
                      </ReactRootstrap.Navbar.Brand>
                    </ReactRootstrap.Navbar.Header>
                    <ReactRootstrap.Nav activeKey={this.state.hasOwnProperty('mainMenu') ? this.state.mainMenu.activeKey : -1} onSelect={this.handleMainMenuSelect} pullLeft={true}>
                        {
                            this.state.hasOwnProperty('mainMenu') ? (
                                this.state.mainMenu.items.map(function(item){
                                    return (
                                        <ReactRootstrap.NavItem key={item.id} eventKey={item.id}>{item.name}</ReactRootstrap.NavItem>
                                    );
                                })
                            ) : null
                        }
                     </ReactRootstrap.Nav>
                     {
                         //Not login menu
                         this.state.hasOwnProperty('userMenu') && !this.state.userMenu.user ? (
                             <ReactRootstrap.Nav activeKey={this.state.hasOwnProperty('userMenu') ? this.state.userMenu.activeKey : -1} onSelect={this.handleUserMenuSelect} pullRight={true}>
                             {
                                 this.state.userMenu.items.map(function(item){
                                     return (
                                         <ReactRootstrap.NavItem key={item.id} eventKey={item.id}>{item.name}</ReactRootstrap.NavItem>
                                     );
                                 })
                             }
                             </ReactRootstrap.Nav>
                         ) : null
                     }
                     {
                         //Login menu
                         this.state.hasOwnProperty('userMenu') && this.state.userMenu.user ? (
                             <ReactRootstrap.Nav onSelect={this.handleLoginUserMenuSelect} pullRight={true}>
                                 {
                                     <ReactRootstrap.NavDropdown eventKey="0" title={this.state.userMenu.user.name} id="userDropdownMenu">
                                     {
                                         this.state.userMenu.items.map(function(item){
                                             return (
                                                 <ReactRootstrap.MenuItem key={item.id} eventKey={item.id}>{item.name}</ReactRootstrap.MenuItem>
                                             );
                                         })
                                     }
                                     </ReactRootstrap.NavDropdown>
                                 }
                              </ReactRootstrap.Nav>
                         ) : null
                     }
                 </ReactRootstrap.Navbar>
             </header>
         );
     }
 });

 module.exports = Header;
