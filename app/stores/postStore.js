var PostActions = require('../actions/postActions');
var Reflux = require('reflux');
var $ = require('jquery');

var ApiUrl = require('../../config').appInfo.apiUrl;

var PostStore = Reflux.createStore({
    data: {total: 0, posts: []},
    listenables: PostActions,
    onGetAll: function(){
        //Get all
        $.get(ApiUrl + '/posts?index=1&size=99999', function(res){
            if(res.errMsg){
                console.error('Error:', res.errMsg);
            }else{
                this.data.posts = res.data;
                this.data.total = res.total;
                this.trigger(this.data);
            }
        }.bind(this));
    },
    onAdd: function(post){

    }
});

module.exports = PostStore;
