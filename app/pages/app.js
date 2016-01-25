/**
 * App Page
 */

var React = require('react');
// Header
var Header = require('../components/header');
// Footer
var Footer = require('../components/footer');
// Notification
var Notification = require('../components/notification');
//App
var App = React.createClass({
 render: function(){
     return (
         <section>
             <Header />
             {this.props.children}
             <Footer />
             <Notification />
         </section>
     );
 }
});

module.exports = App;
