var EditorActions = require('../actions/editorActions');
var Reflux = require('reflux');

var EditorStore = Reflux.createStore({
    value: '',
    listenables: EditorActions,
    onGetValue: function(){
        console.log('===>2', this.value)
        this.trigger(this.value);
    },
    onSetValue: function(value){
        this.value = value;
        this.trigger(this.value);
    }
});

module.exports = EditorStore;
