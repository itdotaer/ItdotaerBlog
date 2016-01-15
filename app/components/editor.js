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
        console.log('===>3', value);

        this.setState({value: value});
    },
    handleValueChange: function(value){
        EditorActions.setValue(value);
    },
    componentDidMount: function(){
        console.log('==>1', this.state.value)
        EditorActions.getValue();
        var that = this;
        //Init Editor
        var simplemde = new SimpleMDE({ element: document.getElementById("editor") });
        simplemde.codemirror.on("change", function(){
            if(!simplemde.value()){
                return;
            }
            that.handleValueChange(simplemde.value());
        });
        console.log('==>4', this.state.value)
    },
    render: function(){
        return (
            <textarea id="editor" value={this.state.value}></textarea>
        );
    }
});

module.exports = Editor;
