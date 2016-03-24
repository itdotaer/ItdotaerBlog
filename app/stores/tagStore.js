/**
 * Post Store
 */

var Reflux = require('reflux');
var TagActions = require('../actions/tagActions');
var NotificationActions = require('../actions/notificationActions');

var apiUrl = require('../../config').appInfo.apiUrl;
var postsUrl = '/posts';

var common = require('../requests/common');

var TagStore = Reflux.createStore({
    data: {tags:[]},
    listenables: TagActions,
    onGet: function(){
        var that = this;
        //Get all
        common.get(apiUrl + postsUrl + '/tags', '')
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                that.data.tags = res.data;
                that.trigger(that.data);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    }
});

module.exports = TagStore;
