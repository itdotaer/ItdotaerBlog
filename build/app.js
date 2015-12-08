webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Main
	 */

	// Css
	'use strict';

	__webpack_require__(1);

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(159);
	var ReactRouter = __webpack_require__(160);
	var ReactRootstrap = __webpack_require__(209);
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
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);