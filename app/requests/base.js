var common = require('./common');

var apiUrl = require('../../config').appInfo.apiUrl;
var authUrl = '/auth';

var base = {
    auth: auth
};

function auth(loginName, password){
    common.post(apiUrl + authUrl, '', {loginName: loginName, password: password})
        .then(function(res){
            if(res.errMsg){
                console.error('Error:', res.errMsg);
                return;
            }
            //Set User Login Info To Cookie

            //Set token

        })
        .catch(function(err){
            //Error
            console.log('===>Cathch Error')
        });
}
module.exports = base;
