/**
 * Notification
 */
require('../styles/animate.css');
var React = require('react');
var Reflux = require('reflux');
var ReactToastr = require("react-toastr");
var ToastContainer = ReactToastr.ToastContainer;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

var NotificationActions = require('../actions/notificationActions');
var NotificationStore = require('../stores/notificationStore');

var Notification =  React.createClass({
    mixins:[Reflux.listenTo(NotificationStore, 'addNewNotificaion')],
    addNewNotificaion: function(notification){
        if(!notification.hasOwnProperty('action') || !notification.action){
            notification.action = 'success';
        }

        switch (notification.action) {
            case 'success':
                this.refs.container.success(
                  notification.title,
                  notification.message,
                  {
                      timeOut: notification.timeOut,
                      extendedTimeOut: notification.extendedTimeOut
                });
                break;
            case 'error':
                this.refs.container.error(
                  notification.title,
                  notification.message,
                  {
                      timeOut: notification.timeOut,
                      extendedTimeOut: notification.extendedTimeOut
                });
                break;
            case 'warning':
                this.refs.container.warning(
                  notification.title,
                  notification.message,
                  {
                      timeOut: notification.timeOut,
                      extendedTimeOut: notification.extendedTimeOut
                });
                break;
            case 'info':
                this.refs.container.info(
                  notification.title,
                  notification.message,
                  {
                      timeOut: notification.timeOut,
                      extendedTimeOut: notification.extendedTimeOut
                });
                break;
            default:
                console.error( 'Error: ' + notification.action + 'is error');
                break;
        }
    },
    render: function(){
        return (
            <ToastContainer ref="container"
                        toastMessageFactory={ToastMessageFactory}
                        className="toast-top-right" />
        );
    }
});

module.exports = Notification;
