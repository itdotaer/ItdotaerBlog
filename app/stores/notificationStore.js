/**
 * Notification Store
 */
var NotificationActions = require('../actions/notificationActions');
var Reflux = require('reflux');

var arrayUtils = require('../common/arrayUtils');

var NotificationStore = Reflux.createStore({
    notification: {},
    listenables: NotificationActions,
    onAdd: function(title, message, action, timeOut, extendedTimeOut){
        this.notification = {
            title: title,
            message: message,
            action: action,
            timeOut: timeOut,
            extendedTimeOut
        };
        this.trigger(this.notification);
    }
});

module.exports = NotificationStore;
