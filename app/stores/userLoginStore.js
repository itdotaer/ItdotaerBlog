/**
 * UserLogin Store
 */
var Reflux = require('reflux');
var UserLoginActions = require('../actions/userLoginActions');
var NotificationActions = require('../actions/notificationActions');

var apiUrl = require('../../config').appInfo.apiUrl;
var loginUrl = '/login'

var common = require('../requests/common');

var UserLoginStore = Reflux.createStore({
    user: {},
    listenables: UserLoginActions,
    onLogin: function(user){
        var that = this;
        console.log('login', user);
        //Get all
        common.post(apiUrl + loginUrl, '', JSON.stringify(user))
            .then(function(res){
                if(res.errMsg){
                    console.error('Error', res.errMsg);
                    return;
                }

                if(!res.data){
                    NotificationActions.add('Error', 'UserName or password is wrong!', 'error');
                }else{
                    that.user = res.data;
                    that.trigger(that.user);
                }
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    },
    onLogout: function(){
        this.user = {};
        this.trigger(this.user);
    }
});

module.exports = UserLoginStore;
