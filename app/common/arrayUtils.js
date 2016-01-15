var arrayUtils = {
    indexOfObj: indexOfObj
};

//默认搜索键为id.
function indexOfObj(array, findObj, searchPro){
    console.log('array', array);
    console.log('findObj', findObj);
    console.log('searchPro', searchPro);
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
        console.log('obj value', obj[searchPro]);
        console.log('find obj value', findObj[searchPro]);
        if(findObj[searchPro] === obj[searchPro]){
            idx = index;
        }
    });

    return idx;
}

module.exports = arrayUtils;
