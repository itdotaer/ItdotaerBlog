/**
 * Post Store
 */

var Reflux = require('reflux');
var PostActions = require('../actions/postActions');
var NotificationActions = require('../actions/notificationActions');

var apiUrl = require('../../config').appInfo.apiUrl;
var postsUrl = '/posts'

var common = require('../requests/common');

var PostStore = Reflux.createStore({
    data: {total: 0, posts: []},
    listenables: PostActions,
    onGetAll: function(){
        var that = this;
        //Get all
        common.get(apiUrl + postsUrl, 'index=1&size=9999')
            .then(function(res){
                if(res.errMsg){
                    console.error('Error', res.errMsg);
                    return;
                }

                that.data.posts = res.data;
                that.data.total = res.total;
                that.trigger(that.data);
            })
            .catch(function(err){
                console.error('->Catch error', err);
            });
    },
    onAdd: function(post){
        common.post(apiUrl + postsUrl, '', JSON.stringify(post))
            .then(function(res){
                if(res.errMsg){
                    console.error('Error', res.errMsg);
                    return;
                }

                console.log('==>res', res);
            })
            .catch(function(err){
                console.error('->Catch error', err)
            });
    }
});

module.exports = PostStore;
