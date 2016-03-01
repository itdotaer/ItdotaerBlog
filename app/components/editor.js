require('../../node_modules/simplemde/dist/simplemde.min.css');
var SimpleMDE = require('../../node_modules/simplemde/dist/simplemde.min.js');

var React = require('react');
var Reflux = require('reflux');
var EditorActions = require('../actions/editorActions');
var EditorStore = require('../stores/editorStore');

var Editor =  React.createClass({
    mixins:[Reflux.listenTo(EditorStore, 'onValueChange')],
    getInitialState: function(){
        return {value: '# Test'};
    },
    onValueChange: function(value){
        this.setState({value: value});
    },
    handleValueChange: function(value){
        EditorActions.setValue(value);
    },
    componentDidMount: function(){
        EditorActions.getValue();
        var that = this;
        //Init Editor
        window.simplemde = new SimpleMDE({ element: document.getElementById("editor"), spellChecker: false });
        window.simplemde.value(this.state.value);
        window.simplemde.codemirror.on("change", function(){
            if(!simplemde.value()){
                return;
            }

            that.handleValueChange(simplemde.value());
        });
    },
    render: function(){
        return (
            <textarea id="editor"></textarea>
        );
    }
});

module.exports = Editor;
