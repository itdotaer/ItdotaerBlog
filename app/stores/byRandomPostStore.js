/**
 * By Random Post Actions
 */

var Reflux = require('reflux');
var ByRandomPostActions = require('../actions/byRandomPostActions');
var NotificationActions = require('../actions/notificationActions');

var isDebug = require('../../config').appInfo.isDebug;
var apiUrl = require('../../config').appInfo.apiUrl;
var postsUrl = '/posts';

var common = require('../requests/common');

var ByRandomPostStore = Reflux.createStore({
    data: {posts:[]},
    listenables: ByRandomPostActions,
    onGet: function(){
        var that = this;
        //Get random posts
        common.get(apiUrl + postsUrl + '/getPosts', '')
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                that.data.posts = res.data;
                that.trigger(that.data);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    }
});

module.exports = ByRandomPostStore;
