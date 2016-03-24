/**
 * By Random Post Actions
 */

var Reflux = require('reflux');
var ByCommentNumPostActions = require('../actions/byCommentNumPostActions');
var NotificationActions = require('../actions/notificationActions');

var isDebug = require('../../config').appInfo.isDebug;
var apiUrl = require('../../config').appInfo.apiUrl;
var postsUrl = '/posts';

var common = require('../requests/common');

var ByCommentNumPostStore = Reflux.createStore({
    data: {posts:[]},
    listenables: ByCommentNumPostActions,
    onGet: function(){
        var that = this;
        //Get random posts
        common.get(apiUrl + postsUrl + '/getPosts', 'type=byCommentNum')
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

module.exports = ByCommentNumPostStore;
