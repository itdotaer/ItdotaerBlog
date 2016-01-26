/**
 * Header
 */

// React
var React = require('react');

//React-Router
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var history = require('../history');

 // React-Bootstrap
 var ReactRootstrap = require('react-bootstrap');

 var appInfo = require('../../config').appInfo;

 var Header = React.createClass({
     getInitialState: function(){
         return {
             mainMenu: {
                 activeKey: 0,
                 items: [
                     {
                         id: 0,
                         name: 'Index',
                         path: '/main'
                     },
                     {
                         id: 1,
                         name: 'About',
                         path: '/about'
                     }
                 ]
             },
             userMenu: {
                 activeKey: -1,
                 items: [
                     {
                         id: 0,
                         name: 'Login',
                         path: '/login'
                     }
                 ]
             }
         };
     },
     handleMainMenuSelect: function(selectedKey){
         history.pushState(null, this.state.mainMenu.items[selectedKey].path);

         var initState = this.state;
         initState.userMenu.activeKey = -1;
         initState.mainMenu.activeKey = selectedKey;
         this.setState(initState);
     },
     handleUserMenuSelect: function(selectedKey){
         history.pushState(null, this.state.userMenu.items[selectedKey].path);

         var initState = this.state;
         initState.userMenu.activeKey = selectedKey;
         initState.mainMenu.activeKey = -1;
         this.setState(initState);
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
                    <ReactRootstrap.Nav activeKey={this.state.mainMenu.activeKey} onSelect={this.handleMainMenuSelect} pullLeft={true}>
                        {
                            this.state.mainMenu.items.map(function(item){
                                return (
                                    <ReactRootstrap.NavItem key={item.id} eventKey={item.id}>{item.name}</ReactRootstrap.NavItem>
                                );
                            })
                        }
                     </ReactRootstrap.Nav>
                     <ReactRootstrap.Nav activeKey={this.state.userMenu.activeKey} onSelect={this.handleUserMenuSelect} pullRight={true}>
                         {
                             this.state.userMenu.items.map(function(item){
                                 return (
                                     <ReactRootstrap.NavItem key={item.id} eventKey={item.id}>{item.name}</ReactRootstrap.NavItem>
                                 );
                             })
                         }
                      </ReactRootstrap.Nav>
                 </ReactRootstrap.Navbar>
             </header>
         );
     }
 });

 module.exports = Header;
