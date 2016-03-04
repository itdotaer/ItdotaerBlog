/**
 * UserLogin Store
 */
var Reflux = require('reflux');
var UserLoginActions = require('../actions/userLoginActions');
var NotificationActions = require('../actions/notificationActions');

var apiUrl = require('../../config').appInfo.apiUrl;
var loginUrl = '/login'

var common = require('../requests/common');

// isDebug
var isDebug = require('../../config').appInfo.isDebug;

var UserLoginStore = Reflux.createStore({
    user: null,
    listenables: UserLoginActions,
    onLogin: function(user){
        var that = this;
        if(isDebug) console.log('login', user);
        //Get all
        common.post(apiUrl + loginUrl, '', JSON.stringify(user))
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                if(!res.data){
                    NotificationActions.add('Error', 'UserName or password is wrong!', 'error');
                }else{
                    NotificationActions.add('Successed', 'Login Successed!', 'success');

                    that.user = res.data;
                    that.trigger(that.user);
                }
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    },
    onLogout: function(){
        this.user = null;
        this.trigger(this.user);
    },
    onCheckIfLogin: function(){
        var flag = false;
        
        if(this.user){
            flag = true;
        }

        this.trigger(flag);
    }
});

module.exports = UserLoginStore;
