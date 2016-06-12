/**
 * About
 */

// React
var React = require('react');

// React-Bootstrap
var ReactBootstrap = require('react-bootstrap');

//AppInfo
var appInfo = require('../../config').appInfo;

var About = React.createClass({
    getInitialState: function() {
        return {
            showAbout: '爱编程，爱JS，爱Dota， 爱你~'
        };
    },
    render: function(){
        var toolTip = (
            <ReactBootstrap.Tooltip id="begForFocus">微信，求关注~</ReactBootstrap.Tooltip>
        );

        return (
            <section className="about">
                <div className="show-about">
                    {this.state.showAbout}
                </div>
                <ReactBootstrap.OverlayTrigger placement="top" overlay={toolTip}>
                  <span className="wx-qr-code"></span>
                </ReactBootstrap.OverlayTrigger>
                <span className="wx-display-name">Itdotaer</span>
            </section>
        );
    }
});

module.exports = About;
