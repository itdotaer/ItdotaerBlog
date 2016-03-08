var $ = require('jquery');
var Promise = require('promise');

var common = {
    get: get,
    post: post,
    delete: remove,
    put: put
};

function ajax(type, url, data, success, error){
    $.ajax({
        type: type,
        url: url,
        data: data,
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, status, jqXHR){
            success(data, status, jqXHR);
        },
        error: function(xmlHttpRequest, status, err){
            error(xmlHttpRequest, status, err);
        }
    });
}

function get(baseUrl, queryStr){
    var promise = new Promise(function(resolve, reject){
        ajax('GET', baseUrl + (!queryStr || queryStr == '' ? '' : '?' + queryStr), '',
        function(data, status, jqXHR){
            resolve(data);
        }, function(xmlHttpRequest, status, err){
            reject(err);
        })
    });

    return promise;
}

function post(baseUrl, queryStr, data){
    var promise = new Promise(function(resolve, reject){
        ajax('POST', baseUrl + (!queryStr || queryStr == '' ? '' : '?' + queryStr), data,
        function(data, status, jqXHR){
            resolve(data);
        }, function(xmlHttpRequest, status, err){
            reject(err);
        });
    });

    return promise;
}

function remove(baseUrl, queryStr, data){
    var promise = new Promise(function(resolve, reject){
        ajax('DELETE', baseUrl + (!queryStr || queryStr == '' ? '' : '?' + queryStr), data,
        function(data, status, jqXHR){
            resolve(data);
        }, function(xmlHttpRequest, status, err){
            reject(err);
        });
    });

    return promise;
}

function put(baseUrl, queryStr, data){
    var promise = new Promise(function(resolve, reject){
        ajax('PUT', baseUrl + (!queryStr || queryStr == '' ? '' : '?' + queryStr), data,
        function(data, status, jqXHR){
            resolve(data);
        }, function(xmlHttpRequest, status, err){
            reject(err);
        });
    });

    return promise;
}

// function delete(){
//
// }
//
// function put(){
//
// }

module.exports = common;
