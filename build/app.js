webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Main
	 */

	// Css
	'use strict';

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../node_modules/bootstrap/dist/css/bootstrap.min.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(2);
	__webpack_require__(3);

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(161);
	var ReactRouter = __webpack_require__(162);
	var ReactRootstrap = __webpack_require__(211);
	var ButtonGroup = ReactRootstrap.ButtonGroup;
	var Button = ReactRootstrap.Button;

	var DemoComponent = React.createClass({
	    displayName: 'DemoComponent',

	    render: function render() {
	        return React.createElement(
	            ButtonGroup,
	            null,
	            React.createElement(
	                Button,
	                null,
	                'Left'
	            ),
	            React.createElement(
	                Button,
	                null,
	                'Middle'
	            ),
	            React.createElement(
	                Button,
	                null,
	                'Right'
	            )
	        );
	    }
	});

	ReactDOM.render(React.createElement(DemoComponent, null), document.getElementById('content'));

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);