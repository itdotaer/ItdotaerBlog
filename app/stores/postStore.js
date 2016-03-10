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
    onGet: function(index, size){
        var that = this;
        //Get all
        common.get(apiUrl + postsUrl, 'index=' + index + '&size=' + size)
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
    onGetPostsByTag: function(tag){
        var that = this;
        //Get all
        common.get(apiUrl + postsUrl + '/tags/' + tag, 'index=1&size=9999')
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

                if(res.data){
                    that.data.posts = [res.data];
                    that.data.total = 1;
                    that.trigger(that.data);
                }else{
                    NotificationActions.add('Error', "Post Not Found!", 'error');
                    //Navigate to posts page
                    HeaderActions.selectMenu('mainMenu', 0);
                }
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    },
    onDeleteById: function(id){
        if(!id || id == ''){
            NotificationActions.add('Error', 'No Valid Post Id', 'error');
            return;
        }
        common.delete(apiUrl + postsUrl + '/' + id, '')
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                console.log('res', res);

                if(res.data.n > 0 && res.data.ok == 1){
                    NotificationActions.add('Successed', 'Delete Successed!', 'success');
                    //Navigate to posts page
                    HeaderActions.selectMenu('mainMenu', 0);
                }else{
                    NotificationActions.add('Successed', 'Nothing Delete!', 'success');
                }
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
    },
    onUpdate: function(post){
        common.put(apiUrl + postsUrl + '/' + post.id, '', JSON.stringify(post))
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                if(res.data.n > 0 && res.data.ok == 1){
                    NotificationActions.add('Successed', 'Update Successed!', 'success');
                    //Navigate to posts page
                    HeaderActions.selectMenu('mainMenu', 0);
                }else{
                    NotificationActions.add('Successed', 'Nothing Update!', 'success');
                }

                //Navigate to posts page
                HeaderActions.selectMenu('mainMenu', 0);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    }
});

module.exports = PostStore;
