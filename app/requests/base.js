var common = require('./common');

var apiUrl = require('../../config').appInfo.apiUrl;
var authUrl = '/auth';

var base = {
    auth: auth,
    authBearerToken: authBearerToken
};

function auth(loginName, password){
    common.post(apiUrl + authUrl, '', {loginName: loginName, password: password})
        .then(function(data){
            //Set token
            console.log('===>Then Success')
        })
        .catch(function(err){
            //Error
            console.log('===>Cathch Error')
        });
}

function authBearerToken(beareerToken){

}

module.exports = base;
