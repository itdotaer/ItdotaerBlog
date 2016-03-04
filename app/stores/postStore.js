/**
 * Post Store
 */

var Reflux = require('reflux');
var PostActions = require('../actions/postActions');
var NotificationActions = require('../actions/notificationActions');
var HeaderActions = require('../actions/headerActions');

var apiUrl = require('../../config').appInfo.apiUrl;
var postsUrl = '/posts';

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
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                that.data.posts = res.data;
                that.data.total = res.total;
                that.trigger(that.data);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    },
    onGetById: function(id){
        if(!id || id == ''){
            NotificationActions.add('Error', 'No Valid Post Id', 'error');
            return;
        }

        var that = this;
        //Get by postid
        common.get(apiUrl + postsUrl + '/' + id, '')
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                that.data.posts = [res.data];
                that.data.total = 1;
                that.trigger(that.data);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    },
    onAdd: function(post){
        common.post(apiUrl + postsUrl, '', JSON.stringify(post))
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                NotificationActions.add('Successed', 'Submit NewPost Successed!', 'success');

                //Navigate to posts page
                HeaderActions.selectMenu('mainMenu', 0);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    }
});

module.exports = PostStore;
