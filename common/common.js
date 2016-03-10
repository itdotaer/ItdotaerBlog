/**
 * Common Tools
 */

exports.sortTags = function(tags, postTags){
    postTags.forEach(function(tag){
        var idx = tags.indexOf(tag.tagName);
        if(idx < 0){
            tags.push(tag.tagName);
        }
    });

    return tags;
};
