var arrayUtils = {
    indexOfObj: indexOfObj
};

//默认搜索键为id.
function indexOfObj(array, findObj, searchPro){
    searchPro = searchPro || 'id';
    if(!(array instanceof Array)){
        console.error('Error: input array is not instanceof Array');
        return;
    }

    if(!(findObj instanceof Object)){
        console.error('Error: input array is not instanceof Array');
        return;
    }

    var idx = -1;

    array.forEach(function(obj, index){
        if(findObj[searchPro] === obj[searchPro]){
            idx = index;
        }
    });

    return idx;
}

module.exports = arrayUtils;
