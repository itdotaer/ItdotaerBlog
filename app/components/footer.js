/**
 * Header
 */

// React
var React = require('react');
//AppInfo
var appInfo = require('../../config').appInfo;

var Footer = React.createClass({
    render: function(){
        return (
            <footer>
                <p>Copyright (c) 2015 <a className="blue-link" href={"mailto:"+appInfo.email}>{appInfo.author}</a> All Rights Reserved.</p>
                <p>
                    <a className="blue-link" href={appInfo.gitHubRepo} >{appInfo.appName}</a>
                </p>
            </footer>
        );
    }
});

module.exports = Footer;
