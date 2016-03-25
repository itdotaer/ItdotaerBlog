/**
 * Comment Store
 */

var Reflux = require('reflux');
var CommentActions = require('../actions/commentActions');
var NotificationActions = require('../actions/notificationActions');
var HeaderActions = require('../actions/headerActions');

var apiUrl = require('../../config').appInfo.apiUrl;
var commentUrl = '/comments';

var common = require('../requests/common');

var CommentStore = Reflux.createStore({
    data: {total: 0, comments: []},
    listenables: CommentActions,
    onGetByPostId: function(id){
        if(!id || id == ''){
            NotificationActions.add('Error', 'No Valid Post Id', 'error');
            return;
        }

        var that = this;
        //Get all
        common.get(apiUrl + commentUrl + '/' + id, '')
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                that.data.comments = res.data;
                that.data.total = res.total;
                that.trigger(that.data);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
            });
    },
    onAdd: function(id, comment, callback){
        var that = this;

        if(!id || id == ''){
            NotificationActions.add('Error', 'No Valid Post Id', 'error');
            return;
        }

        common.post(apiUrl + commentUrl + '/' + id, '', JSON.stringify(comment))
            .then(function(res){
                if(res.errMsg){
                    NotificationActions.add('Error', res.errMsg, 'error');
                    return;
                }

                NotificationActions.add('Successed', 'Submit Successed!', 'success');
                that.onGetByPostId(id);
                return callback(null, comment);
            })
            .catch(function(err){
                NotificationActions.add('Error', err, 'error');
                return callback(err);
            });
    }
});

module.exports = CommentStore;
