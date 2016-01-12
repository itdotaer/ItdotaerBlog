require('../../node_modules/simplemde/dist/simplemde.min.css');
var SimpleMDE = require('../../node_modules/simplemde/dist/simplemde.min.js');

var React = require('react');
var Reflux = require('reflux');
var EditorActions = require('../actions/editorActions');
var EditorStore = require('../stores/editorStore');

var Editor =  React.createClass({
    mixins:[Reflux.listenTo(EditorStore, 'onValueChange')],
    getInitialState: function(){
        return {value: ''};
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
        var simplemde = new SimpleMDE({ element: document.getElementById("editor") });
        simplemde.codemirror.on("change", function(){
            that.handleValueChange(simplemde.value());
        });
    },
    render: function(){
        return (
            <div>
                <textarea id="editor" value={this.state.value}></textarea>
            </div>
        );
    }
});

module.exports = Editor;
