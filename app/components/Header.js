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
                     <ReactRootstrap.Nav activeKey={this.state.hasOwnProperty('userMenu') ? this.state.userMenu.activeKey : -1} onSelect={this.handleUserMenuSelect} pullRight={true}>
                         {
                             this.state.hasOwnProperty('userMenu') ? (
                                 this.state.userMenu.items.map(function(item){
                                     return (
                                         <ReactRootstrap.NavItem key={item.id} eventKey={item.id}>{item.name}</ReactRootstrap.NavItem>
                                     );
                                 })
                             ) : null
                         }
                      </ReactRootstrap.Nav>
                 </ReactRootstrap.Navbar>
             </header>
         );
     }
 });

 module.exports = Header;
