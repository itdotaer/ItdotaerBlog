var EditorActions = require('../actions/editorActions');
var Reflux = require('reflux');

var EditorStore = Reflux.createStore({
    value: '',
    listenables: EditorActions,
    onGetValue: function(){
        window.simplemde.value(this.value);
        this.trigger(this.value);
    },
    onSetValue: function(value){
        this.value = value;
        this.trigger(this.value);
    }
});

module.exports = EditorStore;
