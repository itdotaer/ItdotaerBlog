/**
 * Post Store
 */
var PostActions = require('../actions/postActions');
var Reflux = require('reflux');

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

    }
});

module.exports = PostStore;
